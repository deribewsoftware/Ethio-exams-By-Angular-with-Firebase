import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9FiveComponent } from './y15ph9-five.component';

describe('Y15ph9FiveComponent', () => {
  let component: Y15ph9FiveComponent;
  let fixture: ComponentFixture<Y15ph9FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
