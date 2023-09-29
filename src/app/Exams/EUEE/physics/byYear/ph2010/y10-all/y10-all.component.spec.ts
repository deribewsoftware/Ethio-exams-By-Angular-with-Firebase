import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10AllComponent } from './y10-all.component';

describe('Y10AllComponent', () => {
  let component: Y10AllComponent;
  let fixture: ComponentFixture<Y10AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
