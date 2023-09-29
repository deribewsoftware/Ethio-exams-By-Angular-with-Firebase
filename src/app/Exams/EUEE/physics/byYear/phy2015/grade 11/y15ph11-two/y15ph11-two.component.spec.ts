import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11TwoComponent } from './y15ph11-two.component';

describe('Y15ph11TwoComponent', () => {
  let component: Y15ph11TwoComponent;
  let fixture: ComponentFixture<Y15ph11TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
