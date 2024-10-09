import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _localstorageService: LocalStorageService = inject(LocalStorageService);
  private _httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this._httpClient.get;
  }

  get<T>(url: string): Observable<T> {
    return this._httpClient.get<T>(url, {
      headers: this.getHttHeaders(),
    });
  }

  private getHttHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this._localstorageService.get('Token')}`,
    });
  }
}
