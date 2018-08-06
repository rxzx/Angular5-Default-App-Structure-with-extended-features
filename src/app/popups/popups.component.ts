import { Component, OnInit } from '@angular/core';
import { BsModalRef } from '../../../node_modules/ngx-bootstrap/modal';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
  public title: string;
  public closeBtnName: string;
  public list: any[] = [];
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}
