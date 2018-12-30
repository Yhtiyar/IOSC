import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { userService } from '../../services/userService';
import {translateService } from '../../services/translateService' 
@Component({
  selector: 'olymp-list',
  templateUrl: './olymplist.component.html',
  styleUrls: ['./olymplist.component.css']
})
export class OlymplistComponent implements OnInit {
  bal: number[]=[10];
  sellected;
  constructor(private uservice: userService, public ts : translateService) {
    
  }
  onQuite(){
    this.sellected=null;
  } 
  setB(i,b){
    console.log(b);
    this.sellected = null;
    this.uservice.currentUser.bal[i] = b;
  }
  onc(i){
    if (this.uservice.currentUser.bal[i]!=null)
    return alert(this.ts.getTranslate( "Siz eýýäm gatnaşdyňyz"));
    if (!this.uservice.currentUser.isLoggedIn)
    return alert(this.ts.getTranslate( 'Haýyş akkaundyňyza giriň'));
    this.sellected = i;
  }
   ngOnInit() {
  }
   
}
