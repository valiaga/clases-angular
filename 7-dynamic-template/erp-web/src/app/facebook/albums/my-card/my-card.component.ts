import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'erp-my-card',
  template: `
    <h1 class="erp-h1">Hola soy card</h1>
  `,
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
