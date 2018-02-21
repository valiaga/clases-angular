import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-navbar',
  template: `
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <a class="navbar-brand" routerLink="/">
      <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" class="d-inline-block align-top" >
      ERP-web
    </a>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="facebook">facebook</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="about">About</a>
      </li>
    </ul>
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
