import { Component, OnInit,Input,Output } from '@angular/core';
import { Test } from '../../models/Test/Test'
@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() test:Test;
  constructor() { 
  
  }
  ngOnInit() {
  }

}
