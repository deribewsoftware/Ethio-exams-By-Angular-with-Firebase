import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph12OneComponent } from './y15ph12-one.component';

describe('Y15ph12OneComponent', () => {
  let component: Y15ph12OneComponent;
  let fixture: ComponentFixture<Y15ph12OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph12OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph12OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
