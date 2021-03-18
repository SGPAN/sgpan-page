import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // variables
  baseUrl = environment.apiUrl;
  // constructor
  constructor(private http: HttpClient) { }

  getEvents(languageID): Observable<any>{
    return this.http.get(this.baseUrl + '/Events/index/' + languageID);
  }
}
