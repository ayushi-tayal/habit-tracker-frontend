import {
  ApplicationConfig,
  isDevMode,
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
import { HabitReducer } from './store/habit/habit.reducer';
import { HabitEffects } from './store/habit/habit.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserHabitReducer } from './store/user_habits/user_habits.reducer';
import { UserHabitEffects } from './store/user_habits/user_habits.effects';

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
      habit: HabitReducer,
      userHabits: UserHabitReducer
    }),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Set to true for production
    }),
    provideEffects([AuthEffects, ProfileEffects, HabitEffects, UserHabitEffects]),
  ],
};

