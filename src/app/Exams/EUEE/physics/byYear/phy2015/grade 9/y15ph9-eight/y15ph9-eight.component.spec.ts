import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9EightComponent } from './y15ph9-eight.component';

describe('Y15ph9EightComponent', () => {
  let component: Y15ph9EightComponent;
  let fixture: ComponentFixture<Y15ph9EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9EightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
