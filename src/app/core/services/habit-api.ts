import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HabitApi {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5000/api/habit';

  getHabit() {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  getHabitCategories() {
    return this.http.get<any>(`${this.baseUrl}/categories`);
  }

  saveUserHabit(data: { userId: string; habitIds: string[]; status: string }) {
    return this.http.post<any>(`${this.baseUrl}/add_user_habit`, data);
  }
  updateUserHabit(data: {userId: string; habitIds: string[]; status: string }) {
    return this.http.patch<any>(`${this.baseUrl}/update_user_habit`, data);
  }
  getUserHabits(userId: string) {
    return this.http.get<any>(`${this.baseUrl}/user_habits/${userId}`);
  }

  saveUserHabitLog(data: { userHabitLogs: any }) {
    return this.http.post<any>(`${this.baseUrl}/add_todays_habit_log`, data);
  }
  updateUserHabitLog(data: {userId: string, completed_habits: string[]}) {
    return this.http.patch<any>(`${this.baseUrl}/update_todays_habit_log`,data,);
  }
  getUserTodayHabitLog(userId: string) {
    return this.http.get<any>(`${this.baseUrl}/todays_habits_log/${userId}`);
  }
  getUserAllHabitLog(userId: string, start_date: string, end_date: string) {
    const params = new HttpParams()
    .set('start_date', start_date)
    .set('end_date', end_date);
    return this.http.get<any>(`${this.baseUrl}/get_all_habit_logs/${userId}`, {params});
  }
}
