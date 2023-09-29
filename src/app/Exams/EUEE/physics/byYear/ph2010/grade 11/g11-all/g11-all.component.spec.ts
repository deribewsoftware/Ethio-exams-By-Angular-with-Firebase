import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G11AllComponent } from './g11-all.component';

describe('G11AllComponent', () => {
  let component: G11AllComponent;
  let fixture: ComponentFixture<G11AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G11AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G11AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
