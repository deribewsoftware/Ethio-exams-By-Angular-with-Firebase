import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12FiveComponent } from './y10ph12-five.component';

describe('Y10ph12FiveComponent', () => {
  let component: Y10ph12FiveComponent;
  let fixture: ComponentFixture<Y10ph12FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
