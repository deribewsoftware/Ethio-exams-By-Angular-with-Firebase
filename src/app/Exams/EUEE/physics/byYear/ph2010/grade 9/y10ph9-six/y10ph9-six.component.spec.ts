import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph9SixComponent } from './y10ph9-six.component';

describe('Y10ph9SixComponent', () => {
  let component: Y10ph9SixComponent;
  let fixture: ComponentFixture<Y10ph9SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph9SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph9SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
