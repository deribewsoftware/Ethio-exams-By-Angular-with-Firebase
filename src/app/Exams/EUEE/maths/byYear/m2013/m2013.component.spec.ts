import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2013Component } from './m2013.component';

describe('M2013Component', () => {
  let component: M2013Component;
  let fixture: ComponentFixture<M2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
