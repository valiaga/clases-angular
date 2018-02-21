import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-facebook',
  template: `
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" routerLink="posts">Mis posts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="albums">Albunes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="users">Usuarios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="comments">Comentarios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="comments-rxjs">Comentarios Rxjs</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class FacebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
