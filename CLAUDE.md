# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional landing page for Paulo Galeano, a technology consultant specializing in IT advisory services for SMEs and municipalities in Rafaela, Santa Fe, Argentina. The primary goal is conversion optimization and lead generation.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Formspree or Netlify Forms
- **SEO**: Next.js built-in optimization
- **Analytics**: Google Analytics 4
- **Hosting**: Vercel (recommended) or Netlify

## Common Development Commands

Since this is a new project, initialize with:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks (if configured)
```

## Architecture & Structure

### Expected Project Structure
```
├── app/                 # Next.js 14 App Router
│   ├── layout.tsx      # Root layout with SEO setup
│   ├── page.tsx        # Homepage (single-page landing)
│   └── globals.css     # Global Tailwind styles
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components
│   ├── sections/      # Page sections (Hero, About, Services, etc.)
│   └── forms/         # Contact form components
├── lib/               # Utility functions and configurations
├── public/            # Static assets (images, icons)
└── types/             # TypeScript type definitions
```

### Design System Configuration

**Color Scheme** (configure in tailwind.config.js):
- Primary: Blue (#2563eb)
- Secondary: Dark gray (#374151) 
- Accent: Green (#10b981)
- Background: White/Light gray (#f9fafb)

**Typography**: Inter or Poppins fonts via @next/font

### Key Page Sections (Single Landing Page)

1. **Header/Navigation** - Sticky header with logo, nav, CTA button
2. **Hero Section** - Main value proposition, dual CTAs, trust indicators
3. **About Section** - Personal introduction, 17+ years experience
4. **Why Choose Section** - 4-column benefits grid
5. **Services Section** - 4 service cards with pricing
6. **Process Section** - 4-step work process
7. **FAQ Section** - Collapsible frequently asked questions
8. **Contact Section** - Lead capture form + contact info
9. **Footer** - 3-column layout with service links

### Critical Requirements

**Performance Goals**:
- Core Web Vitals: Excellent scores
- Lighthouse: 90+ on all metrics  
- Page load: <3 seconds
- Mobile-first responsive design

**Conversion Focus**:
- Primary CTA: "Consulta Gratuita" (appears minimum 3 times)
- WhatsApp integration (floating button + contact info)
- Optimized contact form as main conversion element
- Trust signals: experience years, location, testimonials

**SEO Configuration**:
- Title: "WANN - Paulo Galeano | Asesor Tecnológico | Migración Sistemas | Rafaela"
- Description: "WANN - Asesor tecnológico especializado en migración de sistemas, automatización y seguridad. 17+ años experiencia. Consulta gratuita. Rafaela, Santa Fe."
- Schema markup: LocalBusiness, Person, Service
- Target keywords: WANN, asesor tecnológico, migración sistemas, Rafaela, Santa Fe

### Mobile Optimization Priorities

- Touch-friendly buttons (44px minimum)
- Hamburger navigation menu
- Optimized form layout for mobile
- Fast loading images (WebP format)
- One-hand navigation patterns

### Form Integration

Contact form should capture:
- Required: Nombre, Email, Teléfono
- Optional: Empresa, Tipo de proyecto (dropdown), Mensaje
- WhatsApp consent checkbox
- Integration with Formspree or Netlify Forms for submissions

### Analytics Setup

Configure Google Analytics 4 to track:
- Form submissions (primary conversion)
- CTA button clicks
- Scroll depth
- WhatsApp button interactions

## Development Notes

- Prioritize conversion rate over complex design
- Mobile-first approach (majority traffic expected from mobile)
- Form optimization is critical for success
- WhatsApp integration essential for Argentine market
- Contact form must send automatic confirmation emails
- All content is in Spanish for local Argentine audience

## Success Metrics

Target KPIs:
- Conversion rate: 3-5%
- Form submissions: 10+ per month
- Page speed: <3 seconds
- Mobile usability: 100% Google score