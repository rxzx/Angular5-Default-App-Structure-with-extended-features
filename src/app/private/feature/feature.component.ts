import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { SocialLoginService, Provider } from 'ngx-social-login';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: '/api' });
  constructor(
    private socialLoginService: SocialLoginService
  ) { }

  ngOnInit() {
  }

  onFileSelected(e) {
    console.log(e);
  }

  loginWithFacebook(): void {
    this.socialLoginService.login(Provider.FACEBOOK).subscribe(user => console.log(user));
  }

}
