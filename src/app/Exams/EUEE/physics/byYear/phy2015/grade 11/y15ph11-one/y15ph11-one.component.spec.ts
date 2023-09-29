import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11OneComponent } from './y15ph11-one.component';

describe('Y15ph11OneComponent', () => {
  let component: Y15ph11OneComponent;
  let fixture: ComponentFixture<Y15ph11OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
