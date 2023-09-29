import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10TwoComponent } from './y10ph10-two.component';

describe('Y10ph10TwoComponent', () => {
  let component: Y10ph10TwoComponent;
  let fixture: ComponentFixture<Y10ph10TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
