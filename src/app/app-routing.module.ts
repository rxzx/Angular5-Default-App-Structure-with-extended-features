
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './AlwaysAuthGuard ';

import { PrivateComponent } from './private/private.component';
import { PrivateHomeComponent } from './private/home/home.component';
import { PublicSigninComponent } from './public/signin/signin.component';
import { PublicHomeComponent } from './public/home/home.component';
import { PublicHeaderComponent } from './public/header/header.component';
const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent, data: { title: 'Home |  Admin Panel' } }
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '', redirectTo: 'user/home', pathMatch: 'full' },
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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
