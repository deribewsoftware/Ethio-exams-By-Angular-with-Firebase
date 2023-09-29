import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9ThreeComponent } from './y15ph9-three.component';

describe('Y15ph9ThreeComponent', () => {
  let component: Y15ph9ThreeComponent;
  let fixture: ComponentFixture<Y15ph9ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
