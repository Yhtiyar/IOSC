import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const olympRoutes: Routes = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(olympRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OlymplistRoutingModule { }