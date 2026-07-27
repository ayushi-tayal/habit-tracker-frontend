import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducer';
import { profileReducer } from './store/profile/profile.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { authInterceptor } from './core/interceptor/auth-interceptor';
import { errorInterceptor } from './core/interceptor/error-interceptor';
import { ProfileEffects } from './store/profile/profile.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor, 
        errorInterceptor
      ])
    ),
    provideStore({
      auth: authReducer,
      profile: profileReducer,
    }),
    provideEffects([AuthEffects, ProfileEffects]),
  ],
};
