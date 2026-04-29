import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorage {
  private key = "habit_tracker_token";

  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.key);
  }

  clearToken() {
    localStorage.removeItem(this.key);
  } 
}
