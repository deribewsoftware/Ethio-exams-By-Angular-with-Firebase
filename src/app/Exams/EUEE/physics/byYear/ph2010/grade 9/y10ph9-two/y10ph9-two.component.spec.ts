import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9TwoComponent } from './y10ph9-two.component';

describe('Y10ph9TwoComponent', () => {
  let component: Y10ph9TwoComponent;
  let fixture: ComponentFixture<Y10ph9TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9TwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
