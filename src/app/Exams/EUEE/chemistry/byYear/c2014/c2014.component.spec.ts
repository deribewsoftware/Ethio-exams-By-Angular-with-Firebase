import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2014Component } from './c2014.component';

describe('C2014Component', () => {
  let component: C2014Component;
  let fixture: ComponentFixture<C2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
