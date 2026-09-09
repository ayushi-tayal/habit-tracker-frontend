import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HabitApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/habit';
  
  getHabit() {
    return this.http.get<any>(`${this.baseUrl}`)
  }
  getHabitCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories`)
  }
  saveHabit(data: { userId: string, habitIds: string[], status: string }) {
    return this.http.post<any>(`${this.baseUrl}/add_user_habit`, data);
  }
  getUserHabits(userId: string) {
    return this.http.get<any>(`${this.baseUrl}/user_habits/${userId}`);
  }
}
