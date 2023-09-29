import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2012Component } from './c2012.component';

describe('C2012Component', () => {
  let component: C2012Component;
  let fixture: ComponentFixture<C2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
