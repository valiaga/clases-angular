import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsService {
  public comments: Observable<Comment[]>;
  private _comments: BehaviorSubject<Comment[]>;
  private dataStore: {
    comments: Comment[]
  }

  constructor() {
    this.dataStore = { comments: [] };

    this._comments = <BehaviorSubject<Comment[]>>new BehaviorSubject([]);
    this.comments = this._comments.asObservable();
  }
  // public getNumberOfComments(): number {
  // return this.comments.length;
  // }

  // public getCommentsList(): Comment[] {
  // return this.comments;
  // }
  public getCommentById(id: string) {
    let notFound = true;

    this.dataStore.comments.forEach((comment, index) => {
      if (comment.id === id) {
        this.dataStore.comments[index] = comment;
        notFound = false;
      }
    });

    if (notFound) {
      // this.dataStore.comments.push(escuela);
    }
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }

  public saveComment(comment: Comment) {
    comment.id = new Date().getTime().toString();
    this.dataStore.comments.push(comment);
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }

  public updateComment(comment: Comment) {
    this.dataStore.comments.forEach((commentt, index) => {
      if (commentt.id === comment.id) { this.dataStore.comments[index] = comment; }
    });
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }

  public deleteComment(id: string) {

    this.dataStore.comments.forEach((commentt, index) => {
      if (commentt.id === id) { this.dataStore.comments.splice(index, 1); }
    });
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }





  // // constructor(private http: HttpClient) { 


  // // public getCommentsList() {
  // // let apiUrl = environment.apiUrl;


  // // return this.http
  // // .get<IEscuela[]>(`${apiUrl}academico/escuelas/?all=true`)
  // // .subscribe(data => {
  // // this.snackBar.open(MESSAGES.escuela.getMany, MESSAGES.actions.get, snackBarDuration);
  // // this.dataStore.comments = data;
  // // this._comments.next(Object.assign({}, this.dataStore).comments);
  // // }, error => console.log('Could not load escuelas.')
  // // )
  // // }

  // load(id: number | string) {
  //   let apiUrl = environment.apiUrl;
  //   this.http.get<IEscuela>(`${apiUrl}academico/escuelas/${id}`)
  //     .subscribe(data => {
  //       let notFound = true;

  //       this.dataStore.escuelas.forEach((escuela, index) => {
  //         if (escuela.id === data.id) {
  //           this.dataStore.escuelas[index] = data;
  //           notFound = false;
  //         }
  //       });

  //       if (notFound) {
  //         this.dataStore.escuelas.push(data);
  //       }
  //       // this.snackBar.open(MESSAGES.escuela.getOne, MESSAGES.actions.get, snackBarDuration);

  //       this._escuelas.next(Object.assign({}, this.dataStore).escuelas);
  //     }, error => console.log('Could not load escuela.'));
  // }

  // create(escuela: any) {
  //   let apiUrl = environment.apiUrl;
  //   console.log('escuela');
  //   console.log(escuela);
  //   this.http.post<IEscuela>(`${apiUrl}academico/escuelas/`, escuela)
  //     .subscribe(data => {
  //       // 
  //       // this.snackBar.open(MESSAGES.escuela.post, MESSAGES.actions.post, snackBarDuration);

  //       this.dataStore.escuelas.push(data);
  //       this._escuelas.next(Object.assign({}, this.dataStore).escuelas);
  //     }, error => console.log('Could not create escuela.'));
  // }

  // update(escuela: Escuela) {
  //   let apiUrl = environment.apiUrl;
  //   this.http.put<IEscuela>(`${apiUrl}academico/escuelas/${escuela.id}`, escuela)
  //     .subscribe(data => {

  //       this.snackBar.open(MESSAGES.escuela.put, MESSAGES.actions.put, snackBarDuration);

  //       this.dataStore.escuelas.forEach((escuela, index) => {
  //         if (escuela.id === data.id) { this.dataStore.escuelas[index] = data; }
  //       });

  //       this._escuelas.next(Object.assign({}, this.dataStore).escuelas);
  //     }, error => console.log('Could not update escuela.'));
  // }

  // remove(id: string) {
  //   let apiUrl = environment.apiUrl;
  //   this.http.delete<IEscuela>(`${apiUrl}academico/escuelas/${id}/`)
  //     .subscribe(response => {

  //       this.snackBar.open(MESSAGES.escuela.delete, MESSAGES.actions.delete, snackBarDuration);

  //       this.dataStore.escuelas.forEach((escuela, index) => {
  //         if (escuela.id === id) { this.dataStore.escuelas.splice(index, 1); }
  //       });
  //       this._escuelas.next(Object.assign({}, this.dataStore).escuelas);
  //     }, error => console.log('Could not delete escuela.'));
  // }


  // public getNuevaEscuela(): Escuela {
  //   return new Escuela('', '', false, '', '', '', '');
  // }

  // // NORMAL
  // public getEscuelas$(sort: string, order: string, page: number,
  //   pageSize: number): Observable<IResponse> {
  //   let apiUrl = environment.apiUrl;
  //   return this.http.get<IResponse>(`${apiUrl}academico/escuelas/`);
  // }

  // /**
  //  * Importante para un combo en lineas de investigación.
  //  */
  // public getAllEscuelas$(): Observable<IEscuela[]> {
  //   let apiUrl = environment.apiUrl;
  //   return this.http.get<IEscuela[]>(`${apiUrl}academico/escuelas/?all=true`);
  // }
}
