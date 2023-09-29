import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10FiveComponent } from './y10ph10-five.component';

describe('Y10ph10FiveComponent', () => {
  let component: Y10ph10FiveComponent;
  let fixture: ComponentFixture<Y10ph10FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
