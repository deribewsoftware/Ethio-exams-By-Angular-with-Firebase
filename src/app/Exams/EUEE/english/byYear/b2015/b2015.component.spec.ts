import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2015Component } from './b2015.component';

describe('B2015Component', () => {
  let component: B2015Component;
  let fixture: ComponentFixture<B2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
