import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10SixComponent } from './y15ph10-six.component';

describe('Y15ph10SixComponent', () => {
  let component: Y15ph10SixComponent;
  let fixture: ComponentFixture<Y15ph10SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
