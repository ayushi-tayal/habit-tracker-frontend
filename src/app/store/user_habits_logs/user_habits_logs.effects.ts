import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as UserHabitActionLog from './user_habits_logs.actions';
import { HabitApi } from '../../core/services/habit-api';

@Injectable({
  providedIn: 'root',
})
export class UserHabitLogEffects {
  private actions$ = inject(Actions);
  private api = inject(HabitApi);

  saveUserHabitLog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActionLog.saveUserHabitLog),
      switchMap(({ userHabitLogs }) =>
        this.api.saveUserHabitLog({ userHabitLogs }).pipe(
          map((res: any) => {
            return UserHabitActionLog.saveUserHabitLogSuccess({
              userHabitLogs: res,
            });
          }),
          catchError((err) =>
            of(
              UserHabitActionLog.saveUserHabitLogFailure({
                error: err?.error?.message ?? 'Failed to save habit',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  updateUserHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActionLog.updateUserHabitLog),
      switchMap(({ userId, completed_habits }) =>
        this.api.updateUserHabitLog({ userId, completed_habits }).pipe(
          map((res: any) => {
            return UserHabitActionLog.updateUserHabitLogSuccess({
              userHabitLogs: res,
            });
          }),
          catchError((err) =>
            of(
              UserHabitActionLog.updateUserHabitLogFailure({
                error: err?.error?.message ?? 'Failed to save habit',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  loadUserHabits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActionLog.loadUserTodayHabitLog),
      switchMap(({ userId }) =>
        this.api.getUserTodayHabitLog(userId).pipe(
          map((res: any) => {
            return UserHabitActionLog.loadUserTodayHabitLogSuccess({
              userHabitLogs: res,
            });
          }),
          catchError((err) =>
            of(
              UserHabitActionLog.loadUserTodayHabitLogFailure({
                error: err?.error?.message ?? 'Failed to load user habits',
              }),
            ),
          ),
        ),
      ),
    ),
  );
  loadUserAllHabitLogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserHabitActionLog.loadUserAllHabitLogs),
      switchMap(({ userId, start_date, end_date }) =>
        this.api.getUserAllHabitLog(userId, start_date, end_date).pipe(
          map((res: any) => {
            return UserHabitActionLog.loadUserAllHabitLogsSuccess({
              habitLogs: res,
            });
          }),
          catchError((err) =>
            of(
              UserHabitActionLog.loadUserAllHabitLogsFailure({
                error: err?.error?.message ?? 'Failed to load user habits',
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
