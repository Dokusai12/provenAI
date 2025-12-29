# ProvenAI Website

A certification service that verifies AI companies, agencies, and products are legitimate and actually use AI.

## Tech Stack

- Next.js 16 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS v4

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Resend API key and contact email
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel.

1. Push your code to a Git repository
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/        # React components
├── lib/              # Utility functions
├── types/            # TypeScript type definitions
└── public/           # Static assets
```

