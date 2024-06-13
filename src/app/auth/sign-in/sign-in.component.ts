import { Component } from '@angular/core';

import { EntryLayoutComponent } from '../../shared/layout/entry-layout/entry-layout.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [EntryLayoutComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
