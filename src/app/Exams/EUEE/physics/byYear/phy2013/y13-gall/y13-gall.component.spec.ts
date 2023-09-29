import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y13GAllComponent } from './y13-gall.component';

describe('Y13GAllComponent', () => {
  let component: Y13GAllComponent;
  let fixture: ComponentFixture<Y13GAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y13GAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y13GAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
