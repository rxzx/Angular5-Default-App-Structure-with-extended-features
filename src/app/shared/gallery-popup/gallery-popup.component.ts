import { Component, OnInit } from '@angular/core';
import { BsModalRef } from '../../../../node_modules/ngx-bootstrap/modal';
import { HttpServiceProvider } from '../../Providers/http.service';

@Component({
  selector: 'app-gallery-popup',
  templateUrl: './gallery-popup.component.html',
  styleUrls: ['./gallery-popup.component.scss']
})
export class GalleryPopupComponent implements OnInit {
  public title: string;
  public closeBtnName: string;
  public list: any[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private http: HttpServiceProvider
  ) { }

  ngOnInit() {
  }

}
