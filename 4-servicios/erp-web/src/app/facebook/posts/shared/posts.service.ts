import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';
import { environment } from '@env/environment';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    const url = environment.api;
    return this.http.get<Post[]>(`${url}posts`);
  }

  public getPostById(id: number): Observable<Post> {
    const url = environment.api;
    return this.http.get<Post>(`${url}posts/${id}`);
  }

  public savePost(post: Post): Observable<Post> {
    if(post.id) {
      return this.putPost(post.id, post);
    }
    return this.postPost(post);
  }

  private postPost(post: Post): Observable<Post> {
    const url = environment.api;
    return this.http.post<Post>(`${url}posts`, post);
  }

  private putPost(id: number, post: Post): Observable<Post> {
    const url = environment.api;
    return this.http.put<Post>(`${url}posts/${id}`, post);
  }

  public deletePost(id: number): Observable<Post> {
    const url = environment.api;
    return this.http.delete<Post>(`${url}posts/${id}`);
  }
}
