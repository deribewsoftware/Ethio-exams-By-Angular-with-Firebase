import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y14GAllComponent } from './y14-gall.component';

describe('Y14GAllComponent', () => {
  let component: Y14GAllComponent;
  let fixture: ComponentFixture<Y14GAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y14GAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y14GAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
