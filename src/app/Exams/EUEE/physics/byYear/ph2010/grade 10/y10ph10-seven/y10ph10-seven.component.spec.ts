import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10SevenComponent } from './y10ph10-seven.component';

describe('Y10ph10SevenComponent', () => {
  let component: Y10ph10SevenComponent;
  let fixture: ComponentFixture<Y10ph10SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
