import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2015Component } from './c2015.component';

describe('C2015Component', () => {
  let component: C2015Component;
  let fixture: ComponentFixture<C2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
