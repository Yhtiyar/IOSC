import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar.component'
import { userService } from '../../services/userService';
import { translateService } from '../../services/translateService';
@NgModule({
  imports: [
    CommonModule, RouterModule
    
  ],
  declarations: [NavBarComponent],
  bootstrap:[NavBarComponent],
  exports: [NavBarComponent],
  providers : [userService,translateService]
})
export class NavBarModule { }
