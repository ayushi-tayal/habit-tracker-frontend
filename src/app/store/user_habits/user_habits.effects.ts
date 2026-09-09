import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as UserHabitActions from './user_habits.actions';
import { HabitApi } from '../../core/services/habit-api';


@Injectable({
  providedIn: 'root',
})
export class UserHabitEffects {
  private actions$ = inject(Actions);
  private api = inject(HabitApi);

  saveHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActions.saveUserHabit),
      tap((data) => console.log('saveUserHabit action dispatched', data)),
      switchMap(({ userId, habitIds, status }) =>
        this.api.saveHabit({ userId, habitIds, status }).pipe(
          map((res: any) => {
            // console.log('Habit data saved:', res);
            return UserHabitActions.saveUserHabitSuccess({ userHabits: res })
          }
          ),
          catchError((err) =>
            of(
              UserHabitActions.saveUserHabitFailure({
                error: err?.error?.message ?? 'Failed to save habit',
              })
            )
          )
        )
      )
    )
  );

  loadUserHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActions.loadUserHabits),
      tap(() => console.log('loadUserHabits action dispatched')),
      switchMap(({ userId }) =>
        this.api.getUserHabits(userId).pipe(
          map((res: any) => {
            // console.log('Habit data received:', res);
            return UserHabitActions.loadUserHabitsSuccess({ userHabits: res })
          }
          ),
          catchError((err) =>
            of(
              UserHabitActions.loadUserHabitsFailure({
                error: err?.error?.message ?? 'Failed to load user habits',
              })
            )
          )
        )
      )
    )
  );

}
