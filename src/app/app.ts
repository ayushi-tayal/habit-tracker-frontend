import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth/auth.actions';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private store = inject(Store);
  protected loadingService = inject(LoadingService);
  constructor() {
    this.store.dispatch(AuthActions.loadSession());
  }
  protected title = 'habit-tracker-clean';
}
