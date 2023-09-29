import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9OneComponent } from './y10ph9-one.component';

describe('Y10ph9OneComponent', () => {
  let component: Y10ph9OneComponent;
  let fixture: ComponentFixture<Y10ph9OneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9OneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
