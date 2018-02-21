import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: 'facebook',
        loadChildren: 'app/facebook/facebook.module#FacebookModule'
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
    NotFoundPageComponent,
];