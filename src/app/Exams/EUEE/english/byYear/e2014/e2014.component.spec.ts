import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2014Component } from './e2014.component';

describe('E2014Component', () => {
  let component: E2014Component;
  let fixture: ComponentFixture<E2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
