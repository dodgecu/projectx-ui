import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroEyeSlash } from '@ng-icons/heroicons/outline';

import { ButtonModule } from '@directives/button/button.module';
import { FormFieldModule } from '@forms/form-field/form-field.module';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ButtonModule, FormFieldModule, ReactiveFormsModule, NgIconComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [provideIcons({ heroEye, heroEyeSlash })],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  viewPassword = false;

  private _formBuilder: FormBuilder = inject(FormBuilder);
  constructor() {
    this.signInForm = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onPasswordViewToggle(passwordInput: HTMLInputElement): void {
    this.viewPassword = !this.viewPassword;
    if(this.viewPassword) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
}
