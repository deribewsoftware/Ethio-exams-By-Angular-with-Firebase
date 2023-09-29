import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12TwoComponent } from './y10ph12-two.component';

describe('Y10ph12TwoComponent', () => {
  let component: Y10ph12TwoComponent;
  let fixture: ComponentFixture<Y10ph12TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
