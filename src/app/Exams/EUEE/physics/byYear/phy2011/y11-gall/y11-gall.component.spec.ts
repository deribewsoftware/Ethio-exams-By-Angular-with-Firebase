import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y11GAllComponent } from './y11-gall.component';

describe('Y11GAllComponent', () => {
  let component: Y11GAllComponent;
  let fixture: ComponentFixture<Y11GAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y11GAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y11GAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
