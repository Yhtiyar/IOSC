import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,CommonModule
  ],
  declarations: [TestComponent],
   bootstrap: [TestComponent],
   exports :[TestComponent]
})
export class SignInModule { }
