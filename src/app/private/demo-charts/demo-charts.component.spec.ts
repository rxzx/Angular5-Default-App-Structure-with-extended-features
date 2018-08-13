import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChartsComponent } from './demo-charts.component';

describe('DemoChartsComponent', () => {
  let component: DemoChartsComponent;
  let fixture: ComponentFixture<DemoChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
