import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  // private http = Inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/auth';

 constructor(private http: HttpClient) {}

  register(payload: {
    username: string;
    email: string;
    phone: string;
    password: string;
  }) {
    return this.http.post<any>(`${this.baseUrl}/register`, payload);
  }

  login(payload: { email: string; password: string }) {
    return this.http.post<any>(`${this.baseUrl}/login`, payload);
  }

  me(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get<any>(`${this.baseUrl}/me`, { headers });
  }
}
