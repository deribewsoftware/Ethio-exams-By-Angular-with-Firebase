import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12EightComponent } from './y15ph12-eight.component';

describe('Y15ph12EightComponent', () => {
  let component: Y15ph12EightComponent;
  let fixture: ComponentFixture<Y15ph12EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
