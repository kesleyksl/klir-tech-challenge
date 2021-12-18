import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(cartKey: string) {
    return JSON.parse(localStorage.getItem(cartKey) || '{}');
  }

  setItem(cartKey: string, value: any) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
  
}
