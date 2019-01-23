import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageKey } from './shared/enums/storagekey';
import { ToastrService } from 'ngx-toastr';
import { StorageServiceProvider } from './Providers/storage.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: StorageServiceProvider
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
    private storage: StorageServiceProvider,
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
