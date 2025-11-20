# Misinformation Quiz Application

## Overview

This is a web-based quiz application designed to test users' critical thinking skills and ability to identify misinformation. The application presents 10 true/false questions about media literacy, source verification, and information evaluation. Users receive immediate feedback with educational explanations on their answers and a final score at the end of the quiz.

The application features:
- **Start Screen**: Configure quiz settings before beginning
- **Timed Mode**: Optional 60-second countdown per question
- **Immediate Feedback**: Correct/incorrect indication with educational explanations
- **Progress Tracking**: Real-time score updates and progress bar
- **Social Sharing**: Share results on X (Twitter), Facebook, and LinkedIn
- **Restart Capability**: Retake the quiz with a single click

The application is built as a single-page application with a React frontend and Express backend, using Material Design principles for a clean, utility-focused interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety
- Vite as the build tool and development server
- Client-side routing handled by Wouter (lightweight routing library)
- Component-first architecture with all components located in `client/src/`

**UI Component System:**
- shadcn/ui component library (Radix UI primitives with Tailwind CSS styling)
- "New York" style variant with neutral color base
- Material Design principles emphasizing clear interaction feedback and affordance
- Responsive design with centered layouts (max-width: 2xl for content)

**State Management:**
- React local state (useState) for quiz progression and user interactions
- TanStack Query (React Query) for server state management and data fetching
- No global state management library - component-local state is sufficient for application scope

**Styling System:**
- Tailwind CSS with custom configuration
- CSS variables for theming (light/dark mode support configured)
- Custom spacing system: primary units of p-4, p-6, p-8, gap-4, gap-6
- Typography hierarchy using Poppins (headings) and Inter (body text) from Google Fonts
- Elevation system using shadows and subtle borders for visual hierarchy

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety across the stack
- ESM module system (type: "module" in package.json)

**Development & Production:**
- Development: tsx for running TypeScript directly with hot reload
- Production: esbuild for bundling server code, Vite for client bundling
- Separate build outputs: `dist/public` for frontend, `dist/` for backend

**Request Handling:**
- JSON body parsing with raw body verification support
- Request logging middleware with performance tracking
- API routes prefixed with `/api` (currently placeholder)

### Data Storage

**Database:**
- PostgreSQL configured via Drizzle ORM
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Schema defined in `shared/schema.ts` for type sharing between client and server
- Migration system via drizzle-kit

**Current Storage Implementation:**
- In-memory storage (MemStorage class) for development
- Interface-based design (IStorage) allows easy swapping to database implementation
- User authentication schema defined but not actively used by quiz features

**Data Model:**
- Quiz questions stored as static data in `shared/schema.ts`
- QuizQuestion interface: id, question text, boolean answer, options array, and explanation
- 10 hardcoded questions about misinformation and critical thinking with educational explanations
- No persistence of user quiz results (currently client-side only)

### Key Architectural Decisions

**Monorepo Structure:**
- Shared types and schemas in `shared/` directory accessible to both client and server
- Path aliases configured: `@/` for client source, `@shared/` for shared code
- Single TypeScript configuration covering all code

**Form Validation:**
- React Hook Form with Zod resolvers for type-safe form validation
- Drizzle-Zod integration for generating Zod schemas from database schema

**Component Design:**
- Atomic design approach with reusable UI components in `client/src/components/ui/`
- Page components in `client/src/pages/` for route-level components
- Custom hooks in `client/src/hooks/` for reusable logic (mobile detection, toast notifications)

**Error Handling:**
- Runtime error overlay in development (Replit plugin)
- Custom error boundaries can be added as needed
- Query client configured with custom error handling for 401 responses

**Quiz Flow:**
- **Start Screen**: User configures quiz settings (timed mode on/off)
- **Linear Progression**: Questions advance automatically after 1.5 seconds of feedback
- **Immediate Feedback**: Visual indication (correct/incorrect) with educational explanation for each answer
- **Progress Tracking**: Real-time progress bar showing completion percentage
- **Score Calculation**: 10 points per correct answer (max 100 points)
- **Timed Mode** (Optional):
  - 60-second countdown timer per question
  - Timer resets for each new question
  - Visual warning (red) when ≤10 seconds remain
  - Auto-submits wrong answer if time expires
  - Total time taken displayed on results screen
- **Final Results**: 
  - Score display with breakdown (correct/incorrect counts)
  - Performance message based on score
  - Social sharing buttons (X/Twitter, Facebook, LinkedIn, Copy Link)
  - Restart capability to retake the quiz

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: Frontend UI library
- **Express**: Backend HTTP server
- **TypeScript**: Type safety across full stack
- **Vite**: Build tool and development server

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **drizzle-kit**: Migration and schema management tool
- **drizzle-zod**: Zod schema generation from Drizzle schemas

### UI Component Libraries
- **@radix-ui/react-***: Unstyled, accessible UI primitives (20+ components)
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe component variants
- **tailwindcss**: Utility-first CSS framework
- **cmdk**: Command palette component

### Form & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Integration between React Hook Form and validators
- **zod**: Schema validation library

### Data Fetching
- **@tanstack/react-query**: Server state management and caching

### Routing
- **wouter**: Lightweight client-side routing

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements (cartographer, dev banner, runtime error modal)
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### Utilities
- **clsx & tailwind-merge**: Conditional CSS class merging
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation

### Build & Deployment
- Build scripts separate client (Vite) and server (esbuild) bundles
- Database migrations via `npm run db:push`
- Environment variable required: `DATABASE_URL` for PostgreSQL connection