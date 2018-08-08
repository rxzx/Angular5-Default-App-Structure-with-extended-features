import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './header/header.component';
import { PublicFooterComponent } from './footer/footer.component';
import { PublicHomeComponent } from './home/home.component';
import { PublicSigninComponent } from './signin/signin.component';
import { PublicComponent } from './public.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [
    PublicHeaderComponent, 
    PublicFooterComponent, 
    PublicHomeComponent, 
    PublicSigninComponent, 
    PublicComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PublicModule { }
