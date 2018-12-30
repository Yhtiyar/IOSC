import { Component, OnInit, Input } from '@angular/core';
import { translateService } from '../../services/translateService';
@Component({
  selector: 'sub',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    @Input() subject:string;
    inf:Boolean;
    mth:Boolean;
    ph:Boolean;
    eng:Boolean;
    bio:Boolean;
    chem:Boolean;
    tm:Boolean;
    hist:Boolean;
    rus:Boolean;
   constructor(public ts:translateService) {
      
   }

  ngOnInit() {
    this.subject=this.subject.toLowerCase();
      switch(this.subject){
        case "informatics" :{ this.inf=true; break;}
        case "math" :{ this.mth=true; break;}
        case "physics" :{ this.ph=true; break;}
        case "english" :{ this.eng=true; break;}
        case "biology" :{ this.bio=true; break;}
        case "chemistry" :{ this.chem=true; break;}
        case "tmdili" :{ this.tm=true; break;}
        case "history" :{ this.hist=true; break;}
        case "rus" :{ this.rus=true; break;}
      }
  }

}
