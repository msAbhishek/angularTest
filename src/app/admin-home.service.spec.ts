import { TestBed, inject } from '@angular/core/testing';

import { AdminHomeService } from './admin-home.service';

describe('AdminHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminHomeService]
    });
  });

  it('should be created', inject([AdminHomeService], (service: AdminHomeService) => {
    expect(service).toBeTruthy();
  }));
});
