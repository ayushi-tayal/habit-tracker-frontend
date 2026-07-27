import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorage } from '../services/token-storage';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth/auth.actions';
import { catchError, of, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const tokenStorage = inject(TokenStorage);
  const store = inject(Store);
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        tokenStorage.clearToken();
        store.dispatch(AuthActions.logout());
        router.navigate(['/login']);
      }
      return throwError(() => err);

    })
  );
};
