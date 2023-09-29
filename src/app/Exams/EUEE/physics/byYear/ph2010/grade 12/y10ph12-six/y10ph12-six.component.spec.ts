import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12SixComponent } from './y10ph12-six.component';

describe('Y10ph12SixComponent', () => {
  let component: Y10ph12SixComponent;
  let fixture: ComponentFixture<Y10ph12SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
