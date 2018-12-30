import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  imports: [MatButtonModule,MatInputModule,MatSelectModule,MatCheckboxModule,MatFormFieldModule,MatIconModule,MatExpansionModule],
  exports: [MatButtonModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatCheckboxModule,MatIconModule,MatExpansionModule],
})
export class MaterialModule { }