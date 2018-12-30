import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignInModule} from "./components/signIn/sign-in.module"
import { AppComponent } from './app.component';
import { TopRatedComponent} from "./components/top-rated/top-rated.component";
import { StudentService} from './services/studentService';
import { MenuModule} from './components/menu/menu.module';
import { RegistModule} from './components/regist/regist.module';
import { RegistComponent } from './components/regist/regist.component';
import { SignInComponent } from './components/signIn/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { OlympListModule } from './components/olymp-list/olymplist.module';
import { OlymplistComponent } from './components/olymp-list/olymplist.component';
import { RouterModule, Routes,Router } from '@angular/router';
import { FormsModule }          from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import {HttpModule} from '@angular/http';
import { userService } from './services/userService';
const appRoutes : Routes =[
  { path: 'menu', component:MenuComponent},
  { path: '', redirectTo:'/menu', pathMatch:'full'},
  { path: 'olimpiadalar', component:OlymplistComponent },
  { path: 'registrasiya', component:RegistComponent},
  { path: 'edit', component:RegistComponent},
  { path: 'sign-in', component:SignInComponent},
  { path: 'top-rated', component:TopRatedComponent}
];

@NgModule({
  declarations: [
    AppComponent,
   TopRatedComponent,
   ],
  imports: [ 
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      
    ),
    OlympListModule,
    NavBarModule,
    MaterialModule,
    BrowserAnimationsModule,
    MenuModule, 
    BrowserModule,
    SignInModule,
    RegistModule,
    HttpModule
   ],
  providers: [StudentService, userService],
  bootstrap: [AppComponent]
})

export class AppModule { }
