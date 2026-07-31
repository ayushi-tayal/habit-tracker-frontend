import { Injectable, inject } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as ProfileActions from './profile.actions';
import { ProfileApi } from '../../core/services/profile-api';
import { Router } from '@angular/router';

@Injectable()
export class ProfileEffects {
  private actions$ = inject(Actions);
  private api = inject(ProfileApi);
  private router = inject(Router)

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.loadProfile),
      switchMap(() =>
        this.api.getProfile().pipe(
          map((res: any) => 
            ProfileActions.loadProfileSuccess({ profile: res.user})
          ),
          catchError((err) =>
            of(
              ProfileActions.loadProfileFailure({
                error: err?.error?.message ?? 'Failed to load profile',
              })
            )
          )
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.updateProfile),
      switchMap((data) =>
        this.api.updateProfile(data).pipe(
          map((res: any) =>
            ProfileActions.updateProfileSuccess({ profile: res.user }),
          ),
          catchError((err) =>
            of(
              ProfileActions.updateProfileFailure({
                error: err?.error?.message ?? 'Registration failed',
              })
            )
          )
        )
      )
    )
  );
    updateProfileRedirect$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(ProfileActions.updateProfileSuccess),
          tap(() => this.router.navigate(['/dashboard'])),
        ),
      { dispatch: false },
    );
}
