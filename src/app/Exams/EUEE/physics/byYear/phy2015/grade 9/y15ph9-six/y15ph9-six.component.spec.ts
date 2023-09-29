import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9SixComponent } from './y15ph9-six.component';

describe('Y15ph9SixComponent', () => {
  let component: Y15ph9SixComponent;
  let fixture: ComponentFixture<Y15ph9SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
