import { TestBed } from '@angular/core/testing';

import { DashboradServiceService } from './dashborad-service.service';

describe('DashboradServiceService', () => {
  let service: DashboradServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboradServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
