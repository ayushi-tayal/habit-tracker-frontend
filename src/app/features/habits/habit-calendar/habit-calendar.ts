import { Component, effect, inject } from '@angular/core';
import { selectHabitLogs } from '../../../store/user_habits_logs/user_habits_logs.selectors';
import { selectUser } from '../../../store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import * as UserHabitLogAction from '../../../store/user_habits_logs/user_habits_logs.actions';

@Component({
  selector: 'app-habit-calendar',
  imports: [],
  templateUrl: './habit-calendar.html',
  styleUrl: './habit-calendar.scss',
})
export class HabitCalendar {
  private store = inject(Store);
  habitLogs = toSignal(this.store.select(selectHabitLogs), {
    initialValue: [],
  });
  userData$ = toSignal(this.store.select(selectUser));
  userId: string = '';
  calendarDays: string[] = [];
  constructor() {
    effect(() => {
      this.userId = this.userData$()?._id || '';
      const today = new Date();
      const end_date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      const startDate = new Date(today.setDate(today.getDate() - 6));
      const start_date = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
      this.store.dispatch(
        UserHabitLogAction.loadUserAllHabitLogs({
          userId: this.userId,
          start_date,
          end_date,
        }),
      );
    });
    this.createCalendarDays();
  }

  isDayCompleted(date: string): boolean {
    return this.habitLogs()?.some((log) => log.complete_date === date) ?? false;
  }

  createCalendarDays() {
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const dateString =
        `${date.getFullYear()}-` +
        `${String(date.getMonth() + 1).padStart(2, '0')}-` +
        `${String(date.getDate()).padStart(2, '0')}`;

      this.calendarDays.push(dateString);
    }
  }
}
