import { Injectable } from '@angular/core';
import {​​​​​​​ Observable }​​​​​​​ from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  // variables
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  httpOptions2 = {
    headers: new HttpHeaders({
      authorization: 'bearer ' + localStorage.getItem('token'),
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  getNavInfo(): Observable<any> {
    return this.http.get(this.baseUrl + '/CompanyInfo/HeaderInfo');
  }

  getGWCInfo(languajeID): Observable<any> {
    return this.http.get(this.baseUrl + '/CompanyInfo/getGWCInfo/' + languajeID);
  }

  getCarouselInfo(languajeID): Observable<any>{
    return this.http.get(this.baseUrl + '/Carousel/index/' + languajeID);

  }

}
