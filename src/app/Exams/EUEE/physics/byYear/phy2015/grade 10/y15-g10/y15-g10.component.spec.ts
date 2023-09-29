import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15G10Component } from './y15-g10.component';

describe('Y15G10Component', () => {
  let component: Y15G10Component;
  let fixture: ComponentFixture<Y15G10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15G10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15G10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
