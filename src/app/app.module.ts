import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { HTTPService } from './Providers/httpservice';
import { PrivateModule } from './private/private.module';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [

  BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    TableModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule
  ],
  providers: [
    HttpClient,
    HTTPService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
