import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11FiveComponent } from './y15ph11-five.component';

describe('Y15ph11FiveComponent', () => {
  let component: Y15ph11FiveComponent;
  let fixture: ComponentFixture<Y15ph11FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
