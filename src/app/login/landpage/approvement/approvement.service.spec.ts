import { TestBed } from '@angular/core/testing';

import { ApprovementService } from './approvement.service';

describe('ApprovementService', () => {
  let service: ApprovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
