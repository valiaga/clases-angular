import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsService } from './shared/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { ListaComponent, NuevoComponent, EditComponent } from './components';

const COMPONENTS_POSTS: any[] = [
  ListaComponent,
  NuevoComponent,
  EditComponent,

  
  PostsComponent
]

const SERVICES_POSTS: any[] = [
  PostsService
]

const MATERIAL_MODULES: any[] = [
  ///
]

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    ...MATERIAL_MODULES,
  ],
  declarations: [
    ...COMPONENTS_POSTS,
  ],
  providers: [
    ...SERVICES_POSTS,
  ]
})
export class PostsModule { }
