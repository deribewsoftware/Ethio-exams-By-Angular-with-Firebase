import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2015Component } from './e2015.component';

describe('E2015Component', () => {
  let component: E2015Component;
  let fixture: ComponentFixture<E2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
