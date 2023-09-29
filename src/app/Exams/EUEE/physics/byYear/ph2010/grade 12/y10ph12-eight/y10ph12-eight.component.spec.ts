import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12EightComponent } from './y10ph12-eight.component';

describe('Y10ph12EightComponent', () => {
  let component: Y10ph12EightComponent;
  let fixture: ComponentFixture<Y10ph12EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
