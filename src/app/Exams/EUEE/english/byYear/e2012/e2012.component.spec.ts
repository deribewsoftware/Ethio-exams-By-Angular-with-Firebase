import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2012Component } from './e2012.component';

describe('E2012Component', () => {
  let component: E2012Component;
  let fixture: ComponentFixture<E2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
