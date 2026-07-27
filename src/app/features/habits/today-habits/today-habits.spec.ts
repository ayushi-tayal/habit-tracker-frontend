import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHabits } from './today-habits';

describe('TodayHabits', () => {
  let component: TodayHabits;
  let fixture: ComponentFixture<TodayHabits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayHabits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayHabits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
