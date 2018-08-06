import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { PopupsComponent } from '../popups/popups.component';
import { PrivateComponent } from './private.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    TableModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  declarations: [
    PrivateComponent,
    PrivateFooterComponent,
    PrivateHeaderComponent,
    PrivateHomeComponent,
    PopupsComponent,
    AboutComponent
  ],
  entryComponents:[
    PopupsComponent
  ],

})
export class PrivateModule { }
