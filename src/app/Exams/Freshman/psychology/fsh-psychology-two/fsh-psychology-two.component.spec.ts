import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologyTwoComponent } from './fsh-psychology-two.component';

describe('FshPsychologyTwoComponent', () => {
  let component: FshPsychologyTwoComponent;
  let fixture: ComponentFixture<FshPsychologyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologyTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
