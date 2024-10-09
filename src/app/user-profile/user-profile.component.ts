import { Component, inject } from '@angular/core';

import { UsersService } from '@api/users/users.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  private _usersService: UsersService = inject(UsersService);

  constructor() {
    this._usersService.fetchUsers().subscribe(console.log);
  }
}
