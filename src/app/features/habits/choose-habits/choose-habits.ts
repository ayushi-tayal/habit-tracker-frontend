import { Component, computed, effect, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import * as HabitActions from '../../../store/habit/habit.actions';
import * as UserHabitAction from '../../../store/user_habits/user_habits.actions';
import {
  selectHabits,
  selectHabitsCategories,
} from '../../../store/habit/habit.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Habits } from '../../../store/habit/habit.models';
import {
  selectUserHabit,
  selectUserHabitLoading,
} from '../../../store/user_habits/user_habits.selectors';

@Component({
  selector: 'app-choose-habits',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './choose-habits.html',
  styleUrl: './choose-habits.scss',
})
export class ChooseHabits {
  private store = inject(Store);
  private router = inject(Router);

  habits = toSignal(this.store.select(selectHabits), {
    initialValue: [] as Habits[],
  });
  categories = toSignal(this.store.select(selectHabitsCategories), {
    initialValue: [],
  });
  userHabits = toSignal(this.store.select(selectUserHabit));
  userData = toSignal(this.store.select((state) => state.auth.user));
  loading$ = this.store.select(selectUserHabitLoading);

  selectedCategoryId = signal('');
  selectedHabits: Habits[] = [];
  submitted = false;

  categoryHabits = computed(() => {
    const habits = this.habits() ?? [];
    const categoryId = this.selectedCategoryId();

    return categoryId
      ? habits.filter((habit) => habit.category_id === categoryId)
      : habits;
  });

  constructor() {
    this.store.dispatch(HabitActions.loadHabit());
    this.store.dispatch(HabitActions.loadHabitCategories());
    this.store.dispatch(
      UserHabitAction.loadUserHabits({ userId: this.userData()?._id || '' }),
    );

    effect(() => {
      const userHabits = this.userHabits() ?? [];
      const habits = this.habits() ?? [];
      if (!userHabits.length || !habits.length) {
        return;
      }
      const savedHabitIds = userHabits[0]?.habitIds;
      this.selectedHabits = habits.filter((habit) =>
        savedHabitIds?.includes(habit._id),
      );
    });
  }

  onCategoryChange(): void {
    this.submitted = false;
  }

  toggleHabit(habit: Habits, checked: boolean): void {
    this.selectedHabits = checked
      ? [...this.selectedHabits, habit]
      : this.selectedHabits.filter((item) => item._id !== habit._id);
  }

  submitHabits(): void {
    this.submitted = this.selectedHabits.length > 0;
    this.store.dispatch(
      UserHabitAction.saveUserHabit({
        userId: this.userData()?._id || '',
        habitIds: this.selectedHabits.map((habit) => habit._id),
        status: 'active',
      }),
    );
  }

  updateHabits(): void {
    this.submitted = this.selectedHabits.length > 0;
    this.store.dispatch(
      UserHabitAction.updateUserHabit({
        userId: this.userData()?._id || '',
        habitIds: this.selectedHabits.map((habit) => habit._id),
        status: 'active',
      }),
    );
  }

  isHabitSelected(habit: Habits): boolean {
    return this.selectedHabits.some((selected) => selected._id === habit._id);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
