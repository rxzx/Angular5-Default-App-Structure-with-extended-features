import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoaderComponent } from './form-loader.component';

describe('FormLoaderComponent', () => {
  let component: FormLoaderComponent;
  let fixture: ComponentFixture<FormLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
