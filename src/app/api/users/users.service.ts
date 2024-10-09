import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { HttpService } from '@services/http.service';

import { UserModel } from './users.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http: HttpService = inject(HttpService);

  fetchUser(username: string) {
    return this._http.get<UserModel>(`${environment.apiBase}/users/lisa`);
  }

  fetchUsers() {
    return this._http.get<UserModel[]>(`${environment.apiBase}/users`);
  }
}
