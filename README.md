# Sport Analytics Project - SportSee

## Overview
SportSee is a web application designed for tracking and analyzing sports activities. This project is using Vite as the development environment, fetching mock data or real backend data to offer insights into user performance metrics.

## Features
- **Data Fetching**: Switch between using local mock data or a live API.
- **Component-based Structure**: Utilizes React components to create a modular layout.
- **Data Visualization**: Display various performance metrics and activity statistics.
- **.env Configuration**: Flexibility to toggle between mock data and real backend data via environment variables.

## Project Structure

### Components

The @components directory contains reusable UI components that can be used throughout the project.

#### `Layout.jsx`

Defines the overall layout of the application. It includes a header and aside navigation components.

### `Router.jsx`

Configures routing for the application using React Router.

#### Routes:

1. **Login Page**
   - Path: `/`
   - Component: `<Login />`

2. **Home**
   - Path: `/user/:id/home`
   - Component: `<Home />`
   - Dynamic route based on user ID.

3. **Profil Page**
   - Path: `/user/:id/profil`
   - Component: `<Profil />`
   
4.  **Community Page**
   - Path: `/community/:id/community`
   - Component: `<Community />`

5. **Settings Page**
   - Path: `/user/:id/settings`
   - Component: `<Settings />`

6. **Sport-specific Dashboards (Placeholders)**
   - Paths include `yoga`, `natation`, `velo`, and `musculation`.
   - Components use a generic SportDashboard with sport-specific props.

7. **Error Page**
   - Catch-all route for undefined paths.
   - Component: `<Error404 />`

### Pages

The @pages directory holds different pages of the application, each corresponding to a route in the React Router setup.

### Datas
The @datas directory contains mocked data for development.

### `apiService.js`

This file contains utility functions for fetching user-related data from either a local mock API or an actual backend service.

#### Functions:

- **useFetchUser(id)**
  - Fetches and formats user data based on the given ID.
  - Uses mock data if specified by environment variables, otherwise fetches real data.
  - Returns `user`, `loading`, and `error` states.

- **useFetchActivity(id)**
  - Fetches and formats activity data for a given user ID.
  - Similar to `useFetchUser`, with mock or actual API fetching based on configuration.
  - Returns formatted activity, loading, and error states.

- **useAverageSessions(id)**
  - Fetches average session data for the user ID.
  - Returns formatted sessions, loading state, and error handling.

- **usePerformance(id)**
  - Retrieves performance metrics for a given user ID.
  - Uses helper functions to format and map data for radar charts.
  - Returns `performance`, `radarData`, loading state, and error handling.

### `dataModel.js`

This file contains various formatting functions used by the services in `apiService.js`.

#### Functions:

- **formatUserData(user)**
  - Ensures that user data has a consistent format, especially for score fields.
  - Returns formatted user object or null if invalid input.

- **formatActivityData(activity)**
  - Maps activity sessions into a structured format.
  - Returns array of formatted session objects.

- **formatAverageSessionsData(sessions)**
  - Formats average session data with day and length information.
  - Returns mapped session data as an array.

- **formatPerformanceData(performance)**
  - Standardizes performance data kinds and maps to readable formats.
  - Returns structured performance object.

- **mapPerformanceDataToRadarFormat(performance)**
  - Converts performance data for use in radar charts.
  - Maps various performance metrics into a standardized format.

## Setup Instructions

### Prerequisites
- Node.js v14.x or higher
- npm v6.x or higher

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/amandinedev/SportSee-Front-End
   cd sportsee
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Configuration**
   Create a `.env` file in the root directory of the project and add:
   ```plaintext
   VITE_USE_MOCK_DATA=true  # Set to true if you want to use mock data, false for real API calls
   ```

### Running the Application
To start the development server:
```bash
npm run dev
```
you can navigate to http://localhost:3000 in your web browser.
The application should now be running and accessible.

## Additional Notes
To get the backend and it's insllation instructions, refer to the [SportSee Backend Repository](https://github.com/OpenClassrooms-Student-Center/SportSee)

