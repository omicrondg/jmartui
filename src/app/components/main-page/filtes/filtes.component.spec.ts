import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltesComponent } from './filtes.component';

describe('FiltesComponent', () => {
  let component: FiltesComponent;
  let fixture: ComponentFixture<FiltesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
