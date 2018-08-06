import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DataTableModule,
    TableModule,
    ModalModule.forRoot()

  ],

  declarations: [PrivateFooterComponent, PrivateHeaderComponent, PrivateHomeComponent, PrivateComponent, AboutComponent]

})
export class PrivateModule { }
