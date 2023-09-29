import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11SevenComponent } from './y10ph11-seven.component';

describe('Y10ph11SevenComponent', () => {
  let component: Y10ph11SevenComponent;
  let fixture: ComponentFixture<Y10ph11SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
