import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2012Component } from './s2012.component';

describe('S2012Component', () => {
  let component: S2012Component;
  let fixture: ComponentFixture<S2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(S2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
