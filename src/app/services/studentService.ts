import { IService } from './IService';
import { User,Student } from '../models/Student/Sudent';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
    @Injectable()
    export class StudentService implements IService{
    public apiURL : string ="http://192.168.137.1:8080";
    header = new Headers ({'Content-Type':'application/json'});
    options= new RequestOptions({headers:this.header});
    students: Student[]=[];
    lastUsedId = 1;
    constructor (private http:Http) {
      
     }
   
    public delete(s:Student){

        let ind;
        for (let i=0; i<this.students.length; i++)
        if (this.students[i].id==s.id)
         ind=i;
        this.students.splice(ind);
    }
    public getStudentById(id : number):Observable<Student> {
       let url = `${this.apiURL}/student/get/${id}`;
       return this.http.get(url)
       .map(e=>e.json());
    }
     public getStudentByLogin(login : String):Observable<Student> {
       let ending="ss";
      // ending=login.split('.')[1];
       console.log(ending);

       let url = `${this.apiURL}/student/getByLogin/${login}/${ending}`;
       return this.http.get(url)
       .map(e=>e.json());
    }

    public update(s:Student):Observable<Student> {
        let url = `${this.apiURL}/student/Update`;
        return this.http.post(url,
        JSON.stringify(s),
        this.options)
        .map(res=>{ console.log("updating service"); return res.json()})
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
    public getAll():Observable<Student[]> {
        let url = `${this.apiURL}/student/getAll`;
        return this.http.get(url)
        .map(res=>{ console.log(res); return res.json()})
     }
   
    public addNew(student :Student):Observable<Student> {
        console.log("adding");
        let url = `${this.apiURL}/student/addNew`;
       
        return this.http.post(url,
                JSON.stringify(student),
                 this.options)
                .map(res=>{console.log(res,res.json()); return res.json();})
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    
                
                        
    }
     

/*
    public delete(student:Student) {
               this.http.post(`${this.apiURL}/student/delete`,
                         JSON.stringify(student), this.options)
                        .toPromise()
                        .then(res=>res.json())

    }

 
    private handleError(error) {
        console.error(error);
        return Promise.reject(error.message || error)
    }
*/
}
