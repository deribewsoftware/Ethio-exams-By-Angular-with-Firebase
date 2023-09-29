import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y12GAllComponent } from './y12-gall.component';

describe('Y12GAllComponent', () => {
  let component: Y12GAllComponent;
  let fixture: ComponentFixture<Y12GAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y12GAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y12GAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
