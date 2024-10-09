import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroExclamationCircle, heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

import { ButtonModule } from '@directives/button/button.module';
import { FormFieldModule } from '@forms/form-field/form-field.module';

import { AuthService } from '../auth.service';
import { UserLoginResponse } from '../auth.models';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ButtonModule, FormFieldModule, ReactiveFormsModule, NgIconComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [provideIcons({ heroEye, heroEyeSlash, heroExclamationCircle })],
})
export class SignInComponent implements OnDestroy {
  signInForm: FormGroup;
  viewPassword = signal<boolean>(false);
  invalidLogin = signal<string | null>(null);

  private _formBuilder: FormBuilder = inject(FormBuilder);
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);

  private _destroy$ = new Subject<void>();
  constructor() {
    this.signInForm = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.signInForm.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => this.invalidLogin.set(null));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  onPasswordViewToggle(passwordInput: HTMLInputElement): void {
    this.viewPassword.update((shouldView) => !shouldView);
    if (this.viewPassword()) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  onLogIn(): void {
    this._authService.requestAuthToken(this.signInForm.value).subscribe({
      next: this.handleSuccessResponse.bind(this),
      error: this.handleErrorResponse.bind(this),
    });
  }

  private handleErrorResponse(error: HttpErrorResponse): void {
    this.invalidLogin.set(error.error);
  }

  private handleSuccessResponse(response: UserLoginResponse): void {
    this.invalidLogin.set(null);
    this._authService.saveToken(response.token);
    this._router.navigate(['./user-profile']);
  }
}
