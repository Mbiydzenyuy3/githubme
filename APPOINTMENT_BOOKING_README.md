# Appointment Booking API

A full-stack appointment booking system with frontend and backend applications for managing appointments.

## Problem Statement

**Who has the problem?**
Service-based businesses (salons, clinics, consultants) and their customers who need an efficient way to schedule appointments online.

**Why it matters?**
Manual appointment scheduling is time-consuming, prone to errors, and limits business hours. Customers often struggle to find available slots, leading to lost opportunities.

**Why this solution exists?**
This appointment booking system provides:

- 24/7 online booking capability
- Real-time availability checking
- Automated confirmation emails
- Calendar integration
- Administrative dashboard for managing appointments

## Tech Stack

| Category | Technology              |
| -------- | ----------------------- |
| Frontend | React, Vite, TypeScript |
| Backend  | Node.js, Express        |
| Database | MongoDB                 |
| API      | RESTful                 |
| Tools    | ESLint, Postman         |

## Technical Architecture

### Frontend Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── services/      # API service calls
│   ├── store/         # State management
│   └── styles/        # CSS/styling
├── index.html
└── vite.config.ts
```

### Backend Structure

```
backend/
├── src/
│   ├── controllers/   # Request handlers
│   ├── models/        # Database models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   └── config/       # Configuration
└── package.json
```

### Database Schema

- Users (customers and administrators)
- Appointments (scheduling data)
- Services (available booking types)
- Time slots (availability)

### API Communication

- RESTful endpoints
- JSON responses
- JWT authentication
- Error handling middleware

## Features

### Authentication & Security

- JWT-based authentication
- Password hashing
- Protected routes
- Role-based access control

### Input Validation

- Server-side validation
- Email format validation
- Date/time validation
- Required field checking

### Error Handling

- Custom error classes
- Global error middleware
- Consistent error responses
- User-friendly error messages

### Responsive Design

- Mobile-first design
- Responsive layouts
- Touch-friendly interfaces
- Optimized for all screen sizes

### Role Management

- Customer role: book appointments, view history
- Admin role: manage appointments, configure services

## Challenges Faced

### Frontend Challenge: Managing Booking State

Handling the complex state of booking slots, selected services, and customer information required a robust state management solution. Resolved by implementing a clean state architecture.

```typescript
// Solution: Organized booking state
interface BookingState {
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTimeSlot: TimeSlot | null;
  customerInfo: CustomerInfo | null;
}
```

### Backend Challenge: Handling Concurrent Bookings

Preventing double-booking when multiple users try to book the same time slot simultaneously required implementing optimistic locking.

### Debugging Experience: API Response Timeouts

Initial API responses were slow due to inefficient database queries. Resolved by adding proper indexing and query optimization.

## What I Learned

### Technical Lesson

Implementing real-time availability checking requires careful database design and query optimization. Indexing on date and time fields significantly improved performance.

### Workflow Lesson

Maintaining separate frontend and backend documentation helped team collaboration. Using Postman collections for API testing improved development velocity.

### Code Organization Lesson

Separating concerns between controllers, routes, and models improved code maintainability. Each file has a single responsibility.

## Future Improvements

- [ ] Add calendar integration (Google Calendar, Outlook)
- [ ] Implement email notifications
- [ ] Add SMS reminders
- [ ] Implement payment processing
- [ ] Add appointment reminders
- [ ] Implement multi-language support
- [ ] Add analytics dashboard

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/Mbiydzenyuy3/Appointment-Booking-API.git
cd Appointment-Booking-API

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Configure environment variables
cp .env.example .env
```

### Running the Application

```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

### API Endpoints

- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get all appointments
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment
- `GET /api/slots/available` - Get available time slots

## License

MIT License
