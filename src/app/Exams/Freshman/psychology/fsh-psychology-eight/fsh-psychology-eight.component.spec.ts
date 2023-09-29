import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyEightComponent } from './fsh-psychology-eight.component';

describe('FshPsychologyEightComponent', () => {
  let component: FshPsychologyEightComponent;
  let fixture: ComponentFixture<FshPsychologyEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
