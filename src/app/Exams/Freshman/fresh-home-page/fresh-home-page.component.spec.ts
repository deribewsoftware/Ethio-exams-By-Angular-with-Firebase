import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshHomePageComponent } from './fresh-home-page.component';

describe('FreshHomePageComponent', () => {
  let component: FreshHomePageComponent;
  let fixture: ComponentFixture<FreshHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
