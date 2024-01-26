import { TestBed } from '@angular/core/testing';

import { BizisService } from './bizis.service';

describe('BizisService', () => {
  let service: BizisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BizisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
