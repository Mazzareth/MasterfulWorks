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

### Steps:

1.  **Push to Git Provider:** Make sure your code is pushed to a Git repository (GitHub, GitLab, Bitbucket) using the instructions in the "Pushing to GitHub" section above.
2.  **Import Project on Vercel:**
    *   Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    *   Click "Add New..." -> "Project".
    *   Import the Git repository you just pushed.
3.  **Configure Project:**
    *   Vercel should automatically detect that this is a Next.js project and configure the build settings correctly. You usually don't need to change anything here.
    *   Configure any necessary Environment Variables (e.g., for database connections, API keys) in the project settings on Vercel.
4.  **Deploy:** Click the "Deploy" button. Vercel will build and deploy your project. You'll get a default `.vercel.app` URL.
5.  **Add Custom Domain:**
    *   Once deployed, go to your project's "Settings" tab on Vercel.
    *   Select the "Domains" menu.
    *   Enter your custom domain name (e.g., `yourdomain.com`) and click "Add".
    *   Vercel will provide instructions on how to configure your DNS records. This usually involves adding an `A` record or a `CNAME` record to your domain registrar's DNS settings (like GoDaddy, Namecheap, Google Domains, etc.).
    *   Follow the specific instructions provided by Vercel for your domain. DNS changes can take some time to propagate (up to 48 hours, but often much faster).
6.  **Verification:** Vercel will automatically attempt to verify the domain configuration and issue an SSL certificate. Once verified, your site will be live on your custom domain.
