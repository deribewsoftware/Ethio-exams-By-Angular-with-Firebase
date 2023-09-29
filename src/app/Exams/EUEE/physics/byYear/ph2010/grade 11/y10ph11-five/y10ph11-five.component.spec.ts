import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11FiveComponent } from './y10ph11-five.component';

describe('Y10ph11FiveComponent', () => {
  let component: Y10ph11FiveComponent;
  let fixture: ComponentFixture<Y10ph11FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
