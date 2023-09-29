import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10FourComponent } from './y15ph10-four.component';

describe('Y15ph10FourComponent', () => {
  let component: Y15ph10FourComponent;
  let fixture: ComponentFixture<Y15ph10FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
