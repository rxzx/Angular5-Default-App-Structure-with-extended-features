import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './common/app-header/app-header.component';
import { AppFooterComponent } from './common/app-footer/app-footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    TableModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent, data: { title: 'Home |  Admin Panel' } }
    ], {
        useHash: false,
        preloadingStrategy: PreloadAllModules
      })
  ],
  providers: [
    HttpClient,
    ApiService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
