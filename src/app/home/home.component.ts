import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from '../../../node_modules/primeng/components/common/lazyloadevent';

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
    private api: ApiService
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
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.loading = true;

  }


  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if (this.data) {
        this.cities = this.data.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

}
