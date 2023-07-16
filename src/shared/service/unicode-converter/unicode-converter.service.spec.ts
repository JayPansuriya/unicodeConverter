import { TestBed } from '@angular/core/testing';

import { UnicodeConverterService } from './unicode-converter.service';

describe('UnicodeConverterService', () => {
  let service: UnicodeConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnicodeConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
