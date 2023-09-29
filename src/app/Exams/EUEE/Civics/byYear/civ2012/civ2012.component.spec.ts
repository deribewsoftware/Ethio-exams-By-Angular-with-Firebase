import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civ2012Component } from './civ2012.component';

describe('Civ2012Component', () => {
  let component: Civ2012Component;
  let fixture: ComponentFixture<Civ2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Civ2012Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civ2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
