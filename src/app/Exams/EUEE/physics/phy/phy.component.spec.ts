import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyComponent } from './phy.component';

describe('PhyComponent', () => {
  let component: PhyComponent;
  let fixture: ComponentFixture<PhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
