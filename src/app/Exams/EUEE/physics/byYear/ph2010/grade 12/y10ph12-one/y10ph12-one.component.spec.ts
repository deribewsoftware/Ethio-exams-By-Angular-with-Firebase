import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph12OneComponent } from './y10ph12-one.component';

describe('Y10ph12OneComponent', () => {
  let component: Y10ph12OneComponent;
  let fixture: ComponentFixture<Y10ph12OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph12OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph12OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
