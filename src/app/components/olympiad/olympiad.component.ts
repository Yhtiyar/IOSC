import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'olympiad',
  templateUrl: './olympiad.component.html',
  styleUrls: ['./olympiad.component.css'] 
})
export class OlympiadComponent implements OnInit {
  @Input() sellected:number;
  @Output() onEnded = new EventEmitter();
   @Output() onQuite = new EventEmitter();
  answers=[10];
  checked=[];
  constructor() {
    for (let i=1; i<=5; i++)
    this.checked.push(false);
    this.checked[1] = this.checked[2] = this.checked[3]= this.checked[4] = false;    
  } 
  ch(i){
    this.checked[i]=true;
     console.log(i);
     for (let i1=1; i1<=4; i1++){
       if (i!=i1)
       this.checked[i1]=false;
     }
  }
  barla (i){
let bal = 0;
    if (i == 1){
       
       if (this.answers[2] == 6)
       bal+=10;
       if(this.answers[3] == 361)
      bal+=20;
      if (this.answers[4] == 10)
      bal+=20;
       if (this.answers[5] == 9857)
       bal+=25;
      if (this.answers[6] == 198)
       bal+=20;
        if (this.checked[3] && !this.checked[2]  && !this.checked[1] && !this.checked[4])
        bal+=5;
      }
      else if (i==2){
        if (this.answers[1] == 10)
            bal+=10;
      }
    
    return bal;
  }
  quite(){
    this.sellected=null;
    this.onQuite.emit();
  }
  onc(){
   let bal = this.barla(this.sellected);
   this.onEnded.emit(bal);
    
  }
  ngOnInit() {

  }

}
