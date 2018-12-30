import  { User } from '../models/Student/Sudent';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StudentService } from './studentService';
import { RouterModule, Routes , Router } from '@angular/router';
export class user implements User{
    password : string;
    login : string;
    id : number;
    name: string;
    surname:string;
    userTypeId : number;
    isLoggedIn : boolean;
    bal : number[]= [10];
    constructor(){
          this.isLoggedIn = false;
    }
 
    logIn(tuser : User){
        console.log(tuser);
        this.login = tuser.login;
        this.isLoggedIn =true;
        this.id = tuser.id;
        this.name = tuser.name;
        this.surname = tuser.surname;
    }
   
}

@Injectable ()
export class userService {
     currentUser : user;
     private users : User[];
     constructor( private _studentService: StudentService){
         this.currentUser = new user();
         this.init();
   }
   init(){
       this._studentService.getAll()
       .subscribe(e => this.users =e)
    } 
   public getUser() : Observable<user>{
       return of(this.currentUser);
   }
   public  isLogged(){
         return this.currentUser.isLoggedIn;
     }

    public quit(){
         this.currentUser = new user();
     }

    public logInNew(tuser:User){
         this.currentUser.logIn(tuser);
     }

    public logIn(login :string, password :string, nav:Router) {
          let s ;

           this._studentService.getStudentByLogin(login)
           .subscribe(
               el=>{
                   s=el;
                     console.log(nav);

                if (password == s.password){
                this.logInNew(s); nav.navigate(['/menu']); }
               }, ()=>{},
               ()=>{
                  
               }
               
               
           )
        
    }  
    
     
}