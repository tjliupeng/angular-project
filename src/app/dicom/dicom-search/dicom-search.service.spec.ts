import { TestBed, inject } from '@angular/core/testing';

import { DicomSearchService } from './dicom-search.service';

describe('DicomSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DicomSearchService]
    });
  });

  it('should be created', inject([DicomSearchService], (service: DicomSearchService) => {
    expect(service).toBeTruthy();
  }));
});
