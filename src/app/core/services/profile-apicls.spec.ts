import { TestBed } from '@angular/core/testing';

import { ProfileApicls } from './profile-apicls';

describe('ProfileApicls', () => {
  let service: ProfileApicls;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileApicls);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
