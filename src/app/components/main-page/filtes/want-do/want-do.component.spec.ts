import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantDoComponent } from './want-do.component';

describe('WantDoComponent', () => {
  let component: WantDoComponent;
  let fixture: ComponentFixture<WantDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
