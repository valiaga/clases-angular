import { Comment } from '../models/comment';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../shared/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-item',
  template: `
    <h5>Comentario Detalle</h5>
    <p>{{ comment | json }}</p>
  `,
  styles: []
})
export class ItemComponent implements OnInit {
  public comment: Comment;
  constructor(
    private route: ActivatedRoute,
    private operationsService: CommentsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    // this.comment = this.operationsService.getCommentById(id);
  }

}
