import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9FourComponent } from './y15ph9-four.component';

describe('Y15ph9FourComponent', () => {
  let component: Y15ph9FourComponent;
  let fixture: ComponentFixture<Y15ph9FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9FourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
