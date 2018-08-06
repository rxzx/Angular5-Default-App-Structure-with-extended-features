import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private toastrService: ToastrService) {
    this.addSingle();
    setTheme('bs3');
    setTimeout(() => {
      this.toastrService.success('Hello world!', 'Toastr fun!', { closeButton: true });
    }, 1000);
  }
  addSingle() {
  }
}
