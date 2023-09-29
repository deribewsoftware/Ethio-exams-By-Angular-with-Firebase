import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10SevenComponent } from './y15ph10-seven.component';

describe('Y15ph10SevenComponent', () => {
  let component: Y15ph10SevenComponent;
  let fixture: ComponentFixture<Y15ph10SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
