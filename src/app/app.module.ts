import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudenciViewComponent } from './studenci-view/studenci-view.component';
import { SamochodyComponent } from './samochody/samochody.component';
@NgModule({
declarations: [
AppComponent,
StudenciViewComponent,
SamochodyComponent
],
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }