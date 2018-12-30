import { IService } from './IService';
import { Entry,Comment } from '../models/Blog/Blog';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class BlogService  {
       apiURL : string;
       header = new Headers ({'Content-Type':'application/json'});
       options= new RequestOptions({headers:this.header});
       constructor (private http:Http) {

       }
       public getAllEntry():Promise <Entry[]> {
           return this.http.get(`${this.apiURL}/entry/getAll`)
                        .toPromise()
                        .then(res=>{return res.json()})
          
        }

       public addNewEntry( Entry:Entry ):Promise<Entry> {
            return this.http.post(`${this.apiURL}/entry/addNew`,
                        JSON.stringify(Entry),this.options)
                        .toPromise()
                        .then(res=>res.json())

       }

       public updateEntry( Entry : Entry ) : Promise <Entry> {
           return this.http.post(`${this.apiURL}/entry/update`,
                         JSON.stringify(Entry),this.options)
                         .toPromise()
                         .then(res=>res.json())

       }

       public deleteEntry ( Entry : Entry ) : void {
            this.http.post(`${this.apiURL}/entry/delete`,
                         JSON.stringify(Entry), this.options)
                        .toPromise()
                        .then(res=>res.json())

       }
 /*-------------------------------------------------------------------------------------*/
        public getAllComment():Promise <Comment[]> {
           return this.http.get(`${this.apiURL}/comment/getAll`)
                        .toPromise()
                        .then(res=>{return res.json()})
          
        }

       public addNewComment( Comment:Comment ):Promise<Comment> {
            return this.http.post(`${this.apiURL}/comment/addNew`,
                        JSON.stringify(Comment),this.options)
                        .toPromise()
                        .then(res=>res.json())

       }

       public updateComment( Comment : Comment ) : Promise <Comment> {
           return this.http.post(`${this.apiURL}/comment/update`,
                         JSON.stringify(Comment),this.options)
                         .toPromise()
                         .then(res=>res.json())

       }

       public deleteComment ( Comment : Comment ) : void {
            this.http.post(`${this.apiURL}/comment/delete`,
                         JSON.stringify(Comment), this.options)
                        .toPromise()
                        .then(res=>res.json())

       }
}