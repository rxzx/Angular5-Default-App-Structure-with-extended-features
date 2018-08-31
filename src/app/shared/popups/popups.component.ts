import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HTTPService } from '../../Providers/httpservice';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit {
  public title: string;
  public closeBtnName: string;
  public list: any[] = [];

  public customSelected: string;
  public statesComplex: any[] = [];


  constructor(
    public bsModalRef: BsModalRef,
    private http: HTTPService
  ) { }

  ngOnInit() {
    this.list.push('PROFIT!!!');
    this.http.getData().subscribe((res: any) => {

    });

    this.statesComplex =  [
      { id: 1, name: 'Alabama', region: 'South' },
      { id: 2, name: 'Alaska', region: 'West' },
      { id: 3, name: 'Arizona', region: 'West' },
      { id: 4, name: 'Arkansas', region: 'South' },
      { id: 5, name: 'California', region: 'West' },
      { id: 6, name: 'Colorado', region: 'West' },
      { id: 7, name: 'Connecticut', region: 'Northeast' },
      { id: 8, name: 'Delaware', region: 'South' },
      { id: 9, name: 'Florida', region: 'South' }
    ];



  }

}
