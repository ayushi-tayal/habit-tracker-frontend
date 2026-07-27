import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { selectProfile } from '../../../store/profile/profile.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile {
  editProfileForm: FormGroup;
  private store= inject(Store);
  profile$ = this.store.select(selectProfile).subscribe(profile => {
    console.log('Profile data received in EditProfile component:', profile);
    // this.editProfileForm.patchValue({

    // });
  });
  constructor(private fb: FormBuilder) {
    this.editProfileForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      profession: [''],
      maritalStatus: [''],
      address: [''],
      city: [''],
      state: [''],
      country: ['']
    });
    //  console.log(this.profile$);
  }
 
  onSubmit() {
    console.log(this.editProfileForm.value);
  }
}
