import { FormsModule } from '@angular/forms';
import { CommentsService } from './shared/comments.service';
import { CommentsRoutingModule } from './comments-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsRoutingModule,
    FormsModule,
  ],
  declarations: [CommentsComponent, ListaComponent, NuevoComponent, ItemComponent],
  providers: [
    CommentsService,
  ]
})
export class CommentsModule { }
