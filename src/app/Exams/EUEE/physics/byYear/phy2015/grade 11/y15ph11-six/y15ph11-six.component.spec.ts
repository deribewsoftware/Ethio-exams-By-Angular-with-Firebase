import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11SixComponent } from './y15ph11-six.component';

describe('Y15ph11SixComponent', () => {
  let component: Y15ph11SixComponent;
  let fixture: ComponentFixture<Y15ph11SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
