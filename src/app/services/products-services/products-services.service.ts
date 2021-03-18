import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  // variables
  baseUrl = environment.apiUrl;

  // constructor
  constructor(private http: HttpClient) { }

  getProductsAndServices(languageID): Observable<any> {
    return this.http.get(this.baseUrl + '/ServiceProducts/index/' + languageID);
  }
}
