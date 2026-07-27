import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as AuthActions from '../../../store/auth/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  resetPasswordForm: FormGroup;
  email: string | null = null;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store
  ) {
      this.route.queryParams.subscribe(params => {
        this.email = params['email'];
      });
      this.resetPasswordForm = this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
        },
        { validators: this.passwordMatchValidator.bind(this) }
      );
    }

  passwordMatchValidator(formGroup: FormGroup) {
    console.log('passwordMatchValidator called', this.email);
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }
  onSubmit() {
    this.store.dispatch(AuthActions.resetPassword({
      email: this.email!,
      password: this.resetPasswordForm.get('password')?.value
    }));
  }
}
