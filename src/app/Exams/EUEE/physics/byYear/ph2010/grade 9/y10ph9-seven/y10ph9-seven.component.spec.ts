import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9SevenComponent } from './y10ph9-seven.component';

describe('Y10ph9SevenComponent', () => {
  let component: Y10ph9SevenComponent;
  let fixture: ComponentFixture<Y10ph9SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
