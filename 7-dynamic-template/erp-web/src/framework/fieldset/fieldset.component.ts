import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'erp-fieldset',
  template: `
  <fieldset class="erp-fieldset-border">
    <legend class="erp-legend-border">
      <ng-content select="erp-head"></ng-content>
    </legend>
    <ng-content></ng-content>
    <ng-content select="erp-content"></ng-content>
  </fieldset>
  `,
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'erp-head',
  template: `
    <ng-content></ng-content>
    <ng-content select="erp-card-icon" ></ng-content>
    <ng-content select="erp-legend"></ng-content>
  `,
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'erp-legend',
  template: `
     <ng-content></ng-content>
  `,
})
export class LegendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
    selector: 'erp-legend-icon',
    template: `
    <span class="{{ icon }} erp-icon" ></span>
    `,
    styles: [
        `
        .erp-icon {
            font-size: medium;
            margin-right: 6px;
        }
        `,
    ],
})
export class LegendIconComponent {
    @Input() icon: string;
    constructor() { }
}

@Component({
  selector: 'erp-content',
  template: `
     <ng-content></ng-content>
  `,
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}