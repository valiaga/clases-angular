import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRxjsRoutingModule } from './comments-rxjs-routing.module';
import { CommentsRxjsComponent } from './comments-rxjs.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { CommentsService } from './shared/comments.service';

@NgModule({
  imports: [
    CommonModule,
    CommentsRxjsRoutingModule,
    FormsModule,
  ],
  declarations: [CommentsRxjsComponent, ListaComponent, NuevoComponent, ItemComponent],
  providers: [
    CommentsService,
  ]
})
export class CommentsRxjsModule { }
