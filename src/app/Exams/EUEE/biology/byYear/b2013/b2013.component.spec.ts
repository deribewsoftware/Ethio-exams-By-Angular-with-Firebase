import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2013Component } from './b2013.component';

describe('B2013Component', () => {
  let component: B2013Component;
  let fixture: ComponentFixture<B2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
