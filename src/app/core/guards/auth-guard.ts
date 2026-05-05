import { CanActivateFn,Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { inject } from '@angular/core';
import { selectIsLoggedIn, selectInitialized } from '../../store/auth/auth.selectors';
import { take, map, combineLatest, filter} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);
  return combineLatest([
    store.select(selectIsLoggedIn),
    store.select(selectInitialized)
  ]).pipe(
    filter(([, isInitialized])=> isInitialized),
    take(1), map(([isLoggedIn]) => {
    if(isLoggedIn ) return true
    router.navigate(['/login']);
    return false;
  }));
};
