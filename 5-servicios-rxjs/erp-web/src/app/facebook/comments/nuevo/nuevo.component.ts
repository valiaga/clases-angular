import { Comment } from '../models/comment';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'erp-nuevo',
  template: `
  <div class="card">
    <div class="card-body">
      <h5>{{ title | uppercase }}</h5>
      <form class="container" #commentForm="ngForm">
        <div class="control-group">
          <label for="name" class="col-form-label col-form-label-sm">Nombre</label>
          <input name="name" class="form-control form-control-sm"
                #nameModel ="ngModel" required
                [(ngModel)]="comment.name"
                type="text" />
          <span *ngIf="nameModel.invalid && (nameModel.dirty || nameModel.touched)">
                {{nameModel.errors | json}}
          </span>
        </div>
        <div class="control-group">
          <label for="email" class="col-form-label col-form-label-sm">Email</label>
          <input name="email" class="form-control form-control-sm"
                #emailModel ="ngModel" required
                [(ngModel)]="comment.email"
                type="email" />
          <span *ngIf="emailModel.invalid && (emailModel.dirty || emailModel.touched)">
                {{emailModel.errors | json}}
          </span>
        </div>
        <div class="control-group">
          <label for="body" class="col-form-label col-form-label-sm">Cuerpo</label>
          <textarea name="body" class="form-control form-control-sm"
                #bodyModel ="ngModel"
                [(ngModel)]="comment.body"
                type="text" ></textarea>
          <span *ngIf="bodyModel.invalid && (bodyModel.dirty || bodyModel.touched)">
                {{bodyModel.errors | json}}
          </span>
        </div>
        <div class="control-group">
          <label for="postId" class="col-form-label col-form-label-sm">postId</label>
          <select name="postId" id="postId" [(ngModel)]="comment.postId" class="form-control form-control-sm">
            <option [value]="">Please select a Post</option>
            <option *ngFor="let post of listaOfPosts"
                  [value]="post">{{post}}</option>
          </select>
        </div>
        <button class="btn btn-sm btn-success" (click)="saveComment()" [disabled]="commentForm.invalid">Save</button>
      </form>
      <blockquote>
        Numero de comentarios: {{ numberOfComments }}
        <em>Actual Form: {{ comment | json }}</em>
      </blockquote>
    </div>
  </div>
  `,
  styles: []
})
export class NuevoComponent implements OnInit {
  @Input() public numberOfComments = 0;
  @Output() public save = new EventEmitter<Comment>();

  public listaOfPosts = ["1", "2"];
  public comment: Comment = new Comment();
  public title = "Nuevo Comentario";
  constructor() { }

  ngOnInit() {
  }


  public saveComment() {
    this.save.emit(this.comment);
    this.comment = new Comment();
  }
}
