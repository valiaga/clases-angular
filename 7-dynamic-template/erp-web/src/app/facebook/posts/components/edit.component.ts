import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'erp-edit',
  template: `
    <p>
      edit works!
    </p>
  `,
  styles: []
})
export class EditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    console.log('id');
    console.log(id);
  }

}
