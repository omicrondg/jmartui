import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgtamOpenToComponent } from './progtam-open-to.component';

describe('ProgtamOpenToComponent', () => {
  let component: ProgtamOpenToComponent;
  let fixture: ComponentFixture<ProgtamOpenToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgtamOpenToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgtamOpenToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
