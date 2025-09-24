# Overview

This is a functional prototype for a mentorship platform focused solely on user registration. The project is a minimal viable product (MVP) developed as part of a university SCRUM mini-project. The system allows users to register as either mentors or mentees with conditional form fields and real-time validation. It serves as a demonstration prototype with mocked backend functionality, storing all data locally in the browser.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Pure HTML/CSS/JavaScript**: No frameworks or external libraries used, keeping the prototype lightweight and dependency-free
- **Multi-page structure**: Three distinct pages (index, registration, success) with clear navigation flow
- **Mobile-first responsive design**: CSS uses system fonts and flexible layouts optimized for mobile devices
- **Progressive enhancement**: Forms work without JavaScript but are enhanced with real-time validation

## Data Management
- **localStorage persistence**: User data is stored locally in the browser using the `mentorias:usuarios` key
- **UUID generation**: Each user gets a unique identifier generated client-side
- **Data structure**: Users are stored with id, name, email, password, profile type, and conditional field based on mentor/mentee selection

## Form Validation System
- **Real-time validation**: JavaScript validates fields as users type with immediate error feedback
- **Conditional fields**: Form dynamically shows different options based on whether user selects mentor or mentee role
- **Client-side only**: All validation happens in the browser with no server-side processing
- **Accessibility features**: Error messages use aria-live regions and proper form labeling

## User Experience Design
- **Three-step flow**: Landing page → Registration form → Success confirmation
- **Live preview**: Registration data is displayed in real-time as users fill out the form
- **User counter**: Dynamic display of total registered users fetched from localStorage
- **URL parameters**: Success page receives user email via query string for personalized confirmation

# External Dependencies

## Storage
- **Browser localStorage**: Primary data persistence mechanism for user registration data
- **No database**: Prototype uses browser storage only, no external database services

## Hosting Requirements
- **Static file server**: Requires simple HTTP server to serve static files (Python http.server or Node.js serve recommended)
- **No backend services**: Completely client-side application with no server-side processing requirements

## Third-party Services
- **None**: Project intentionally avoids external libraries, APIs, or services to maintain simplicity and demonstrate core web technologies