import { IService } from './IService';
import { Test } from '../models/Test/Test';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class testService implements IService {
       apiURL : string;
       header = new Headers ({'Content-Type':'application/json'});
       options= new RequestOptions({headers:this.header});
       constructor (private http:Http) {

       }
       public getAll():Promise <Test[]> {
           return this.http.get(`${this.apiURL}/test/getAll`)
                        .toPromise()
                        .then(res=>{return res.json()})
          
        }

       public addNew( test:Test ):Promise<Test> {
            return this.http.post(`${this.apiURL}/test/addNew`,
                        JSON.stringify(Test),this.options)
                        .toPromise()
                        .then(res=>res.json())

       }

       public update( test : Test ) : Promise <Test> {
           return this.http.post(`${this.apiURL}/test/update`,
                         JSON.stringify(Test),this.options)
                         .toPromise()
                         .then(res=>res.json())

       }

       public delete ( test : Test ) : void {
            this.http.post(`${this.apiURL}/test/delete`,
                         JSON.stringify(test), this.options)
                        .toPromise()
                        .then(res=>res.json())

       }


}