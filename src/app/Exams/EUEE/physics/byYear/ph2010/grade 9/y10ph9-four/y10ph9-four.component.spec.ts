import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9FourComponent } from './y10ph9-four.component';

describe('Y10ph9FourComponent', () => {
  let component: Y10ph9FourComponent;
  let fixture: ComponentFixture<Y10ph9FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
