# NESMA Event Registration System

A modern event registration system built with Next.js 15, Prisma, and PostgreSQL, designed for WAFIOS training courses.

## Features

- **Event Registration**: Clean, responsive registration form with validation
- **Photo Release Consent**: GDPR-compliant photo permission tracking
- **Admin Dashboard**: Protected admin area to manage registrations
- **Email Notifications**: Automated confirmation emails via Resend
- **CSV Export**: Export registration data for analysis
- **Modern Stack**: Next.js 15, Prisma ORM, TypeScript, Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS with Radix UI components
- **Email**: Resend for transactional emails
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)
- PostgreSQL database (Vercel Postgres recommended)

### Environment Setup

1. **Clone and install dependencies:**
   ```bash
   pnpm install
   ```

2. **Configure environment variables:**
   Create a `.env.local` file with the following variables:
   ```env
   # Database Configuration (Vercel Postgres)
   POSTGRES_PRISMA_URL="postgresql://username:password@host:port/database?pgbouncer=true&connect_timeout=15"
   POSTGRES_URL_NON_POOLING="postgresql://username:password@host:port/database?connect_timeout=15"

   # Email Service (Resend)
   RESEND_API_KEY="re_your_resend_api_key_here"

   # Basic Auth for Admin Pages
   BASIC_AUTH_USER="admin"
   BASIC_AUTH_PASSWORD="your_secure_password_here"
   ```

3. **Set up the database:**
   ```bash
   # Generate Prisma client
   pnpm db:generate
   
   # Push schema to database
   pnpm db:push
   
   # Optional: Open Prisma Studio to view data
   pnpm db:studio
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the registration form.

## Database Schema

The application uses two main models:

- **Event**: Stores event information (name, date, location)
- **EventRegistration**: Stores user registrations with photo release consent

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:migrate` - Create and run migrations
- `pnpm db:studio` - Open Prisma Studio

## Admin Features

Access the admin dashboard at `/event-signups` (requires basic auth):

- View all registrations in a table format
- Export registration data as CSV
- Track photo release permissions
- Manage registration status

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

The build process will automatically generate the Prisma client during deployment.

## Security Features

- Server-side form processing with Zod validation
- Basic authentication for admin areas
- SQL injection prevention via Prisma ORM
- CSRF protection through Next.js

## Support

For questions or issues, contact the development team or refer to the documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
