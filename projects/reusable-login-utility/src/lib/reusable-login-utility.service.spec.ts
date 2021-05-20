import { TestBed } from '@angular/core/testing';

import { ReusableLoginUtilityService } from './reusable-login-utility.service';

describe('ReusableLoginUtilityService', () => {
  let service: ReusableLoginUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableLoginUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
