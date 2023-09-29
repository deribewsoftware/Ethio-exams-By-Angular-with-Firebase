import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12FourComponent } from './y15ph12-four.component';

describe('Y15ph12FourComponent', () => {
  let component: Y15ph12FourComponent;
  let fixture: ComponentFixture<Y15ph12FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
