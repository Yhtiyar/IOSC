import { Component } from '@angular/core';
import { userService } from './services/userService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private uservice:userService){

  }
  title = 'app';
  index: Number=1;
  
}
