import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { get } from 'http';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  addToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  removeToken() {
    return localStorage.removeItem(KEY);
  }

  verificaToken() {
    return !! this.getToken();
  }
}
