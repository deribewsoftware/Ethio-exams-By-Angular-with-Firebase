import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y12phComponent } from './y12ph.component';

describe('Y12phComponent', () => {
  let component: Y12phComponent;
  let fixture: ComponentFixture<Y12phComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y12phComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y12phComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
