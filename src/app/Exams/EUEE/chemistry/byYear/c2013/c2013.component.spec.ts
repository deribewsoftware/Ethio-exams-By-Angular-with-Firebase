import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2013Component } from './c2013.component';

describe('C2013Component', () => {
  let component: C2013Component;
  let fixture: ComponentFixture<C2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
