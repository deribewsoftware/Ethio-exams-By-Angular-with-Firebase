import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9EightComponent } from './y10ph9-eight.component';

describe('Y10ph9EightComponent', () => {
  let component: Y10ph9EightComponent;
  let fixture: ComponentFixture<Y10ph9EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
