import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11SevenComponent } from './y15ph11-seven.component';

describe('Y15ph11SevenComponent', () => {
  let component: Y15ph11SevenComponent;
  let fixture: ComponentFixture<Y15ph11SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
