import { TestBed } from '@angular/core/testing';

import { ExamModelService } from './exam-model.service';

describe('ExamModelService', () => {
  let service: ExamModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
