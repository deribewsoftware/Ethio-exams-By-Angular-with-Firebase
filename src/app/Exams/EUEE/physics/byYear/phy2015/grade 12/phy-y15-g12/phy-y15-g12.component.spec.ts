import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyY15G12Component } from './phy-y15-g12.component';

describe('PhyY15G12Component', () => {
  let component: PhyY15G12Component;
  let fixture: ComponentFixture<PhyY15G12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyY15G12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhyY15G12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
