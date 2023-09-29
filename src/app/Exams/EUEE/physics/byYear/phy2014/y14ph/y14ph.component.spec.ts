import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y14phComponent } from './y14ph.component';

describe('Y14phComponent', () => {
  let component: Y14phComponent;
  let fixture: ComponentFixture<Y14phComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y14phComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y14phComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
