import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { HTTPService } from './Providers/httpservice';
import { PrivateModule } from './private/private.module';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StorageService } from './Providers/storageservice';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    ToastrModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient,
    HTTPService,
    StorageService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
