import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOfYearComponent } from './time-of-year.component';

describe('TimeOfYearComponent', () => {
  let component: TimeOfYearComponent;
  let fixture: ComponentFixture<TimeOfYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOfYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOfYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
