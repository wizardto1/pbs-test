import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full'},{path:'home', component: HomeComponent, pathMatch:'full' },{path:'start',component:StartComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, StartComponent, HomeComponent, HeaderComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
