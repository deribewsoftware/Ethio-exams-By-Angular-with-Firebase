import { TestBed } from '@angular/core/testing';

import { FreshmanServiceService } from './freshman-service.service';

describe('FreshmanServiceService', () => {
  let service: FreshmanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshmanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
