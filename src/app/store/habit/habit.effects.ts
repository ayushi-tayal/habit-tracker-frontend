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
      switchMap(() =>
        this.api.getHabit().pipe(
          map((res: any) => {
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
      switchMap(() =>
        this.api.getHabitCategories().pipe(
          map((res: any) => {
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
