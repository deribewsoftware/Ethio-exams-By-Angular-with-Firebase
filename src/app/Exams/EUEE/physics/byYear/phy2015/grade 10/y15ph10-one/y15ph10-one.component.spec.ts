import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph10OneComponent } from './y15ph10-one.component';

describe('Y15ph10OneComponent', () => {
  let component: Y15ph10OneComponent;
  let fixture: ComponentFixture<Y15ph10OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph10OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph10OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
