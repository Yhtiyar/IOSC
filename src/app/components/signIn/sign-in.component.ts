import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/userService';
import { RouterModule, Routes , Router } from '@angular/router';
import {translateService} from '../../services/translateService';
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login : string;
  password : string;

  constructor(private uservice:userService, private router:Router, public  ts : translateService) {
        console.log(ts.getTranslate("Gir"));
   }
  onLogIn(){
//    console.log(this.login, this.password);
     this.uservice.logIn(this.login,this.password,this.router) 
    
     if (this.uservice.currentUser.isLoggedIn)  {

    this.navigate();
    }
   }
   navigate(){
       this.router.navigate(['/menu']);
   }
  ngOnInit() {

    

  }

}
