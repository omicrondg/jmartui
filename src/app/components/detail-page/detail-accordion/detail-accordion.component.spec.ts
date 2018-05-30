import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAccordionComponent } from './detail-accordion.component';

describe('DetailAccordionComponent', () => {
  let component: DetailAccordionComponent;
  let fixture: ComponentFixture<DetailAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
