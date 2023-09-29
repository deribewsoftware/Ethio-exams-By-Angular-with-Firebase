import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11FourComponent } from './y10ph11-four.component';

describe('Y10ph11FourComponent', () => {
  let component: Y10ph11FourComponent;
  let fixture: ComponentFixture<Y10ph11FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
