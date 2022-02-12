import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  public get(url: string, urlParams?: HttpParams): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${url}`, { params: urlParams});
  }

  public post(url: string,body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${url}`, body, {});
  }
  
}
