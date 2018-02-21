import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component'
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
  },
  {
    path: ":id",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
