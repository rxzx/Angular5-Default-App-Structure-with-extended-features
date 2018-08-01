import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from '../../../node_modules/primeng/components/common/lazyloadevent';
import { HTTPService } from '../Providers/httpservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  public cities: any;
  public cols: any[];
  public totalRecords: number;
  public loading: boolean;
  constructor(
    private api: HTTPService
  ) { }


  ngOnInit() {
    this.api.getData()
      .subscribe((response: any) => {
        this.data = response.city || [];
        this.totalRecords = this.data.length;
        console.log(this.data);
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




}
