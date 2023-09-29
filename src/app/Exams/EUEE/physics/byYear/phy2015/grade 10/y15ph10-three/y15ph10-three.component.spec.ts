import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10ThreeComponent } from './y15ph10-three.component';

describe('Y15ph10ThreeComponent', () => {
  let component: Y15ph10ThreeComponent;
  let fixture: ComponentFixture<Y15ph10ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
