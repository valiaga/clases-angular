import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'erp-lista',
  template: `
  <table class="table table-sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>UserId</th>
        <th>Title</th>
        <th>Opc</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let post of posts">
        <td>{{ post.id }}</td>
        <td>{{ post.userId }}</td>
        <td>{{ post.title }}</td>
        <td>
          <a class="btn btn-light" (click)="update(post)">
            <span class="fa fa-edit"></span>
          </a>
          <a class="btn btn-light" (click)="delete(post.id)">
            <span class="fa fa-trash"></span>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [
    `
    .card {
      display: flex;
      display: flex;
    }
    `
  ]
})
export class ListaComponent implements OnInit {
  @Input() posts: Post[];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public update(post) {
    this.onEdit.emit(post);
  }

  public delete(postId) {
    if(confirm('seguro de eliminar?')) {
      this.onDelete.emit(postId);
    }
  }

}
