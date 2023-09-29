import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9ThreeComponent } from './y10ph9-three.component';

describe('Y10ph9ThreeComponent', () => {
  let component: Y10ph9ThreeComponent;
  let fixture: ComponentFixture<Y10ph9ThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9ThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
