import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyFourComponent } from './fsh-psychology-four.component';

describe('FshPsychologyFourComponent', () => {
  let component: FshPsychologyFourComponent;
  let fixture: ComponentFixture<FshPsychologyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
