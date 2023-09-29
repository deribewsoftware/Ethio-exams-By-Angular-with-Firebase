import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshManServiceComponent } from './fresh-man-service.component';

describe('FreshManServiceComponent', () => {
  let component: FreshManServiceComponent;
  let fixture: ComponentFixture<FreshManServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshManServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshManServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
