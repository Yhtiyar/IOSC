import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SubjectComponent} from '../subject/subject.component'
import { translateService } from '../../services/translateService';

@NgModule({
  declarations: [
    SubjectComponent,
    
  ],
  imports: [
   BrowserModule
  ],
  providers: [translateService],
  bootstrap: [SubjectComponent],
  exports:[SubjectComponent]
})
export class SubjectModule { }
