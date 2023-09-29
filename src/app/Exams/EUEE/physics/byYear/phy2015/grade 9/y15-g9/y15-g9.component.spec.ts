import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15G9Component } from './y15-g9.component';

describe('Y15G9Component', () => {
  let component: Y15G9Component;
  let fixture: ComponentFixture<Y15G9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15G9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15G9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
