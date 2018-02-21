import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-albums',
  template: `

  <erp-my-card></erp-my-card>

  <erp-fieldset>
    <erp-head>
      <erp-legend-icon [icon]="'fa fa-home'"></erp-legend-icon> 
      <erp-legend> titulo </erp-legend>
    </erp-head>
    <erp-content>
      Este es mi contenido
    </erp-content>
  </erp-fieldset>

  `,
  styles: [
    `
    `
  ]
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // this.condicion = !this.condicion;
  }
}
