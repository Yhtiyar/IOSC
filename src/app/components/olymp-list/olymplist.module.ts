import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from "../../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OlymplistComponent} from './olymplist.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {FormControl} from '@angular/forms';
import {OlympiadModule} from '../olympiad/olympiad.module';
import { translateService } from '../../services/translateService';
@NgModule({
  imports: [
    CommonModule,BrowserModule,MaterialModule,BrowserAnimationsModule,RouterModule,FormsModule,OlympiadModule
  ],
  declarations: [OlymplistComponent],
  exports: [OlymplistComponent],
  bootstrap : [OlymplistComponent]
})
export class OlympListModule { }
