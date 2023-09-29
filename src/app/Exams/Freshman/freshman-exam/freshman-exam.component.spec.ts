import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshmanExamComponent } from './freshman-exam.component';

describe('FreshmanExamComponent', () => {
  let component: FreshmanExamComponent;
  let fixture: ComponentFixture<FreshmanExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshmanExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshmanExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
