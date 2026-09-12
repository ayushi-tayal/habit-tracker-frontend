# Habit Tracker- Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

A modern habit tracking application built with Angular and NgRx.

## Features

- User registration and login
- JWT authentication
- Protected routes
- Persistent authentication session
- User profile management
- Habit categories
- Core habit selection
- Daily habit tracking
- Daily progress updates
- 30-day consistency calendar
- Loading states and responsive UI

## Tech Stack

- Angular
- TypeScript
- NgRx
- Angular Router
- Angular HTTP Interceptors
- Standalone Components
- SCSS

## Architecture

Component
↓
NgRx Actions
↓
Effects
↓
REST API
↓
Backend

API Response
↓
Effects
↓
Success Actions
↓
Reducers
↓
Selectors
↓
Components

## Backend

This frontend communicates with the Node.js/Express backend.

Backend repository:
[habit-tracker-backend](https://github.com/ayushi-tayal/habit-tracker-backend)

## Screenshots

<!-- Add screenshots here -->

## Getting Started

<!-- Setup instructions -->

## Environment Variables

<!-- Frontend environment configuration -->

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
