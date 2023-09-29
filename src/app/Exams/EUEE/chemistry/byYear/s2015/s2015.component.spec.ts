import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2015Component } from './s2015.component';

describe('S2015Component', () => {
  let component: S2015Component;
  let fixture: ComponentFixture<S2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
