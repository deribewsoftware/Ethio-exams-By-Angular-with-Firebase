import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12SevenComponent } from './y10ph12-seven.component';

describe('Y10ph12SevenComponent', () => {
  let component: Y10ph12SevenComponent;
  let fixture: ComponentFixture<Y10ph12SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
