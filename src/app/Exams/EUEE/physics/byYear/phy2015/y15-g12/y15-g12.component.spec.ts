import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15G12Component } from './y15-g12.component';

describe('Y15G12Component', () => {
  let component: Y15G12Component;
  let fixture: ComponentFixture<Y15G12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15G12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15G12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
