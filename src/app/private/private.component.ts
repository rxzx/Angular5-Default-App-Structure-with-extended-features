import { Component, OnInit } from '@angular/core';
import { HttpServiceProvider } from '../Providers/http.service';
import { routerTransition } from '../animations/route-transition';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
  animations: [routerTransition]
})
export class PrivateComponent implements OnInit {

  constructor(
    private http: HttpServiceProvider
  ) { }

  ngOnInit() {
    // this.http.startPolling();
  }


  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
