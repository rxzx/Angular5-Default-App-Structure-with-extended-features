import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private messageService: MessageService) {
    this.addSingle();
    setTheme('bs3');
  }
  addSingle() {
  }
}
