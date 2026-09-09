import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHabits } from './choose-habits';

describe('ChooseHabits', () => {
  let component: ChooseHabits;
  let fixture: ComponentFixture<ChooseHabits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseHabits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseHabits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
