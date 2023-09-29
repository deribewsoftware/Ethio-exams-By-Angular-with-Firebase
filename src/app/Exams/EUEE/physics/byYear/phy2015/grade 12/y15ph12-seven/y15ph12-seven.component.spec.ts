import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12SevenComponent } from './y15ph12-seven.component';

describe('Y15ph12SevenComponent', () => {
  let component: Y15ph12SevenComponent;
  let fixture: ComponentFixture<Y15ph12SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
