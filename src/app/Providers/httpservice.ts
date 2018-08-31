import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class HTTPService {
  private baseUrl = '/';
  constructor(
    private http: HttpClient
  ) {
  }
  getData() {
    return this.http.get(`${this.baseUrl}assets/data/election.json`);
  }

  startPolling() {
    setTimeout(() => {
      this.polling();
    }, 1500);
  }

  polling() {
    setTimeout(() => {
      this.http.get(`${this.baseUrl}assets/data/election.json`)
        .subscribe((response: any) => {
          console.log("polling");
          this.startPolling();
        });
    }, 2500);
  }


}
