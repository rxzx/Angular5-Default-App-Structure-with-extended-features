import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PrivateFooterComponent, PrivateHeaderComponent, PrivateHomeComponent, PrivateComponent]
})
export class PrivateModule { }
