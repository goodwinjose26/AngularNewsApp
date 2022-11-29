import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { HttpClientModule } from '@angular/common/http';
import { View2Component } from './view2/view2.component';
const myRoute:Routes=[
  {
    path:"",
    component:ViewnewsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewnewsComponent,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
