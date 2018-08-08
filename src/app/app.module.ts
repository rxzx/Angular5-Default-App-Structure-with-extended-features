import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { HTTPService } from './Providers/httpservice';
import { PrivateModule } from './private/private.module';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    HttpClient,
    HTTPService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
