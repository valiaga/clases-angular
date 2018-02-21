import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRxjsRoutingModule } from './comments-rxjs-routing.module';
import { CommentsRxjsComponent } from './comments-rxjs.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsRxjsRoutingModule
  ],
  declarations: [CommentsRxjsComponent]
})
export class CommentsRxjsModule { }
