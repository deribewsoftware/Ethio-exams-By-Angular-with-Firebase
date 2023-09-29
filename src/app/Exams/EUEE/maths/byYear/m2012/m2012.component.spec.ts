import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2012Component } from './m2012.component';

describe('M2012Component', () => {
  let component: M2012Component;
  let fixture: ComponentFixture<M2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
