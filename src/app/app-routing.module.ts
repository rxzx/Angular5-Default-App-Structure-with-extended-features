
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';

import { PrivateComponent } from './private/private.component';
import { PrivateHomeComponent } from './private/home/home.component';
import { PublicSigninComponent } from './public/signin/signin.component';
import { PublicHomeComponent } from './public/home/home.component';
import { GalleryComponent } from './private/gallery/gallery.component';
import { DemoChartsComponent } from './private/demo-charts/demo-charts.component';
import { FeatureComponent } from './private/feature/feature.component';
import { FormLoaderComponent } from './private/form-loader/form-loader.component';
import { AboutComponent } from './private/static-pages/about/about.component';
const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: '',
    component: PublicComponent,
    canActivate: [AlwaysAuthGuard],
    children: [
      { path: 'sign-in', component: PublicSigninComponent, data: { title: 'Sign In' } },
      { path: 'home', component: PublicHomeComponent },
    ]
  },
  {
    path: 'admin',
    component: PrivateComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    children: [
      { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
      { path: 'home', component: PrivateHomeComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'demo-charts', component: DemoChartsComponent },
      { path: 'features', component: FeatureComponent },
      { path: 'form-loader', component: FormLoaderComponent },
      {
        path: 'static-pages',
        children: [
          { path: '', redirectTo: 'admin/static-pages/about', pathMatch: 'full' },
          { path: 'about', component: AboutComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
