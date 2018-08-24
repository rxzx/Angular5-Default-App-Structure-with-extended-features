import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from './Providers/storageservice';
import { StorageKey } from './shared/enums/storagekey';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate() {
    let isLoggedIn = this.storage.getPropertyFromLS(StorageKey.IsLoggedIn);
    if(!isLoggedIn){
      return true;
    }
    return false;
  }
}


@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageService,
    private toastr: ToastrService
  ) { }
  myvalue = true;
  canActivate() {

    let isLoggedIn = this.storage.getPropertyFromLS(StorageKey.IsLoggedIn);
    if(isLoggedIn){
      return true;
    }
    this.toastr.info("You are not logged in","Info!");
    return false;
  }
}
