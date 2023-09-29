import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2015Component } from './m2015.component';

describe('M2015Component', () => {
  let component: M2015Component;
  let fixture: ComponentFixture<M2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
