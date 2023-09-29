import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12SixComponent } from './y15ph12-six.component';

describe('Y15ph12SixComponent', () => {
  let component: Y15ph12SixComponent;
  let fixture: ComponentFixture<Y15ph12SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
