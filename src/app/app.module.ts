import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component'; // Import the AppComponent
import { LoginComponent } from './Components/login/login.component'; // Import the LoginComponent
import { CatalogComponent } from './Components/catalog/catalog.component'; // Import the CatalogComponent

import { AppRoutingModule } from './app.routes';
import { MovieApiService } from './Services/movie-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
