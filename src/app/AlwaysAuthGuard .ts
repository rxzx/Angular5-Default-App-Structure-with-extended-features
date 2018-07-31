import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  myvalue = true;
  constructor(

    private router: Router,
  ) { }
  canActivate() {
    // this.myvalue = true;

    // if (this.myvalue) {
    //   return false;
    // } else {
    //   //   window.alert("You don't have permission to view this page");
    //   // this.router.navigate(['/sign-in']);
    //   return true;
    // }
    return true;
  }
}


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(

    private router: Router,
  ) { }
  myvalue = false;
  canActivate() {

    if (this.myvalue) {

        this.router.navigate(['/private/home']);
      return true;
    } else {
        window.alert('You dont have permission to view this page');
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
