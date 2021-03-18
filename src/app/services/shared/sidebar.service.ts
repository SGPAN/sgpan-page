import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any = [

    {
      title : 'Web Site',
      icon : 'fas fa-tools',
      submenu : [
        { title : 'Dashboard', url : '/admin/dashboard'  },
      ]
    },

    {
      title : 'About Us',
      icon : 'fas fa-tools',
      submenu : [
        { title : 'Board Director', url : '/admin/list/board/directors'  },
        { title : 'Lidership', url : '/admin/list/lidership'  },
        { title : 'Partner Organization', url : '/admin/list/partner/organization'  },
      ]
    }
  ];

  constructor() { }

}
