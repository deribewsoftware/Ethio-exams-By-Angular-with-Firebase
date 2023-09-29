import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9FiveComponent } from './y10ph9-five.component';

describe('Y10ph9FiveComponent', () => {
  let component: Y10ph9FiveComponent;
  let fixture: ComponentFixture<Y10ph9FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9FiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
