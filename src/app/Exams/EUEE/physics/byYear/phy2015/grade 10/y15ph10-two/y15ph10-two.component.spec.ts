import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10TwoComponent } from './y15ph10-two.component';

describe('Y15ph10TwoComponent', () => {
  let component: Y15ph10TwoComponent;
  let fixture: ComponentFixture<Y15ph10TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
