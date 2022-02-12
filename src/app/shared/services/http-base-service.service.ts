import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseServiceService {

  constructor(public http: HttpClient) {
  }

  /**
   * Makes the http get request call using the http client
   * @params {string} url
   * @params {HttpParams} urlParams
   */
  get(url: string, urlParams?: HttpParams): Observable<any> {
    return this.http.get('http://localhost' + url, { params: urlParams});
  }

  public post(url: string,body: any): Observable<any> {
    return this.http.post('http://localhost' + url, body, {});
  }
  
}
