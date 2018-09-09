import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})

export class FormLoaderComponent implements OnInit {
  public json: any;
  public contactForm: FormGroup;
  public countries: string[];
  public requestTypes: string[];
  constructor(
    firebase:FirebaseApp
  ) {
    this.countries = ['USA', 'Germany', 'Italy', 'France'];
    this.requestTypes = ['Claim', 'Feedback', 'Help Request'];
    this.contactForm = this.createFormGroup();

    // firebase.messaging().;
  }

  ngOnInit() {
    this.json = {
      "name": "test",
      "count": 5,
      "detail": [
        {
          "name": "raza",
          "age": 20
        },
        {
          "name": "rxzx",
          "age": 22
        },
        {
          "name": "sultan",
          "age": 26
        }
      ]
    };
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
      }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  onSubmit(){

  }

  revert(){
    
  }

}
