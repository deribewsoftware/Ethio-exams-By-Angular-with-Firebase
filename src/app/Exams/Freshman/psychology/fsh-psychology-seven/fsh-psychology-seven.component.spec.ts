import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologySevenComponent } from './fsh-psychology-seven.component';

describe('FshPsychologySevenComponent', () => {
  let component: FshPsychologySevenComponent;
  let fixture: ComponentFixture<FshPsychologySevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologySevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
