import { HTTPService } from './../Providers/httpservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(
    private http: HTTPService
  ) { }

  ngOnInit() {
    // this.http.startPolling();
  }

}
