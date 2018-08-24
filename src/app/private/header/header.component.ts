import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Providers/storageservice';
import { StorageKey } from '../../shared/enums/storagekey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
