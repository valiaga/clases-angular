import { Comment } from '../models/comment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'erp-lista',
  template: `
  <h5>{{ title | uppercase }}</h5>
    <table *ngIf="comments.length>0;else emptyList" class="tbl tbl-sm">
    <!-- <table class="tbl tbl-sm"> -->
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>PostId</th>
        <th>Email</th>
        <th>Body</th>
        <th>Opc</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let comment of comments">
        <td><a [routerLink]="[comment.id]">{{ comment.id }}</a></td>  
        <td>{{ comment.name }}</td>
        <td>{{ comment.postId }}</td>
        <td>{{ comment.email }}</td>
        <td>{{ comment.body }}</td>
        <!--
        <td>{{ comment.amount | number:'7.2-2' }}</td> -->
        <td><button class="btn btn-danger btn-sm" (click)="deleteComment(comment)">Delete</button> </td>
      </tr>
    </tbody>
  </table>
  <ng-template #emptyList>
    <div class="alert alert-info">
      No hay comentarios aun.
    </div>
  </ng-template>
  `,
  styles: []
})
export class ListaComponent implements OnInit {
  // @Input() public numberOfComments = 0;
  @Input() comments: Comment[];
  @Output() delete = new EventEmitter<Comment>();

  public title = "Lista de Comentarios";

  constructor() { }

  ngOnInit() {
  }

  public deleteComment(comment: Comment) {
    if(confirm('seguro de eliminar?')) {
      this.delete.emit(comment);
    }
  }

}
