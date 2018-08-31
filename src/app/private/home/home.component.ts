import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../../Providers/httpservice';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PopupsComponent } from '../../shared/popups/popups.component';
import { GalleryPopupComponent } from '../../shared/gallery-popup/gallery-popup.component';

@Component({
  selector: 'app-private-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PrivateHomeComponent implements OnInit {
  public data: any;
  public cities: any;
  public cols: any[];
  public totalRecords: number;
  public loading: boolean;
  public bsModalRef: BsModalRef;
  public blocked: boolean;
  constructor(
    private api: HTTPService,
    private modalService: BsModalService
  ) {
    this.blocked = true;
   }


  ngOnInit() {
    this.api.getData()
      .subscribe((response: any) => {
        this.data = response.city || [];
        this.totalRecords = this.data.length;
        this.blocked = false;
        // console.log(this.data);
      }, (e) => {
        console.log(e);
      });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'province', header: 'Province' },
      { field: 'name', header: 'Name2' },
      { field: 'province', header: 'Province2' }
    ];

    this.loading = true;

  }

  openModel(){
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };

    this.bsModalRef = this.modalService.show(
                      PopupsComponent, 
                      {
                        initialState,
                        class: 'gray modal-lg'
                      }
                    );
    this.bsModalRef.content.closeBtnName = 'Close';


  }

  openGalleryModel(){
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
    };

    this.bsModalRef = this.modalService.show(
                      GalleryPopupComponent, 
                      {
                        initialState,
                        class: 'gray modal-lg'
                      }
                    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }




}
