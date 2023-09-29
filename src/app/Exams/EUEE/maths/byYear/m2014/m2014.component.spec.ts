import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2014Component } from './m2014.component';

describe('M2014Component', () => {
  let component: M2014Component;
  let fixture: ComponentFixture<M2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
