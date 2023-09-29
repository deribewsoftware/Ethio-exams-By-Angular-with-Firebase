import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2014Component } from './b2014.component';

describe('B2014Component', () => {
  let component: B2014Component;
  let fixture: ComponentFixture<B2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
