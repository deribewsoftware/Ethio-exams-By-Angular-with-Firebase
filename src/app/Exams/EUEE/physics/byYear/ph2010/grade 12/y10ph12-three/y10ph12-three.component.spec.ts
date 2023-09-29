import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12ThreeComponent } from './y10ph12-three.component';

describe('Y10ph12ThreeComponent', () => {
  let component: Y10ph12ThreeComponent;
  let fixture: ComponentFixture<Y10ph12ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
