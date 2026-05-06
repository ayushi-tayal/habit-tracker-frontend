import { Injectable, inject } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthApi } from '../../core/services/auth-api';
import { TokenStorage } from '../../core/services/token-storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  //   constructor(
  private actions$ = inject(Actions);
  private api = inject(AuthApi);
  private tokenStorage = inject(TokenStorage);
  private router = inject(Router);
  //   ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.api.login({ email, password }).pipe(
          tap((res: any) => this.tokenStorage.setToken(res.token)),
          map((res: any) =>
            AuthActions.loginSuccess({ user: res.user, token: res.token }),
          ),
          catchError((err) =>
            of(
              AuthActions.loginFailure({
                error: err?.error?.message ?? 'Login failed',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ username, email, phone, password }) =>
        this.api.register({ username, email, phone, password }).pipe(
          tap((res: any) => this.tokenStorage.setToken(res.token)),
          map((res: any) =>
            AuthActions.registerSuccess({ user: res.user, token: res.token }),
          ),
          catchError((err) =>
            of(
              AuthActions.registerFailure({
                error: err?.error?.message ?? 'Registration failed',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  loadSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadSession),
      map(() => this.tokenStorage.getToken()),
      switchMap((token) => {
        if (!token)
          return of(
            AuthActions.loadSessionFailure({ error: 'No token found' }),
          );

        return this.api.me().pipe(
          map((res) =>
            AuthActions.loadSessionSuccess({ user: res.user, token }),
          ),
          catchError(() => {
            this.tokenStorage.clearToken();
            return of(
              AuthActions.loadSessionFailure({
                error: 'Failed to load session',
              }),
            );
          }),
        );
      }),
    ),
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/dashboard'])),
      ),
    { dispatch: false },
  );
  registerRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerSuccess),
        tap(() => this.router.navigate(['/login'])),
      ),
    { dispatch: false },
  );
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => this.tokenStorage.clearToken()),
      ),
    { dispatch: false },
  );
}
