# S & U MEK Engineers - Corporate Website

A modern, professional website for S & U MEK Engineers, a leading precision engineering and aerospace manufacturing company based in Hyderabad, India.

**🌐 Live Site**: [https://varunuppala.github.io/SUMEK/#](https://varunuppala.github.io/SUMEK/#)

## 🚀 About

S & U MEK Engineers specializes in precision machining, composite material manufacturing, and complete product solutions for the aerospace and defense sectors. With over 30 years of experience, we are a trusted partner to DRDO, HAL, BDL, ISRO, and other leading organizations.

## 🎯 Key Features

- **Modern Design**: Clean, professional aerospace/defense themed interface
- **Responsive Layout**: Fully responsive design that works on all devices
- **Professional Icons**: Sleek Lucide React icons throughout
- **Smooth Animations**: Subtle animations and hover effects
- **Multiple Pages**: 
  - Home - Hero banner with company overview
  - About - Company history and timeline
  - Capabilities - Technical capabilities and processes
  - Products - Product showcase
  - Expansion - Future growth plans
  - Career - Job opportunities
  - Contact - Contact form and information

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Lucide React** - Professional icon library
- **CSS3** - Modern styling with CSS variables

## 🎨 Design System

### Color Palette
- **Navy Blue**: `#132f4c` - Primary background
- **Navy Accent**: `#1a4971` - Secondary elements
- **Accent Blue**: `#5b9bd5` - Interactive elements and icons
- **Metallic Silver**: `#d1dae3` - Text highlights
- **White**: `#ffffff` - Primary text on dark backgrounds

### Typography
- Primary Font: Optima, Trajan Sans, Trajan Pro
- Fallback: Roboto, Open Sans, system-ui

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs on `http://localhost:5173/SUMEK/` (or next available port)

## 📁 Project Structure

```
SUMEK/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Capabilities.jsx
│   │   ├── Products.jsx
│   │   ├── Expansion.jsx
│   │   ├── Career.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── contexts/          # React context providers
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css          # Global styles
│   └── index.css        # Theme variables and base styles
├── public/              # Static assets
└── dist/               # Production build

```

## 🔧 Key Components

- **Navbar**: Responsive navigation with scroll effects
- **HeroSection**: Full-screen banner with company tagline
- **StatsSection**: Key statistics and achievements
- **WhatWeDo**: Service categories with modals
- **StandOut**: Core capabilities showcase
- **Timeline**: Company history visualization
- **Contact Form**: Professional contact form with validation
