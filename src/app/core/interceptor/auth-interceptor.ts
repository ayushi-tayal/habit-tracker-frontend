import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorage } from '../services/token-storage';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorage = inject(TokenStorage);
  const token = tokenStorage.getToken();
  if(!token) {
    return next(req)
  }

  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(clonedReq);
};
