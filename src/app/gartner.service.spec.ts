import { TestBed } from '@angular/core/testing';

import { GartnerService } from './gartner.service';

describe('GartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GartnerService = TestBed.get(GartnerService);
    expect(service).toBeTruthy();
  });
});
