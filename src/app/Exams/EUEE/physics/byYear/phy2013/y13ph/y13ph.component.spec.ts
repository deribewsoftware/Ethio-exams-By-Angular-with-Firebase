import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y13phComponent } from './y13ph.component';

describe('Y13phComponent', () => {
  let component: Y13phComponent;
  let fixture: ComponentFixture<Y13phComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y13phComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y13phComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
