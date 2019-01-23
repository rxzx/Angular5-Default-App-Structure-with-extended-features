import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { HttpServiceProvider } from './Providers/http.service';
import { PrivateModule } from './private/private.module';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { StorageServiceProvider} from './Providers/storage.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppHttpInterceptor } from './Providers/app-http-interceptor';
import { UtilServiceProvider } from './Providers/util.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase,"AdminApp")
  ],
  exports: [
    ToastrModule,
    AppRoutingModule,
  ],
  providers: [
    HttpClient,
    HttpServiceProvider,
    StorageServiceProvider,
    UtilServiceProvider,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
