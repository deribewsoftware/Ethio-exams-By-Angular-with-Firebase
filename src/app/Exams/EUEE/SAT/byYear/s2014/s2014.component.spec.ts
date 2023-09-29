import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2014Component } from './s2014.component';

describe('S2014Component', () => {
  let component: S2014Component;
  let fixture: ComponentFixture<S2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
