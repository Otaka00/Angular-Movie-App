//Add ngmodel for forms
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Import the AppComponent
import { LoginComponent } from './login/login.component'; // Import the LoginComponent

@NgModule({
  declarations: [
    // your components here
    AppComponent,
    LoginComponent
  ],
  imports: [
    // other modules
    CommonModule
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
