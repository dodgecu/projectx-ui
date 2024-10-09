import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  set<T = string>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T = string>(key: string): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
