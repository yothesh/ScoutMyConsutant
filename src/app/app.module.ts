import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,MdChipsModule,MdInputModule,MdSelectModule } from '@angular/material';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { UsersComponent } from './components/users/users.component';

import  { StackExchangeDataService } from './services/stack-exchange-data.service'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdChipsModule,
    MdInputModule,
    MdSelectModule
  ],
  providers: [StackExchangeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
