import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EueeHomePageComponent } from './euee-home-page.component';

describe('EueeHomePageComponent', () => {
  let component: EueeHomePageComponent;
  let fixture: ComponentFixture<EueeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EueeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EueeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
