import { TestBed } from '@angular/core/testing';

import { HabitApi } from './habit-api';

describe('HabitApi', () => {
  let service: HabitApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
