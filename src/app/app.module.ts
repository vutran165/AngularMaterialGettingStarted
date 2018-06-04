import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// tslint:disable-next-line:semicolon
// platformBrowserDynamic().bootstrapModule(AppModule)
