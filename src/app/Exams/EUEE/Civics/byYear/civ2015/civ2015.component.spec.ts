import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civ2015Component } from './civ2015.component';

describe('Civ2015Component', () => {
  let component: Civ2015Component;
  let fixture: ComponentFixture<Civ2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Civ2015Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civ2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
