import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10EightComponent } from './y15ph10-eight.component';

describe('Y15ph10EightComponent', () => {
  let component: Y15ph10EightComponent;
  let fixture: ComponentFixture<Y15ph10EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
