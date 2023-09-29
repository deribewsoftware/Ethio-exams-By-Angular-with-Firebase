import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10FourComponent } from './y10ph10-four.component';

describe('Y10ph10FourComponent', () => {
  let component: Y10ph10FourComponent;
  let fixture: ComponentFixture<Y10ph10FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
