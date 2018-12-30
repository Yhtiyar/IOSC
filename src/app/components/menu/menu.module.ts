import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SubjectModule} from '../subject/subject.module'
import { MenuComponent} from './menu.component';
import {NavBarModule} from '../nav-bar/nav-bar.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material.module';
import { RouterModule, Routes } from '@angular/router';
import { translateService } from '../../services/translateService';
@NgModule({
  declarations: [
    MenuComponent,
    
  ],
  imports: [
    RouterModule,
    NavBarModule,MaterialModule,
    BrowserModule,SubjectModule,BrowserAnimationsModule
  ],
  providers: [translateService],
  bootstrap: [MenuComponent],
  exports:[MenuComponent]
})
export class MenuModule { }
