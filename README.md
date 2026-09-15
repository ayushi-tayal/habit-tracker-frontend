# Habit Tracker- Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

Full-stack habit tracking application frontend built with Angular, TypeScript and NgRx.

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
Login screen
<img width="1920" height="929" alt="image" src="https://github.com/user-attachments/assets/2ad7690a-da76-4f70-ac53-ea86e23ab0a3" />
Register new user screen
<img width="1920" height="1094" alt="image" src="https://github.com/user-attachments/assets/cb61e257-3649-4acf-8500-2bef27c61cca" />
Reset password screen
<img width="1920" height="929" alt="image" src="https://github.com/user-attachments/assets/964ef2df-130c-472a-a331-ba1f1306ece0" />
Edit profile
<img width="1920" height="1945" alt="image" src="https://github.com/user-attachments/assets/dcb437ee-5a84-413a-af6a-feeea6fb2d86" />

Dashboard Screen
<img width="1920" height="1507" alt="image" src="https://github.com/user-attachments/assets/93e3e6d7-dc62-472e-9510-ea9e697f2a51" />

Choose your habits to track screen
<img width="1920" height="1945" alt="image" src="https://github.com/user-attachments/assets/908f73db-976d-4ced-85bc-febe9ab20661" />
<img width="1920" height="1945" alt="image" src="https://github.com/user-attachments/assets/4793d9fe-18b1-485f-a2f7-9f7fc0157763" />





Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
