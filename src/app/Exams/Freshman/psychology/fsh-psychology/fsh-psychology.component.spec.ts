import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyComponent } from './fsh-psychology.component';

describe('FshPsychologyComponent', () => {
  let component: FshPsychologyComponent;
  let fixture: ComponentFixture<FshPsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
