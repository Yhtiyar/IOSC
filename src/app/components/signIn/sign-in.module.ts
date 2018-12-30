import { NgModule } from '@angular/core';
import { userService } from '../../services/userService';
import { SignInComponent } from './sign-in.component';
import { BrowserModule } from '@angular/platform-browser';
import { translateService } from '../../services/translateService';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from "../../material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,FormsModule
  ],
  declarations: [SignInComponent],
   bootstrap: [SignInComponent],
   exports :[SignInComponent],
   providers : [userService,translateService]
})
export class SignInModule { }
