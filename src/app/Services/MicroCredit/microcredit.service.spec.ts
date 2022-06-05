import { TestBed } from '@angular/core/testing';

import { MicrocreditService } from './microcredit.service';

describe('MicrocreditService', () => {
  let service: MicrocreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrocreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
