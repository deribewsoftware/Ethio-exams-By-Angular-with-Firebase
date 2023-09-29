import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11ThreeComponent } from './y10ph11-three.component';

describe('Y10ph11ThreeComponent', () => {
  let component: Y10ph11ThreeComponent;
  let fixture: ComponentFixture<Y10ph11ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
