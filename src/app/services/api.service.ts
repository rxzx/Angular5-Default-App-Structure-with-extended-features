import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class ApiService {
  private baseUrl:string="";
  constructor(
    private http: HttpClient
  ) {
  }

  getData(){
    return this.http.get<any>(`${this.baseUrl}/assets/data/election.json`,{});
  }

}
