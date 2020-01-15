import { TestBed } from '@angular/core/testing';

import { MedifilesService } from './medifiles.service';

describe('MedifilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedifilesService = TestBed.get(MedifilesService);
    expect(service).toBeTruthy();
  });
});
