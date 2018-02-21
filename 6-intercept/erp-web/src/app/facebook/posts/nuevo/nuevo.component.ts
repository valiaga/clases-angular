import { Output, Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Post } from '../models/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../shared/posts.service';


@Component({
  selector: 'erp-nuevo',
  template: `
  <div class="card">
    <div class="card-body">
      <form [formGroup]="postForm" novalidate (ngSubmit)="submit()">
        <div class="form-group">
          <label for="title" class="col-form-label col-form-label-sm">Titulo</label>
          <input class="form-control form-control-sm" id="title" type="text" formControlName="title"/>
        </div>
        <div class="form-group">
          <label for="body" class="col-form-label col-form-label-sm">Body</label>
          <textarea class="form-control form-control-sm" id="body" formControlName="body"></textarea>
        </div>
        <button type="submit" class="btn btn-sm btn-success" [disabled]="!postForm.valid">
          <span class="fa fa-add"></span>Agregar
        </button>
        <button type="reset" class="btn btn-sm btn-warning" (click)="resetForm()">
          <span class="fa fa-add"></span>Limpiar
        </button>
      </form>
      <em class="container">
        <code class="row">value: <strong>{{ postForm.value | json }}</strong></code>
        <code class="row">status: <strong> {{ postForm.status }}</strong></code>
      </em>
    </div>
  </div>

    `,
  styles: []
})
export class NuevoComponent implements OnInit {
  public postForm: FormGroup;
  public post: Post;
  @Output() postSaved = new EventEmitter<Post>();

  @Input()
  set setPost(post: Post) {
    this.postForm && this.postForm.patchValue(post);
  }

  constructor(private formBuilder: FormBuilder, private postsService: PostsService) { }

  ngOnInit() {
    this.crearNuevoPost()
    this.builForm()
  }

  private crearNuevoPost() {
    this.post = this.postsService.crearPost();
  }

  private builForm() {
    const controls = this.initializeControls();
    this.postForm = this.formBuilder.group(controls);
  }
  private initializeControls() {
    const controls = {
      userId: [this.post.userId],
      id: [this.post.id],
      title: [this.post.title, Validators.required],
      body: [this.post.body],
    }
    return controls;
  }

  public resetForm() {
    this.postForm.reset();
    // this.postForm.patchValue({
    // userId: [1],
    // id: [101],
    // })
  }

  public submit() {
    if (confirm('Seguro de guardar?')) {
      this.postsService.savePost(this.postForm.value)
        .subscribe((postSaved: Post) => {
          this.postSaved.emit(postSaved)
        })
    }
  }

}
