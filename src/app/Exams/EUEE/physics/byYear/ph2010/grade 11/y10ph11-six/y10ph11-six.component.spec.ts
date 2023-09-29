import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph11SixComponent } from './y10ph11-six.component';

describe('Y10ph11SixComponent', () => {
  let component: Y10ph11SixComponent;
  let fixture: ComponentFixture<Y10ph11SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph11SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph11SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
