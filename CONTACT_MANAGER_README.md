# Contact Manager

A React-based contact management application for organizing and managing personal or business contacts.

## Problem Statement

**Who has the problem?**
Individuals and small business owners who need to organize and quickly access their contacts, but find spreadsheet or paper-based systems inefficient.

**Why it matters?**
Poor contact organization leads to missed opportunities, duplicated efforts, and unprofessional client management. Modern professionals need quick access to contact information.

**Why this solution exists?**
Contact Manager provides:

- Quick contact lookup and search
- Categorization and tagging
- Easy CRUD operations
- Professional interface
- Fast performance

## Tech Stack

| Category         | Technology    |
| ---------------- | ------------- |
| Frontend         | React 18      |
| Build Tool       | Vite          |
| Language         | JavaScript    |
| State Management | React Context |
| Styling          | CSS           |
| Deployment       | Vercel        |

## Technical Architecture

### Frontend Structure

```
src/
├── components/         # Reusable UI components
│   ├── ContactForm/   # Add/Edit contact form
│   ├── ContactList/   # Contact list display
│   └── SearchBar/    # Search functionality
├── pages/             # Page components
├── services/          # API calls
├── store/            # State management
├── styles/           # CSS files
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

### State Management

- React Context for global state
- Local component state for forms
- Optimistic updates for better UX

### API Communication

- RESTful API integration
- Async/await for data fetching
- Error handling for failed requests

## Features

### Authentication & Security

- Secure API endpoints
- Input sanitization
- Protected routes

### Input Validation

- Form validation
- Required field checking
- Email format validation
- Phone number validation

### Error Handling

- Try/catch blocks
- User-friendly error messages
- Loading states
- Empty state handling

### Responsive Design

- Mobile-responsive layout
- Flexible grid system
- Touch-friendly interactions
- Adaptive components

### CRUD Operations

- Create new contacts
- Read/view contact details
- Update contact information
- Delete contacts

## Challenges Faced

### Frontend Challenge: Implementing Search Functionality

Building a performant search that filters contacts in real-time while maintaining responsiveness required careful state management.

```javascript
// Solution: Efficient filtering
const filteredContacts = contacts.filter(
  (contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### State Management Challenge: Sharing Data Between Components

Passing contact data between multiple components required implementing React Context API to avoid prop drilling.

### Debugging Experience: Resolving CORS Issues

API requests were failing due to CORS configuration. Resolved by properly configuring the backend CORS settings.

## What I Learned

### Technical Lesson

React's component-based architecture makes code highly reusable. Using Context API for state management eliminates the need for prop drilling in medium-sized applications.

### Workflow Lesson

Breaking down the application into smaller components made development more manageable. Each component has a single responsibility.

### Code Organization Lesson

Grouping related files (components, services, styles) improves maintainability. Clear folder structure helps new developers understand the codebase quickly.

## Future Improvements

- [ ] Add contact categories/tags
- [ ] Implement import/export functionality
- [ ] Add contact profile pictures
- [ ] Implement search filters
- [ ] Add bulk operations
- [ ] Add contact grouping
- [ ] Implement dark mode

## Getting Started

### Prerequisites

- Node.js 16+

### Installation

```bash
# Clone the repository
git clone https://github.com/Mbiydzenyuy3/contact-manager.git
cd contact-manager

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Create production build
npm run build
```

## License

MIT License
