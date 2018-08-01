import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DataTableModule,
    TableModule
  ],
  declarations: [PrivateFooterComponent, PrivateHeaderComponent, PrivateHomeComponent, PrivateComponent]
})
export class PrivateModule { }
