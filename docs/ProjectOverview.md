# Project Overview

## eVaLaunche Consultancy Website

### Project Summary
eVaLaunche is a modern, production-ready consultancy website built with Next.js 14 (App Router) showcasing software development, AI/ML solutions, and digital marketing services. The website is designed as a static site for optimal performance, SEO, and deployment on Vercel.

### Tech Stack

#### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Animations**: Framer Motion
- **Font Optimization**: Next.js Font (Inter from Google Fonts)

#### Backend & Data
- **API Routes**: Next.js API routes for form submissions and chatbot
- **Data Source**: Local JSON files in `/data` directory (easily swappable with CMS/API)
- **Data Utilities**: Custom data-fetching functions in `/lib/data.ts`

#### Analytics & SEO
- **Analytics**: 
  - Google Analytics 4 via `@next/third-parties/google`
  - Vercel Analytics
- **SEO**:
  - Next.js Metadata API for all pages
  - Dynamic sitemap generation
  - robots.txt configuration
  - Open Graph and Twitter Card metadata
  - Structured data (JSON-LD) for organization info

#### Email & Communication
- **Email Service**: Resend API
- **Contact Forms**: Project details form, general contact
- **AI Chatbot**: Google Gemini AI integration
- **Security**: reCAPTCHA v3 for form protection

#### Deployment
- **Platform**: Vercel (optimized for Next.js)
- **Domain**: evalaunche.com
- **Build**: Static Site Generation (SSG) where possible
- **CI/CD**: Automated via Vercel GitHub integration

### Template Base
Built upon a digital agency template pattern with customizations for:
- Software consultancy focus
- AI/ML service showcase
- Case studies portfolio
- Blog/insights section
- Career opportunities

### Project Structure
```
evaLaunch/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes (email, chatbot)
│   │   ├── blog/              # Blog listing and posts
│   │   ├── case-studies/      # Portfolio case studies
│   │   ├── careers/           # Job listings
│   │   ├── documentation/     # API documentation
│   │   ├── legal/             # Legal pages (privacy, terms, etc.)
│   │   ├── services/          # Services detail page
│   │   ├── support/           # Support/help page
│   │   ├── layout.tsx         # Root layout with Header
│   │   ├── page.tsx           # Homepage
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   ├── robots.ts          # robots.txt generation
│   │   └── manifest.ts        # PWA manifest
│   ├── components/            # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ProjectDetailsForm.tsx
│   │   └── Services.tsx
│   └── types/                 # TypeScript type definitions
├── data/                      # Mock JSON data
│   ├── services.json
│   ├── case-studies.json
│   ├── blog-posts.json
│   ├── testimonials.json
│   └── team.json
├── lib/                       # Utility functions
│   └── data.ts               # Data fetching utilities
├── docs/                      # Project documentation
└── public/                    # Static assets (images, etc.)
```

### Key Features
1. **Homepage**: Hero, services overview, about, portfolio, contact
2. **Services Page**: Detailed service descriptions with tabbed interface
3. **About Page**: Company info, values, team, testimonials
4. **Case Studies**: Portfolio of completed projects with results
5. **Blog**: Insights and articles (currently using mock data)
6. **Careers**: Job listings and application flow
7. **Contact Forms**: Multiple entry points for client communication
8. **AI Chatbot**: Intelligent assistant for visitor queries
9. **Legal Pages**: Privacy policy, terms, GDPR, cookie policy
10. **Support & Documentation**: Help resources for clients

### Development Philosophy
- **Production-Ready**: Clean, maintainable code following Next.js best practices
- **Performance-First**: Optimized for Core Web Vitals and Lighthouse scores
- **SEO-Optimized**: Comprehensive metadata and structured data
- **Accessibility**: WCAG compliant with semantic HTML
- **Scalable**: Easy to extend with CMS or database integration
- **Type-Safe**: Full TypeScript implementation

### Version Information
- **Next.js**: 14.2.5
- **React**: 18.3.1
- **TypeScript**: 5.9.2
- **Node.js**: 20+ (recommended)

### Future Extensibility
The project is designed for easy migration to:
- Headless CMS (Contentful, Sanity, Strapi)
- Database backend (PostgreSQL, MongoDB)
- Authentication system (NextAuth.js)
- Payment integration (Stripe)
- Advanced analytics and A/B testing

