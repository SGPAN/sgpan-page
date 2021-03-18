import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lidership } from '../../models/lideship/lidership.model';
import { LidershipLang } from '../../models/lideship/lidershipLang.model';

@Injectable({
  providedIn: 'root',
})
export class LidershipService {

  Lidership: Lidership;
  LidershipLang: LidershipLang;

  baseUrl = environment.apiUrl;
  token: any;

  constructor( private http: HttpClient ) {
    this.token = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem( 'token' ),
    });
  }

  httpOptions = {
    headers: new HttpHeaders( { 'content-type': 'application/json' } ),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      authorization: 'bearer ' + localStorage.getItem( 'token' ),
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  public getAllLiderships() {
    return this.http.get( this.baseUrl + '/lidership', this.httpOptions );
  }

  public findLidershipById( id : any ) {
    return this.http.get(
      this.baseUrl + '/lidership/' + id,
      this.httpOptions
    );
  }

  public findLidershipByFk( id_db: any ) {
    return this.http.get(
      this.baseUrl + '/lidership/languaje/' + id_db,
      this.httpOptions
    );
  }

  public createLidership( lider : Lidership ) {
    const json = JSON.stringify( lider );
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/lidership',
      params,
      this.httpOptions2
    );
  }
  public createLidershipLang( lider : LidershipLang ) {
    const json = JSON.stringify( lider );
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/lidership/languaje',
      params,
      this.httpOptions2
    );
  }

  public updateLidership( lider : Lidership ) {
    const json = JSON.stringify( lider );
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/lidership/' + lider.id,
      params,
      this.httpOptions2
    );
  }
  public updateLidershipLang( lider : LidershipLang ) {
    const json = JSON.stringify( lider );
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/lidership/languaje/' + lider.liderships_fk,
      params,
      this.httpOptions2
    );
  }

  public deleteLidership( id: number ) {
    return this.http.delete(
      this.baseUrl + '/lidership/' + id,
      this.httpOptions
    );
  }
}
