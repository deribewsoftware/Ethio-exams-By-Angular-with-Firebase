import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10FiveComponent } from './y15ph10-five.component';

describe('Y15ph10FiveComponent', () => {
  let component: Y15ph10FiveComponent;
  let fixture: ComponentFixture<Y15ph10FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
