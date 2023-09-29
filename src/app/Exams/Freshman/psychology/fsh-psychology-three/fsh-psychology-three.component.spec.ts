import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyThreeComponent } from './fsh-psychology-three.component';

describe('FshPsychologyThreeComponent', () => {
  let component: FshPsychologyThreeComponent;
  let fixture: ComponentFixture<FshPsychologyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
