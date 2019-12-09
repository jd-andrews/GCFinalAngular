import { TestBed } from '@angular/core/testing';

import { FacesService } from './faces.service';

describe('FacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacesService = TestBed.get(FacesService);
    expect(service).toBeTruthy();
  });
});
