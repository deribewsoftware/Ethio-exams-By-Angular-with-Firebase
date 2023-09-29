import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9OneComponent } from './y15ph9-one.component';

describe('Y15ph9OneComponent', () => {
  let component: Y15ph9OneComponent;
  let fixture: ComponentFixture<Y15ph9OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
