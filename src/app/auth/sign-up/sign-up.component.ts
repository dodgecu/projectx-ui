import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonModule } from '@directives/button/button.module';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
