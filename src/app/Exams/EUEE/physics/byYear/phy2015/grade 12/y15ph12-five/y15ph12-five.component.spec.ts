import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12FiveComponent } from './y15ph12-five.component';

describe('Y15ph12FiveComponent', () => {
  let component: Y15ph12FiveComponent;
  let fixture: ComponentFixture<Y15ph12FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
