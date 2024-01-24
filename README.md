# .NET/Angular Template Project

## Overview

This repository serves as a template for building applications with a .NET backend and an Angular frontend. It provides a basic structure and example code for setting up a full-stack .NET/Angular application. As a demonstration, the project includes a simple implementation that fetches and displays weather data.

The .NET backend is set up to serve an API, while the Angular frontend is configured to communicate with this API and render the received data. This template can be used as a starting point for more complex applications requiring a robust .NET backend and a dynamic Angular frontend.

## Prerequisites

To use this template, you should have the following installed:
- .NET 6 SDK or later
- Node.js (Preferably the latest LTS version)
- Angular CLI

## Getting Started

### Setting Up the Backend

1. **Navigate to the Backend Directory**: `cd Backend`
2. **Restore NuGet Packages**: `dotnet restore`
3. **Run the Backend**: `dotnet run`

The .NET backend will start, typically listening on `http://localhost:5000`.

### Setting Up the Frontend

1. **Navigate to the Frontend Directory**: `cd Frontend`
2. **Install Dependencies**: `npm install`
3. **Run the Angular Application**: `ng serve`

The Angular application will start, usually available at `http://localhost:4200`.

## Using the Application

Once both the backend and frontend are running, navigate to `http://localhost:4200` in your web browser. The application should display weather data fetched from the .NET backend.

## Customizing the Template

- **Backend**: Add new controllers, services, and models to the .NET project as needed.
- **Frontend**: Modify Angular components, services, and modules to suit your application requirements.
