import { NgModule } from '@angular/core';
import {StudentService} from '../../services/studentService';
import { TopRatedComponent } from './top-rated.component';
import { translateService } from '../../services/translateService';
import { FormsModule }          from '@angular/forms';

@NgModule({
  imports: [
  FormsModule
  ],
  declarations: [TopRatedComponent],
   bootstrap: [TopRatedComponent],
   exports :[TopRatedComponent],
   providers :[StudentService,translateService]
})
export class TopRatedModule { }
