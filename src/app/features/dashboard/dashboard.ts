import { Component } from '@angular/core';
import { Navbar } from "../../shared/navbar/navbar";
import { HabitCalendar } from "../habits/habit-calendar/habit-calendar";
import { TodayHabits } from '../habits/today-habits/today-habits';
import { Profile } from '../profile/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Navbar, HabitCalendar, TodayHabits, Profile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
