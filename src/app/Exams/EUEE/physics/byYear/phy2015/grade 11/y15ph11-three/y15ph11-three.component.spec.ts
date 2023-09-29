import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph11ThreeComponent } from './y15ph11-three.component';

describe('Y15ph11ThreeComponent', () => {
  let component: Y15ph11ThreeComponent;
  let fixture: ComponentFixture<Y15ph11ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph11ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph11ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
