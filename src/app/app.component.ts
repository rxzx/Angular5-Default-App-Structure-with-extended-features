import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private toastrService: ToastrService) {
    setTimeout(() => {
      this.toastrService.success('Hello world!', 'Toastr fun!', { closeButton: true});
    }, 1000);
  }
}
