import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10EightComponent } from './y10ph10-eight.component';

describe('Y10ph10EightComponent', () => {
  let component: Y10ph10EightComponent;
  let fixture: ComponentFixture<Y10ph10EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
