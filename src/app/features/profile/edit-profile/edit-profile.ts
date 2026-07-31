import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { selectProfile } from '../../../store/profile/profile.selectors';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as ProfileActions from '../../../store/profile/profile.actions'

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile {
  userId: string='';
  editProfileForm: FormGroup;
  private store= inject(Store);
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

  onSubmit() {
    console.log(this.editProfileForm.value);
    if(this.editProfileForm.valid){
      this.store.dispatch(ProfileActions.updateProfile({userid: this.userId, profile:this.editProfileForm.getRawValue()}))
    }
  }
}
