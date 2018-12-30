import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from "../../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OlympiadComponent } from './olympiad.component';

@NgModule({
  imports: [
    CommonModule,BrowserModule,MaterialModule,BrowserAnimationsModule,FormsModule
  ],
  declarations: [OlympiadComponent],
  exports: [OlympiadComponent],
  bootstrap : [OlympiadComponent],
  providers:[]
})
export class OlympiadModule { }
