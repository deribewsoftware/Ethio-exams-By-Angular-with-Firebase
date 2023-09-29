import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y15G12AllComponent } from './y15-g12-all.component';

describe('Y15G12AllComponent', () => {
  let component: Y15G12AllComponent;
  let fixture: ComponentFixture<Y15G12AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y15G12AllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y15G12AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
