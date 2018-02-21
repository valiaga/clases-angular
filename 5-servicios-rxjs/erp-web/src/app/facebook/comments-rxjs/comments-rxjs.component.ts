import { Component, OnInit } from '@angular/core';
import { CommentsService } from './shared/comments.service';
import { Observable } from 'rxjs/Observable';
import { Comment } from './models/comment';

@Component({
  selector: 'erp-comments-rxjs',
  template: `
     <!-- [numberOfComments]="numberOfComments" --> 
    <erp-nuevo
      (save)="saveComment($event)"
    ></erp-nuevo>
     <!-- [numberOfComments]="numberOfComments" --> 
    <erp-lista
      [comments]="comments$ | async" 
      (delete)="deleteComment($event)"
    ></erp-lista>
  `,
  styles: []
})
export class CommentsRxjsComponent implements OnInit {
  public comments$: Observable<Comment[]>;
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.comments$ = this.commentsService.comments;
    
    
    // Susbribientdo
    this.comments$.subscribe(c => {
      console.log('c', c)
    });
  }

  public saveComment(comment: Comment) {
    this.commentsService.saveComment(comment);
    // this.refreshData();
  }

  public deleteComment(comment: Comment) {
    this.commentsService.deleteComment(comment.id);
    // this.refreshData();
  }

  private refreshData() {
    // this.numberOfComments = this.commentsService.getNumberOfComments();
    // this.comments = this.commentsService.getCommentsList();
  }

}
