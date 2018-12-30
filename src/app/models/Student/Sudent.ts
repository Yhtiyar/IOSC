import { Country  } from  '../Location/Location';
 
export interface User {
    login : string
     id : number;
     name : string;
     surname : string;
     userTypeId : number
     password : string;
     
}

export class Admin implements User {
    public userTypeId: number = 1;
    public id: number;
    constructor(public login: string, public password, public name: string, public surname : string) {

    }
}
export class Teacher implements User {
    public userTypeId: number = 2;
    public id:number;
    constructor(public login:string, public password, public name: string, public surname : string, 
                                      public countryId:number ) {

    }   
     
}
export class Student implements User{
    public userTypeId = 3;
    public id:number=-1;
     public raiting : number=1500;
     public teacherId:number;
    constructor ( public login:string , public password,public name : string, public surname : string  , 
                                                     public grade:number, public countryId:number){
                                                
    }
}

