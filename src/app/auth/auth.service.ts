import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { LocalStorageService } from '@services/local-storage.service';

import { UserLoginRequest, UserLoginResponse } from './auth.models';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _httpClient: HttpClient = inject(HttpClient);
  private _localStorageService: LocalStorageService = inject(LocalStorageService);

  authToken = signal<string | null>(null);

  constructor() {
    const storedToken = this._localStorageService.get('Token');

    if (this._localStorageService.get('Token')) {
      this.authToken.set(storedToken);
    }
  }

  requestAuthToken(request: UserLoginRequest) {
    return this._httpClient.post<UserLoginResponse>(`${environment.apiBase}/account/login`, request);
  }

  saveToken(token: string): void {
    this._localStorageService.set('Token', token);
    this.authToken.set(token);
  }

  removeToken(): void {
    
  }
}
