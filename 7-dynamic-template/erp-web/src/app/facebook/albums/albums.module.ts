import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { MyCardComponent } from './my-card/my-card.component';
// import { FieldsetComponent } from './fieldset/fieldset.component';

// Mi modulo
import { FieldsetModule } from '@erp/fieldset';


@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FieldsetModule
  ],
  declarations: [
    AlbumsComponent,
    MyCardComponent,
    // FieldsetComponent
  ]
})
export class AlbumsModule { }
