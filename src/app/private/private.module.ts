import { ChartModule } from 'angular-highcharts';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { TableModule } from 'primeng/table';
import { PrivateComponent } from './private.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { EmbedVideo } from 'ngx-embed-video';
import { DemoChartsComponent } from './demo-charts/demo-charts.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTableModule,
    TableModule,
    HttpModule,
    EmbedVideo.forRoot(),
    SharedModule,
    ChartModule
  ],
  declarations: [
    PrivateComponent,
    PrivateFooterComponent,
    PrivateHeaderComponent,
    PrivateHomeComponent,
    AboutComponent,
    GalleryComponent,
    DemoChartsComponent
  ]
})
export class PrivateModule { }
