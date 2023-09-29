import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10GAllComponent } from './y10-gall.component';

describe('Y10GAllComponent', () => {
  let component: Y10GAllComponent;
  let fixture: ComponentFixture<Y10GAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10GAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10GAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
