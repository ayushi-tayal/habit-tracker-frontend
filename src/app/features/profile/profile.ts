import { Component, inject } from '@angular/core';
import { selectProfile, selectProfileError, selectProfileLoading } from '../../store/profile/profile.selectors';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../store/profile/profile.actions';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
   CommonModule,
   RouterLink
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private store = inject(Store);
  profile$ = this.store.select(selectProfile);
  loading$ = this.store.select(selectProfileLoading);
  error$ = this.store.select(selectProfileError);


  ngOnInit(){
    this.store.dispatch(ProfileActions.loadProfile());
  }

}
