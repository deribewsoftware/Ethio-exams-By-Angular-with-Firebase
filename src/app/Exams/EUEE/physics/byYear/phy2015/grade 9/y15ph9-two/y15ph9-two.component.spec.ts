import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9TwoComponent } from './y15ph9-two.component';

describe('Y15ph9TwoComponent', () => {
  let component: Y15ph9TwoComponent;
  let fixture: ComponentFixture<Y15ph9TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
