import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { userService } from '../../services/userService';
import { user } from '../../services/userService';
import { translateService } from '../../services/translateService';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  cUser : user;
  constructor(public uservice: userService, public ts:translateService) { 
     this.uservice.getUser()
     .subscribe(us => this.cUser = us)
  }
  onQuite(){
    this.uservice.quit();
  }
  ngOnInit() {
  }

}
