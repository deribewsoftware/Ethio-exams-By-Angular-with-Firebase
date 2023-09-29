import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FshPsychologySixComponent } from './fsh-psychology-six.component';

describe('FshPsychologySixComponent', () => {
  let component: FshPsychologySixComponent;
  let fixture: ComponentFixture<FshPsychologySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FshPsychologySixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FshPsychologySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
