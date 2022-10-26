import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public getItemFromLocalStorage(key: string): string {
    return JSON.parse(localStorage.getItem(key));
  }

  public setItemToLocalStorage(key: string, data: string): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
