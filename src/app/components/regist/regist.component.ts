import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student/Sudent';
import { StudentService } from '../../services/studentService';
import { RouterModule, Routes , Router } from '@angular/router';
import { userService } from '../../services/userService';
import { translateService } from '../../services/translateService';
@Component({
  selector: 'regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
 
  grades :number[];
  countries ;
  sellectedGrade:number;
  sellectedCountry:string;
  emailAdress : string;
  name :string;
  surname : string;
  password: string;
  isFilled :boolean;

  editMode: boolean;
  curStudent:Student;
  constructor(private serice : StudentService, public uservice :userService, private router: Router, public ts : translateService) { 
   this.grades=[
     6,7,8,9,10,11
   ]
  
     this.countries=[
       "China", "Russia","USA","Romania","Poland","Turkmenistan"
    ]  
   this.isFilled=false;
   if (uservice.currentUser.isLoggedIn){
      this.editMode=true;
      this.serice.getStudentById(uservice.currentUser.id)
      .subscribe(
         e=>{ this.curStudent=e;
          this.fill(this.curStudent);}
      )
     
     
   }
  
  
  }
   fill(s :Student){
     this.emailAdress=s.login;
     this.password=s.password;
     this.name=s.name;
     this.surname=s.surname;
     this.sellectedCountry=this.countries[s.countryId];
     this.sellectedGrade=s.grade;
     }
   findInd(c) :number {
     console.log(c);
     for (let i = 0; i< this.countries.length; i++){
       if (this.countries[i]==c)
       return i;
     }
   }
   edit(){
     console.log("updating");
      this.isFilled=this.isInputFilled();
       if (!this.isFilled)
       return this.ts.getTranslate("Haýyş dolduryň");
     console.log("passed");
      let s= new Student(this.emailAdress,this.password ,this.name,this.surname,this.sellectedGrade,this.getIndOfCountry(this.sellectedCountry));
      s.id=this.curStudent.id;
    //  console.log(s);
    //  console.log(this.serice.getStudentByLogin(this.emailAdress));
     this.serice.update(s)
     .subscribe(el=>{
       console.log("updating");
        this.uservice.currentUser.name=s.name;
     this.uservice.currentUser.surname=s.surname;
    
      this.router.navigate(['/menu']);
     });  
    
      console.log("failed");

   }
   clearAll() : void{
     this.emailAdress = this.name = this.password = this.sellectedCountry = this.sellectedGrade =this.surname = null;
   }
   isInputFilled(){
       if (this.editMode){
         if (  !this.name || !this.surname || !this.sellectedCountry
                                                             || !this.sellectedGrade) return false;
       }
      else  if (!this.emailAdress || !this.password || !this.name || !this.surname || !this.sellectedCountry
                                                             || !this.sellectedGrade) return false;

       return true;
   }
   clicked() : void{
     
     this.isFilled=this.isInputFilled();
     if (!this.isFilled)
     alert(this.ts.getTranslate("Haýyş dolduryň"));
     
     
   }
   getIndOfCountry(country :string){
        for (let i = 0; i<this.countries.length; i++){
          if (this.countries[i] == country)
          {return i;}
        }
   }
   verify(code,bt ): void{
   //  console.log(code);
      if (!this.isCorrectCode(code.value)){
        alert(this.ts.getTranslate( "Nädogry kod")); return;
      }
      let s= new Student(this.emailAdress,this.password ,this.name,this.surname,this.sellectedGrade,this.getIndOfCountry(this.sellectedCountry));
       this.serice.addNew(s).subscribe(e=>{s=e; this.uservice.logInNew(s)});
     
      this.router.navigate(['/menu']);
   }
   isCorrectCode (code : string) :boolean{
         return code == "123";
   }
  ngOnInit() {

  }

}
