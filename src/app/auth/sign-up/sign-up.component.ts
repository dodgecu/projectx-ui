import { Component } from '@angular/core';

import { EntryLayoutComponent } from '../../shared/layout/entry-layout/entry-layout.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [EntryLayoutComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
