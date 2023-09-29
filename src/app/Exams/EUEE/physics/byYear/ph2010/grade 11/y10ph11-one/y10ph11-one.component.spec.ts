import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11OneComponent } from './y10ph11-one.component';

describe('Y10ph11OneComponent', () => {
  let component: Y10ph11OneComponent;
  let fixture: ComponentFixture<Y10ph11OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
