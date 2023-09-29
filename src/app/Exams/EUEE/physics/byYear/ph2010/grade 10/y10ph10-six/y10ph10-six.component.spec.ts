import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y10ph10SixComponent } from './y10ph10-six.component';

describe('Y10ph10SixComponent', () => {
  let component: Y10ph10SixComponent;
  let fixture: ComponentFixture<Y10ph10SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y10ph10SixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y10ph10SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
