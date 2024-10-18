import { TestBed } from '@angular/core/testing';
import { TESTSERVICE } from 'src/models/constants/unit-tests.constants';

import { ImagesService } from './images.service';

describe(ImagesService.name, () => {
  let service: ImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesService);
  });

  it(TESTSERVICE, () => {
    expect(service).toBeTruthy();
  });
});
