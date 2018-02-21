import { Component } from '@angular/core';

@Component({
  selector: 'erp-root',
  template: `
    <erp-navbar></erp-navbar>
    <erp-content></erp-content>
    <erp-footer></erp-footer>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {
  title = 'Capacitación Lamb Team';
}
