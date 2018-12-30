import { NgModule } from '@angular/core';
import { userService } from '../../services/userService';
import {subjectInfoComponent} from './subject-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { translateService } from '../../services/translateService';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,FormsModule,MaterialModule
  ],
  declarations: [subjectInfoComponent],
   bootstrap: [subjectInfoComponent],
   exports :[subjectInfoComponent],
   providers : [translateService]
})
export class SubjectInfoModule { }
