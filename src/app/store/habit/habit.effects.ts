import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as HabitActions from './habit.actions';
import { HabitApi } from '../../core/services/habit-api';


@Injectable({
  providedIn: 'root',
})
export class HabitEffects {
  private actions$ = inject(Actions);
  private api = inject(HabitApi);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitActions.loadHabit),
      tap(() => console.log('loadHabit action dispatched')),
      switchMap(() =>
        this.api.getHabit().pipe(
          map((res: any) => {
            // console.log('Habit data received:', res);
            return HabitActions.loadHabitSuccess({ habits: res })
          }
          ),
          catchError((err) =>
            of(
              HabitActions.loadHabitFailure({
                error: err?.error?.message ?? 'Failed to load habit',
              })
            )
          )
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HabitActions.loadHabitCategories),
      tap(() => console.log('loadHabitCategories action dispatched')),
      switchMap(() =>
        this.api.getHabitCategories().pipe(
          map((res: any) => {
            // console.log('Habit categories data received:', res);
            return HabitActions.loadHabitCategoriesSuccess({ categories: res })
          }
          ),
          catchError((err) =>
            of(
              HabitActions.loadHabitCategoriesFailure({
                error: err?.error?.message ?? 'Failed to load habit categories',
              })
            )
          )
        )
      )
    )
  );

}
