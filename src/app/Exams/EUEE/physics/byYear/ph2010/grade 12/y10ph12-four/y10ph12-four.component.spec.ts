import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12FourComponent } from './y10ph12-four.component';

describe('Y10ph12FourComponent', () => {
  let component: Y10ph12FourComponent;
  let fixture: ComponentFixture<Y10ph12FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
