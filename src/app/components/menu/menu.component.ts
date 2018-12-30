import { Component,Output,EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { translateService } from '../../services/translateService';
@Component({
  selector: 'side-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output () onNewIndex = new EventEmitter();
    constructor(public ts : translateService){
        
    }
    oc(){
      this.onNewIndex.emit(2);
    }
}
