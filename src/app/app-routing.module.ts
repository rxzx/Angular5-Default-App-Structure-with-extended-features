
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';

import { PrivateComponent } from './private/private.component';
import { PrivateHomeComponent } from './private/home/home.component';
import { PublicSigninComponent } from './public/signin/signin.component';
import { PublicHomeComponent } from './public/home/home.component';
import { AboutComponent } from './private/about/about.component';
import { GalleryComponent } from './private/gallery/gallery.component';
import { DemoChartsComponent } from './private/demo-charts/demo-charts.component';
import { FeatureComponent } from './private/feature/feature.component';
import { FormLoaderComponent } from './private/form-loader/form-loader.component';
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
    path: 'user',
    component: PrivateComponent,
    canActivate: [OnlyLoggedInUsersGuard],
    children: [
      { path: '', redirectTo: 'user/home', pathMatch: 'full' },
      { path: 'home', component: PrivateHomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'demo-charts', component: DemoChartsComponent },
      { path: 'features', component: FeatureComponent },
      { path: 'form-loader', component: FormLoaderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
