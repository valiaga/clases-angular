import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];

  constructor() {}

  public getNumberOfComments(): number {
    return this.comments.length;
  }

  public getCommentsList(): Comment[] {
    return this.comments;
  }

  public getCommentById(id: string): Comment {
    return this.comments.find(o => o.id === id);
  }

  public saveComment(comment: Comment) {
    comment.id = new Date().getTime().toString();
    this.comments.push(comment);
  }

  public deleteComment(comment: Comment) {
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
  }
}
