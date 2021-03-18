import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/service.index';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  image: string;
  name: string;
  id: string;
  url = environment.apiUrl;

  isAdmin: boolean = this.authService.isAdmin();

  constructor( public sideBar: SidebarService,
               public authService: AuthService,
               private router: Router,
               ) {
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.image = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.id = localStorage.getItem('id');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home' );
  }

}
