import { Component, effect, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserHabit } from '../../../store/user_habits/user_habits.selectors';
import { selectHabits } from '../../../store/habit/habit.selectors';
import { selectUser } from '../../../store/auth/auth.selectors';
import { selectUserHabitLog } from '../../../store/user_habits_logs/user_habits_logs.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import * as HabitActions from '../../../store/habit/habit.actions';
import * as UserHabitAction from '../../../store/user_habits/user_habits.actions';
import * as UserHabitLogAction from '../../../store/user_habits_logs/user_habits_logs.actions';

@Component({
  selector: 'app-today-habits',
  imports: [],
  standalone: true,
  templateUrl: './today-habits.html',
  styleUrl: './today-habits.scss',
})
export class TodayHabits {
  userId: string = '';
  private store = inject(Store);
  userHabitIds: string[] = [];
  selectedHabits: any[] = [];
  loggedHabitIds: any[] = [];
  habitLog: any;
  userData$ = toSignal(this.store.select(selectUser));
  userHabits$ = toSignal(this.store.select(selectUserHabit), {
    initialValue: [],
  });
  habits$ = toSignal(this.store.select(selectHabits), { initialValue: [] });
  userTodayHabitLog$: any = toSignal(this.store.select(selectUserHabitLog));

  constructor() {
    this.store.dispatch(HabitActions.loadHabit());
    effect(() => {
      this.userId = this.userData$()?._id || '';
      if (this.userId) {
        this.store.dispatch(
          UserHabitAction.loadUserHabits({ userId: this.userId }),
        );
        this.store.dispatch(
          UserHabitLogAction.loadUserTodayHabitLog({
            userId: this.userData$()?._id || '',
          }),
        );
      }
    });

    effect(() => {
      const userHabit: any = this.userHabits$();
      const habits = this.habits$() || [];

      this.userHabitIds = userHabit[0]?.habitIds || [];

      if (this.userHabitIds.length)
        this.selectedHabits =
          habits?.filter((ele) => this.userHabitIds.includes(ele._id)) || [];
    });
    effect(() => {
      this.habitLog = this.userTodayHabitLog$();
      if(this.habitLog)
        this.loggedHabitIds = [...this.habitLog?.completed_habits]
    });
  }

  payload() {
    const today = new Date();
    return {
      userId: this.userId,
      completed_habits: this.loggedHabitIds,
      complete_date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      date: today.getDate(),
      day_of_week: today.getDay(),
    };
  }
  submit() {
    const habit_log = this.payload();
    this.store.dispatch(
      UserHabitLogAction.saveUserHabitLog({ userHabitLogs: habit_log }),
    );
  }

  update() {
    const habit_log = {
      userId: this.userId,
      completed_habits: this.loggedHabitIds,
    };
    this.store.dispatch(UserHabitLogAction.updateUserHabitLog(habit_log));
  }

  isHabitSelected(habit: any) {
    return this.habitLog ? this.habitLog.completed_habits.includes(habit._id): false;
  }

  toggleHabit(habit: any, isChecked: boolean) {
    if (isChecked) {
      this.loggedHabitIds.push(habit._id);
    } else {
      this.loggedHabitIds = this.loggedHabitIds.filter(
        (id) => id !== habit._id,
      );
    }
  }
}
