import { Component, OnInit } from '@angular/core';
import { BsModalRef } from '../../../../node_modules/ngx-bootstrap/modal';
import { HTTPService } from '../../Providers/httpservice';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.css']
})
export class GalleryPopupComponent implements OnInit {
  public title: string;
  public closeBtnName: string;
  public list: any[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private http: HTTPService
  ) { }

  ngOnInit() {
  }

}
