import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11FourComponent } from './y15ph11-four.component';

describe('Y15ph11FourComponent', () => {
  let component: Y15ph11FourComponent;
  let fixture: ComponentFixture<Y15ph11FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
