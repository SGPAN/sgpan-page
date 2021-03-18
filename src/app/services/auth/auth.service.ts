import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // variables
  baseUrl = environment.apiUrl;
  user: User;
  token: any;
  httpOptions2 = {
    headers: new HttpHeaders({
        authorization: 'bearer ' + localStorage.getItem('token'),
        'content-type': 'none'
      })
  };

  // Constructor
  constructor( private http: HttpClient, public router: Router ) {
    this.loadStorage();
   }

  getOptionOne(): any{
    const httpOptions = {
      headers: new HttpHeaders( { 'content-type': 'application/json' } )
    };
    return httpOptions;
  }

  getOptionTwo(): any{

  }

  saveStorage( id: string, image: string, role: string, name: string, email: string, token: string ): void {
    localStorage.setItem('id', id );
    localStorage.setItem('image', image);
    localStorage.setItem('role', role);
    localStorage.setItem('name', name );
    localStorage.setItem('email', name );
    localStorage.setItem('token', token);
    this.token = token;
  }

  loadStorage(): void {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.user = null;
    }
  }

  isLoggued(): any {
    return ( localStorage.getItem( 'token' ).length > 5 ) ? true : false;
  }

  login( user: User ): any {

    const json = JSON.stringify( user );
    return this.http.post(this.baseUrl + '/auth/login/', json, this.getOptionOne()).pipe(
      map(( res: any ) => {
        this.saveStorage( res.id, res.image, res.role, res.name, res.email, res.token );
      })
    );
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'name' );
    localStorage.removeItem( 'image' );
    localStorage.removeItem( 'email' );
    localStorage.removeItem( 'role' );
    localStorage.removeItem( 'id');
  }

  isAdmin(): any {
    const role = localStorage.getItem('role');
    if ( role === '1' )
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getUserProfile( ): any {
    return this.http.get(this.baseUrl + '/auth/user/profile' , this.httpOptions2);
  }
}

