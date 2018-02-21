import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/posts.service';
import { Post } from './models/post';

@Component({
  selector: 'erp-posts',
  template: `
    <!--
    <erp-nuevo [setPost]="post" (postSaved)="postSaved($event)"></erp-nuevo>
    -->
    <router-outlet></router-outlet>
    <erp-lista (onEdit)="onEdit($event)" (onDelete)="onDelete($event)" [posts]="posts"></erp-lista>
  `,
  styles: []
})
export class PostsComponent implements OnInit {
  public post: Post;
  public posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.loadPosts();
  }

  public onEdit(post) {
    this.postsService.getPostById(post.id)
      .subscribe(post => {
        this.post = post;
      });
  }

  public onDelete(postId) {
    this.postsService.deletePost(postId)
      .subscribe(res => {
        console.log('res after delete')
        console.log(res)
      })
  }

  private loadPosts() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  public postSaved(post) {
    this.posts.push(post);
  }
}
