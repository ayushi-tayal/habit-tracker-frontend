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

  saveUserHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActions.saveUserHabit),
      switchMap(({ userId, habitIds, status }) =>
        this.api.saveUserHabit({ userId, habitIds, status }).pipe(
          map((res: any) => {
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
  
  updateUserHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActions.updateUserHabit),
      switchMap(({ userId, habitIds, status }) =>
        this.api.updateUserHabit({ userId, habitIds, status }).pipe(
          map((res: any) => {
            return UserHabitActions.updateUserHabitSuccess({ userHabits: res })
          }
          ),
          catchError((err) =>
            of(
              UserHabitActions.updateUserHabitFailure({
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
      switchMap(({ userId }) =>
        this.api.getUserHabits(userId).pipe(
          map((res: any) => {
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
