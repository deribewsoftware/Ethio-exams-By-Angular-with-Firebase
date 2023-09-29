import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2013Component } from './s2013.component';

describe('S2013Component', () => {
  let component: S2013Component;
  let fixture: ComponentFixture<S2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
