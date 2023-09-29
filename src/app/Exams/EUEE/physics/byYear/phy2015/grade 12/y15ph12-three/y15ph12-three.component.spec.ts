import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12ThreeComponent } from './y15ph12-three.component';

describe('Y15ph12ThreeComponent', () => {
  let component: Y15ph12ThreeComponent;
  let fixture: ComponentFixture<Y15ph12ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
