import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10ThreeComponent } from './y10ph10-three.component';

describe('Y10ph10ThreeComponent', () => {
  let component: Y10ph10ThreeComponent;
  let fixture: ComponentFixture<Y10ph10ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
