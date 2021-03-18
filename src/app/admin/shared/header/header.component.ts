import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;
  image: string;
  email: string;
  url = environment.apiUrl;

  constructor( public authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.name = localStorage.getItem('name');
    this.image = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('/home'  );
  }

}
