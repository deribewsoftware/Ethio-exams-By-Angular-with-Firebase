import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2013Component } from './e2013.component';

describe('E2013Component', () => {
  let component: E2013Component;
  let fixture: ComponentFixture<E2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
