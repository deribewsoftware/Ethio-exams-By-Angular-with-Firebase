import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G9AllComponent } from './g9-all.component';

describe('G9AllComponent', () => {
  let component: G9AllComponent;
  let fixture: ComponentFixture<G9AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G9AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G9AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
