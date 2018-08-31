import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { StorageService } from './Providers/storageservice';
import { StorageKey } from './shared/enums/storagekey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
    private toastr: ToastrService,
    private storage: StorageService,
    private router: Router
  ) {
    setTheme('bs3');
    this.redirection()
  }

  redirection() {
    let isLoggedIn = this.storage.getPropertyFromLS(StorageKey.IsLoggedIn);
    if (isLoggedIn) {
      this.router.navigate(['/user/home']);
    } else {
      this.router.navigate(['/sign-in']);
    }
  }

}
