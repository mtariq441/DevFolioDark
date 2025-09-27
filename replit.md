# Muhammad Tariq - MERN Stack Developer Portfolio

## Overview

A modern developer portfolio showcasing Muhammad Tariq's expertise as a MERN Stack Developer. This is a full-stack web application built with React on the frontend and Express.js on the backend, featuring a professional dark mode design with smooth animations and responsive layouts. The portfolio includes sections for about, skills, projects, and contact information, all designed to demonstrate technical capabilities and provide an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system including dark mode support
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Storage**: In-memory storage implementation with interface for easy database migration
- **API**: RESTful API structure with middleware for logging and error handling
- **Development**: Hot reload with Vite integration for seamless development experience

### Design System
- **Theme**: Professional dark mode with carefully crafted color palette
- **Typography**: Inter font family for clean, modern appearance
- **Components**: Consistent spacing system using Tailwind utilities
- **Animations**: Smooth hover effects and subtle entrance animations
- **Responsive**: Mobile-first design with breakpoint-specific layouts

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table with id, username, and password fields
- **Migration**: Drizzle Kit for database schema management
- **Validation**: Zod schemas for type-safe data validation

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database adapter for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect support
- **@tanstack/react-query**: Server state management and caching

### UI Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives including dialogs, tooltips, forms, and navigation components
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

### Development Tools
- **tsx**: TypeScript execution for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced debugging

### Form Handling
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library

### Additional Features
- **wouter**: Lightweight routing library
- **react-icons**: Icon library with technology-specific icons
- **date-fns**: Date manipulation utilities
- **cmdk**: Command palette component