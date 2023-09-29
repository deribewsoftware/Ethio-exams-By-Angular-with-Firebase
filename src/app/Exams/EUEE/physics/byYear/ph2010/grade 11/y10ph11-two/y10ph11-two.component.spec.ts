import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11TwoComponent } from './y10ph11-two.component';

describe('Y10ph11TwoComponent', () => {
  let component: Y10ph11TwoComponent;
  let fixture: ComponentFixture<Y10ph11TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
