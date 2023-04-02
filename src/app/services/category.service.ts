import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  add(data: any) {
    return this.httpClient.post(this.url +
      "/category/add", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  update(data: any) {
    return this.httpClient.post(this.url +
      "/category/update", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  getCategorys() {
    return this.httpClient.get(this.url + "/category/get");
  }

  getFilteredCategorys() {
    return this.httpClient.get(this.url + "/category/get?filterValue=true");
  }
}
