import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})

export class FormLoaderComponent implements OnInit {
  public json: any;
  public contactForm: FormGroup;
  public countries: string[];
  public requestType: string[];
  constructor() {
    this.countries = ['USA', 'Germany', 'Italy', 'France'];
    this.requestType = ['Claim', 'Feedback', 'Help Request'];
    this.contactForm = this.createFormGroup();
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

}
