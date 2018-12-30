import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/studentService'
import {Student} from '../../models/Student/Sudent'
import { translateService } from '../../services/translateService';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  students: Student[]=[];
   i;
   countries=[];
  constructor(private studentService:StudentService , public ts : translateService) {
  
     this.countries=[
       "China", "Russia","USA","Romania","Poland","Turkmenistan"
    ]
    
    studentService.getAll()
    .subscribe(el => {this.students= el ;this.sortStudents();})
//    this.init();  
    
    console.log(this.students);
    try{
    
  }
  catch( ex){
    console.log(ex);
  }
   }
   
   getI(s)
   {
     for (let i=0; i<this.students.length; i++)
     {
       if (this.students[i]==s)
       return i+1;
     }
   }
   sortStudents(){
       this.students.sort( (a:Student ,b: Student )=> {return b.raiting -a.raiting});
   }

  ngOnInit() {
     this.i=0;
          
  }

}
