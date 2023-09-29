import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10OneComponent } from './y10ph10-one.component';

describe('Y10ph10OneComponent', () => {
  let component: Y10ph10OneComponent;
  let fixture: ComponentFixture<Y10ph10OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
