import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]= [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/dashboard'},
        { title: 'Gráficas', url: 'grafica1'},
        { title: 'Promesas', url: 'promises'},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Rxjs', url: 'rxjs'}
      ]
    }
  ];

  constructor() { }
}
