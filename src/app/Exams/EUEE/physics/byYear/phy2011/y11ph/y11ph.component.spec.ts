import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y11phComponent } from './y11ph.component';

describe('Y11phComponent', () => {
  let component: Y11phComponent;
  let fixture: ComponentFixture<Y11phComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y11phComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y11phComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
