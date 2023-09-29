import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15G11Component } from './y15-g11.component';

describe('Y15G11Component', () => {
  let component: Y15G11Component;
  let fixture: ComponentFixture<Y15G11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15G11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15G11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
