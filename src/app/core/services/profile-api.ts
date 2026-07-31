import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/auth';

  getProfile() {
    return this.http.get<any>(`${this.baseUrl}/me`)
  } 
  updateProfile(data: any) {
    console.log('.....: ', data)
    return this.http.patch<any>(`${this.baseUrl}/update`, data)
  } 

}
