import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  getToken(): string {
    return window.localStorage['_token'];
  }

  saveToken(token: string) {
    window.localStorage['_token'] = token;
  }

  destoryToken() {
    window.localStorage.removeItem('_token');
  }
}

