# Masterwork - Furry & Anime Art Commission Platform

A Next.js application for connecting furry and anime artists with clients for character commissions.

## Features

- **User Roles & Authentication**: Separate flows for Artists and Clients
- **Artist Features**: Profile management, portfolio gallery, commission offerings
- **Client Features**: Artist discovery, commission requests, tracking
- **Core Platform Features**: Commission workflow, system administration

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: PostgreSQL (Supabase or Vercel Postgres) + Prisma
- **Authentication**: NextAuth.js or Supabase Auth
- **Image Storage**: Vercel Blob or Supabase Storage
- **Email Service**: Resend or SendGrid

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pushing to GitHub

To push this repository to GitHub:

1. Create a new repository on GitHub (without initializing with README, .gitignore, or license)
2. Add the remote repository URL:
   ```bash
   git remote add origin https://github.com/yourusername/masterwork.git
   ```
3. Push the code to GitHub:
   ```bash
   git push -u origin master
   ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
