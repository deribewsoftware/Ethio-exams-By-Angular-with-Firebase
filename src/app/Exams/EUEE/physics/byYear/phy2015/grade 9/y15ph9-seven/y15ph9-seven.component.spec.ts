import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15ph9SevenComponent } from './y15ph9-seven.component';

describe('Y15ph9SevenComponent', () => {
  let component: Y15ph9SevenComponent;
  let fixture: ComponentFixture<Y15ph9SevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15ph9SevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15ph9SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
