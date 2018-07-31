import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class HTTPService {
  private baseUrl = '';
  constructor(
    private http: HttpClient
  ) {
  }
  getData() {
    return this.http.get(`${this.baseUrl}/assets/data/election.json`);
  }

}
