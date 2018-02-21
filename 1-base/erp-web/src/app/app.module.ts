import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterComponent } from './layout/footer.component';
import { ContentComponent } from './layout/content.component';
import { NavbarComponent } from './layout/navbar.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ...routedComponents,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
