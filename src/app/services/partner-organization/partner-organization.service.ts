import { Injectable } from '@angular/core';
import { PartnerOrganization } from '../../models/partner-organization/PartnerOrganization.model';
import { PartnerOrganizationLang } from '../../models/partner-organization/PartnerOrganizationLang.model';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerOrganizationService {

  partnerOrganization : PartnerOrganization; 
  partnerOrganizationLang:   PartnerOrganizationLang;

  baseUrl = environment.apiUrl;
  token: any;

  constructor( private http : HttpClient ) { 
    this.token = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
  }

  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      authorization: 'bearer ' + localStorage.getItem('token'),
      'content-type': 'application/x-www-form-urlencoded',
    }),
  };

  public getAllPartnerOrganization(){
    return this.http.get( this.baseUrl + '/partnerOrganization', this.httpOptions );
  }

  public findPartnerOrganizationById( id : any ) {
    return this.http.get(
      this.baseUrl + '/partnerOrganization/' + id,
      this.httpOptions
    );
  }

  public findPartnerOrganizationByFk( id_p : any ) {
    return this.http.get(
      this.baseUrl + '/partnerOrganization/languaje/' + id_p,
      this.httpOptions
    );
  }

  public createPartnerOrganization( partner: PartnerOrganization ) {
    const json = JSON.stringify( partner );
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/partnerOrganization',
      params,
      this.httpOptions2
    );
  }

  public createPartnerOrganizationLang( partner : PartnerOrganizationLang ) {
    const json = JSON.stringify( partner );
    const params = 'json=' + json;
    return this.http.post(
      this.baseUrl + '/partnerOrganization/languaje',
      params,
      this.httpOptions2
    );
  }

  public updatePartnerOrganization( partner : PartnerOrganization ) {
    const json = JSON.stringify( partner );
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/partnerOrganization/' + partner.id,
      params,
      this.httpOptions2
    );
  }

  public updatePartnerOrganizationLang ( partner: PartnerOrganizationLang ) {
    const json = JSON.stringify( partner );
    const params = 'json=' + json;
    return this.http.put(
      this.baseUrl + '/partnerOrganization/languaje/' + partner.partner_organization_fk,
      params,
      this.httpOptions2
    );
  }

  public deletePartnerOrganization( id : number ) {
    return this.http.delete(
      this.baseUrl + '/partnerOrganization/' + id,
      this.httpOptions
    );
  }

}
