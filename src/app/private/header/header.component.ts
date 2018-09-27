import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../Providers/storageservice';
import { StorageKey } from '../../shared/enums/storagekey';

@Component({
  selector: 'app-private-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  constructor(
    private storage:StorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.storage.removePropertyFromLS(StorageKey.IsLoggedIn);
    this.router.navigate(["/sign-in"]);
  }

}
