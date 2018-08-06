import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupsComponent } from './popups/popups.component';
import { GalleryPopupComponent } from './gallery-popup/gallery-popup.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [
    PopupsComponent,
    GalleryPopupComponent
  ],
  entryComponents:[
    PopupsComponent,
    GalleryPopupComponent
  ]
})
export class SharedModule { }
