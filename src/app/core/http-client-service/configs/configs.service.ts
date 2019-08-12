import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(
    private http: HttpClient
  ) { }

  getData(option): Observable<{}> {
    const headers = this.headers;
    return this.http.get(`${option.url}`, {headers});

  }


  postData(option, params): Observable<{}> {
    const headers = this.headers;
    return this.http.post(`${option.url}`, params, {headers});

  }
}
