import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DataTableModule } from 'primeng/datatable';
import { ChartModule } from 'angular-highcharts';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxMaskModule } from 'ngx-mask';
import { NgxSocialLoginModule } from 'ngx-social-login';
import { PrivateFooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './header/header.component';
import { PrivateHomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DemoChartsComponent } from './demo-charts/demo-charts.component';
import { FeatureComponent } from './feature/feature.component';
import {BlockUIModule} from 'primeng/blockui';
import { FormLoaderComponent } from './form-loader/form-loader.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    HttpModule,
    EmbedVideo.forRoot(),
    SharedModule,
    ChartModule,
    FileUploadModule,
    NgxMaskModule.forRoot(),
    NgxSocialLoginModule.init(
      {
        // google: {
        //   client_id: 'YOUR_CLIENT_ID'
        // },
        facebook: {
          initOptions: {
            appId: '30831827156266'
          }
        }
      }
    ),
    BlockUIModule
  ],
  declarations: [
    PrivateComponent,
    PrivateFooterComponent,
    PrivateHeaderComponent,
    PrivateHomeComponent,
    AboutComponent,
    GalleryComponent,
    DemoChartsComponent,
    FeatureComponent,
    FormLoaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrivateModule { }
