import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyFiveComponent } from './fsh-psychology-five.component';

describe('FshPsychologyFiveComponent', () => {
  let component: FshPsychologyFiveComponent;
  let fixture: ComponentFixture<FshPsychologyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
