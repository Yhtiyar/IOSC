import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RegistComponent} from './regist.component';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from '../../services/studentService';
import { userService } from '../../services/userService';
import { translateService } from '../../services/translateService';
@NgModule({
  imports: [
    CommonModule,BrowserModule,MaterialModule,BrowserAnimationsModule,FormsModule
  ],
  declarations: [RegistComponent],
  exports: [RegistComponent],
  bootstrap : [RegistComponent],
  providers:[StudentService, userService,translateService]
})
export class RegistModule { }
