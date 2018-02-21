import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookComponent,
    children: [
      {
        path: 'posts',
        loadChildren: 'app/facebook/posts/posts.module#PostsModule',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
