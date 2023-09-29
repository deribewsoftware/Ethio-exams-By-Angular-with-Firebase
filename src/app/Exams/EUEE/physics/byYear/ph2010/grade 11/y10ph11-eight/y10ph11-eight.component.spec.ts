import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11EightComponent } from './y10ph11-eight.component';

describe('Y10ph11EightComponent', () => {
  let component: Y10ph11EightComponent;
  let fixture: ComponentFixture<Y10ph11EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
