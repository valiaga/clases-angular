import { Comment } from './models/comment';
import { CommentsService } from './shared/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-comments',
  template: `
    <erp-nuevo
      [numberOfComments]="numberOfComments" 
      (save)="saveComment($event)"
    ></erp-nuevo>
    <erp-lista
      [numberOfComments]="numberOfComments" 
      [comments]="comments" 
      (delete)="deleteComment($event)" 
    ></erp-lista>
  `,
  styles: []
})
export class CommentsComponent implements OnInit {
  public numberOfComments = 0;
  public comments: Comment[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.refreshData();
  }

  public saveComment(comment: Comment) {
    this.commentsService.saveComment(comment); // Guardo.
    this.refreshData(); // refresacar
  }

  public deleteComment(comment: Comment) {
    this.commentsService.deleteComment(comment);
    this.refreshData();
  }

  private refreshData() {
    this.numberOfComments = this.commentsService.getNumberOfComments();
    this.comments = this.commentsService.getCommentsList();
  }
}
