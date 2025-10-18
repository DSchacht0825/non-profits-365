# Non-Profit-365

A professional B2B service provider website offering Microsoft Purview security solutions to regulated industries including financial services, healthcare, legal, and non-profit organizations.

## Features

### Homepage
- Hero section with compelling value proposition
- Industry-specific sections (Financial, Healthcare, Legal, Non-Profit)
- Real-time statistics and trust indicators
- Professional Microsoft-themed design

### Solutions Showcase
- **Data Classification & Labeling** - AI-powered sensitive data discovery
- **Data Loss Prevention (DLP)** - Real-time monitoring and blocking
- **Encryption & Access Control** - End-to-end encryption and permissions
- **Insider Risk Management** - Behavioral analytics and threat detection
- **Security Monitoring & Alerts** - 24/7 monitoring and compliance reporting
- **AI Data Protection** - Protect AI-generated and AI-processed data

### Zero Trust Architecture
- Verify Explicitly
- Least Privilege Access
- Assume Breach

### Contact Form
- Industry-specific lead capture
- Backend integration for demo requests
- Email notification system ready

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Styling**: Custom CSS with Microsoft color scheme
- **API**: RESTful endpoints for contact/demo forms

## Color Scheme

Based on Microsoft's official color palette:
- Primary Blue: `#0078D4`
- Dark Blue: `#106EBE`
- Light Blue: `#50E6FF`
- Professional grays and whites

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Install backend dependencies:
```bash
cd non-profit-365
npm install
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

### Running the Application

1. Start the backend server (from root directory):
```bash
npm run server
```
Backend runs on `http://localhost:5000`

2. Start the frontend development server (from client directory):
```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:5173`

### Development

To run both servers simultaneously:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

## Project Structure

```
non-profit-365/
├── server.js              # Express backend server
├── package.json           # Backend dependencies
├── README.md             # This file
└── client/               # React frontend
    ├── src/
    │   ├── App.jsx       # Main application component
    │   └── App.css       # Microsoft-themed styles
    ├── package.json      # Frontend dependencies
    └── public/           # Static assets
```

## API Endpoints

### POST /api/contact
Submit contact form
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "industry": "financial|healthcare|legal|nonprofit|other",
  "message": "string"
}
```

### POST /api/demo
Request a demo
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "industry": "string",
  "phoneNumber": "string"
}
```

## Future Enhancements

- Add custom logo design
- Implement email notification system
- Add CMS for dynamic content management
- Create admin dashboard for lead management
- Add analytics and tracking
- Implement pricing tiers page
- Add case studies and testimonials
- Create downloadable resources section

## License

Copyright © 2025 Non-Profit-365. All rights reserved.
