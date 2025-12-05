# Blessed Marketing LLC Website

A modern, high-converting marketing agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Fully responsive** design
- **Dark theme** with light blue accents
- **Form handling** with rate limiting
- **SEO optimized** with metadata

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /(components)        # Reusable components
    /ui                # UI components (Button, Card, etc.)
    Navbar.tsx         # Navigation bar
    Footer.tsx          # Footer component
  /(sections)          # Page sections
    /hero
    /trust
    /servicesOverview
    /processOverview
    /resultsPreview
    /pricingPreview
    /faq
    /ctaBand
  /api                 # API routes
    /contact           # Contact form endpoint
    /apply            # Application form endpoint
  /about              # About page
  /services           # Services page
  /process            # Process page
  /results            # Results/testimonials page
  /pricing            # Pricing page
  /contact            # Contact page
  /apply              # Application page
  layout.tsx          # Root layout
  page.tsx            # Home page
  globals.css         # Global styles

/lib
  constants.ts        # Site constants
  data.ts             # Content data
  utils.ts            # Utility functions
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#38BDF8',
    dark: '#0EA5E9',
  },
  // ... other colors
}
```

### Content

Edit `/lib/data.ts` to update:
- Services
- Process steps
- Testimonials
- Pricing tiers
- FAQs
- Values

### Forms

The contact and apply forms currently log submissions to the console. To integrate with email services or databases, edit:
- `/app/api/contact/route.ts`
- `/app/api/apply/route.ts`

## Build for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

## Notes

- Forms include client-side rate limiting (10 seconds between submissions)
- All form submissions are currently logged to the console
- Replace placeholder logos in `LogoGrid` component with actual client logos
- Update team member information in the About page

## License

© 2024 Blessed Marketing LLC. All rights reserved.

