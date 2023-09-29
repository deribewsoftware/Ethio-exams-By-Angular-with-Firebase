import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11EightComponent } from './y15ph11-eight.component';

describe('Y15ph11EightComponent', () => {
  let component: Y15ph11EightComponent;
  let fixture: ComponentFixture<Y15ph11EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
