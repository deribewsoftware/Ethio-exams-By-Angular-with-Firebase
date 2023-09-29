import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civ2014Component } from './civ2014.component';

describe('Civ2014Component', () => {
  let component: Civ2014Component;
  let fixture: ComponentFixture<Civ2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Civ2014Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civ2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
