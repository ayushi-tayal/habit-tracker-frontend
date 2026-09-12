import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { selectProfile } from '../../../store/profile/profile.selectors';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../../store/profile/profile.actions'

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile {
  userId: string='';
  editProfileForm: FormGroup;
  private store= inject(Store);
  private router = inject(Router);
  profile$ = this.store.select(selectProfile);

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userId = params['user_id'];
    });
    this.editProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: [{value:'', disabled:true}],
      phone: [{value:'', disabled:true}],
      personal_info: this.fb.group({
        profession: [''],
        marital_status: [''],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          pincode: ['', Validators.required],
          country: ['', Validators.required]
        })
              
      })
     
    });
  }
 
  ngOnInit(){
    this.store.dispatch(ProfileActions.loadProfile());
      this.profile$.subscribe(profile => {
        if(!profile) this.store.dispatch(ProfileActions.loadProfile());
        this.editProfileForm.patchValue({...profile})
      });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    if(this.editProfileForm.valid){
      this.store.dispatch(ProfileActions.updateProfile({userid: this.userId, profile:this.editProfileForm.getRawValue()}))
    }
  }
}
