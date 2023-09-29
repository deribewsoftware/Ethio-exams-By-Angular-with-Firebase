import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civ2013Component } from './civ2013.component';

describe('Civ2013Component', () => {
  let component: Civ2013Component;
  let fixture: ComponentFixture<Civ2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Civ2013Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civ2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
