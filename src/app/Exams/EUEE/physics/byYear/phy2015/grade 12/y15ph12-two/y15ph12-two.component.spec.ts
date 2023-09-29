import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12TwoComponent } from './y15ph12-two.component';

describe('Y15ph12TwoComponent', () => {
  let component: Y15ph12TwoComponent;
  let fixture: ComponentFixture<Y15ph12TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
