import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { Page1Component } from './page1/page1.component';
import { TimerComponent } from './timer/timer.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';



const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full'},{path:'home', component: HomeComponent, pathMatch:'full' },{path:'start',component:StartComponent},{path:'info',component:InfoComponent},{path:'page1',component:Page1Component},{path:'page2',component:Page2Component},{path:'page3',component:Page3Component},{path:'page4',component:Page4Component},{path:'page5',component:Page5Component}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, StartComponent, HomeComponent, HeaderComponent, InfoComponent, Page1Component, TimerComponent, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
