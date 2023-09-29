import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2012Component } from './b2012.component';

describe('B2012Component', () => {
  let component: B2012Component;
  let fixture: ComponentFixture<B2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
