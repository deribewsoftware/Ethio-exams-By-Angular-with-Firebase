import { TestBed } from '@angular/core/testing';

import { ExamsModelService } from './exams-model.service';

describe('ExamsModelService', () => {
  let service: ExamsModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
