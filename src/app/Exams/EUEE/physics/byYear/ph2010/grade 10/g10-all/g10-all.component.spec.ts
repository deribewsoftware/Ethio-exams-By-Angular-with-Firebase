import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G10AllComponent } from './g10-all.component';

describe('G10AllComponent', () => {
  let component: G10AllComponent;
  let fixture: ComponentFixture<G10AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G10AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G10AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
