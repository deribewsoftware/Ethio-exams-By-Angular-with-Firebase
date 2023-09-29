import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyOneComponent } from './fsh-psychology-one.component';

describe('FshPsychologyOneComponent', () => {
  let component: FshPsychologyOneComponent;
  let fixture: ComponentFixture<FshPsychologyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
