# SEO & Analytics

## SEO Rules, Meta Tags, and Analytics Tracking

### Overview
The eVaLaunche website implements comprehensive SEO strategies and analytics tracking to maximize visibility and measure performance.

### SEO Implementation

#### Next.js Metadata API
All pages use Next.js 14 Metadata API for consistent SEO:

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | eVaLaunche',
  description: 'Page description 150-160 characters',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'eVaLaunche Team' }],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    type: 'website',
    url: 'https://evalaunche.com/page',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: '/page',
  },
};
```

#### Root Layout Metadata
**Location**: `src/app/layout.tsx`

**Includes**:
- Default title template: `%s | eVaLaunche`
- Site-wide description
- Comprehensive keywords array
- Organization information
- Open Graph defaults
- Twitter Card defaults
- Robots meta tags
- Google Site Verification

### Page-Specific SEO

#### Homepage (/)
- **Title**: "eVaLaunche - Software Development, AI/ML Solutions & Digital Marketing"
- **Focus Keywords**: software development, AI ML, digital marketing
- **Structured Data**: Organization schema (JSON-LD)
- **Priority**: 1.0 in sitemap

#### Services (/services)
- **Title**: "Our Services | eVaLaunche"
- **Focus**: Detailed service descriptions
- **Schema**: Service schema for each offering
- **Priority**: 0.9 in sitemap

#### About (/about)
- **Title**: "About Us | eVaLaunche"
- **Focus**: Company information, team, values
- **Schema**: Organization, Team member schemas
- **Priority**: 0.8 in sitemap

#### Case Studies (/case-studies)
- **Title**: "Case Studies & Portfolio | eVaLaunche"
- **Focus**: Project showcases, results
- **Schema**: Case study as Article schema
- **Priority**: 0.8 in sitemap

#### Blog (/blog)
- **Title**: "Blog & Insights | eVaLaunche"
- **Focus**: Technical articles, industry insights
- **Schema**: BlogPosting, Article schemas
- **Priority**: 0.7 in sitemap

#### Careers (/careers)
- **Title**: "Careers - Join Our Team | eVaLaunche"
- **Focus**: Job listings, company culture
- **Schema**: JobPosting schemas
- **Priority**: 0.7 in sitemap

### Structured Data (JSON-LD)

#### Organization Schema
**Location**: `src/app/page.tsx` (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "eVaLaunche",
  "description": "Leading software development company...",
  "url": "https://evalaunche.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://evalaunche.com/logo.png"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@evalaunche.com"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Software Development",
      "description": "Custom web applications..."
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "15"
  }
}
```

#### Additional Schemas (Planned)
- **Article Schema**: For blog posts
- **JobPosting Schema**: For career listings
- **Review Schema**: For testimonials
- **Product Schema**: For service offerings
- **BreadcrumbList Schema**: For navigation

### Sitemap Generation

**File**: `src/app/sitemap.ts`

**Dynamic Sitemap**:
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://evalaunche.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // ... all routes
  ];
}
```

**Included Routes**:
- All static pages
- Homepage sections (with anchors)
- Service pages
- Case studies
- Blog posts
- Legal pages

**Accessibility**: `https://evalaunche.com/sitemap.xml`

### Robots.txt

**File**: `src/app/robots.ts`

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

**Configuration**:
- Allow all crawlers
- Block private directories
- Block API routes
- Reference sitemap

### Image Optimization for SEO

#### Alt Text Requirements
All images MUST have descriptive alt text:

```tsx
// Good
<Image
  src="/service-icon.png"
  alt="Software development service icon showing code brackets"
  width={64}
  height={64}
/>

// Bad
<Image
  src="/service-icon.png"
  alt="icon"  // Too vague
  width={64}
  height={64}
/>
```

#### Open Graph Images
- **Size**: 1200x630px (recommended)
- **Format**: JPG or PNG
- **File Size**: < 1MB
- **Location**: `/public/og-image.jpg`

#### Favicon & Icons
- **Favicon**: `/public/favicon.ico`
- **Apple Touch Icon**: `/public/apple-touch-icon.png` (180x180)
- **Manifest Icons**: Defined in `app/manifest.ts`

### SEO Checklist per Page

When creating new pages, ensure:
- [ ] Unique, descriptive title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Relevant keywords in title and description
- [ ] Canonical URL specified
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] H1 heading present (only one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] All images have alt text
- [ ] Internal links to related content
- [ ] Mobile-friendly and responsive
- [ ] Fast loading time (< 3s)
- [ ] HTTPS enabled
- [ ] Added to sitemap
- [ ] Structured data where applicable

### Analytics Implementation

#### Google Analytics 4
**Implementation**: `@next/third-parties/google`
**Location**: `src/app/layout.tsx`

```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
```

**Environment Variable**:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Vercel Analytics
**Implementation**: `@vercel/analytics`
**Location**: `src/app/layout.tsx`

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Features**:
- Real user monitoring
- Web Vitals tracking
- Automatic pageview tracking
- No configuration needed

### Event Tracking

#### Custom Events (Google Analytics)
Track important user interactions:

```typescript
// Track button clicks
const trackCTAClick = (buttonName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      button_name: buttonName,
      page_location: window.location.pathname,
    });
  }
};

// Track form submissions
const trackFormSubmit = (formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
    });
  }
};

// Track outbound links
const trackOutboundLink = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'outbound_click', {
      link_url: url,
    });
  }
};
```

#### Events to Track
1. **CTA Clicks**:
   - "Start Your Project" button
   - "Contact Us" button
   - Service "Learn More" links

2. **Form Submissions**:
   - Contact form
   - Project details form
   - Newsletter signup

3. **User Engagement**:
   - Scroll depth
   - Time on page
   - Video plays (if any)

4. **Conversions**:
   - Email clicks
   - Phone clicks
   - Download resources

### Performance Monitoring

#### Core Web Vitals
Target metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Lighthouse Targets
- **Performance**: > 90
- **SEO**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90

#### Monitoring Tools
- **Vercel Analytics**: Real user metrics
- **Google Search Console**: Search performance
- **Google Analytics**: User behavior
- **Lighthouse CI**: Automated performance testing

### Local SEO (Future)

If adding local business information:

#### Local Business Schema
```json
{
  "@type": "LocalBusiness",
  "name": "eVaLaunche",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "addressRegion": "...",
    "postalCode": "...",
    "addressCountry": "..."
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  }
}
```

#### Google My Business
- Create business profile
- Add photos and services
- Collect reviews
- Post updates regularly

### Content SEO Strategy

#### Keyword Research
Tools:
- Google Keyword Planner
- Ahrefs
- SEMrush
- Google Trends

#### Target Keywords
**Primary**:
- Software development company
- AI ML solutions
- Digital marketing services
- Custom software development
- Machine learning consulting

**Secondary**:
- Web application development
- Mobile app development
- Next.js development
- React development
- Python development
- AWS cloud services
- SEO optimization services

**Long-tail**:
- "Best software development company for startups"
- "AI ML consulting for small business"
- "Affordable digital marketing agency"

#### Content Strategy
1. **Blog Posts**: Target long-tail keywords
2. **Service Pages**: Target primary keywords
3. **Case Studies**: Use client success stories
4. **FAQs**: Answer common questions
5. **Resource Pages**: Provide value, build authority

### Technical SEO

#### Site Speed Optimization
- Next.js Image optimization
- Code splitting and lazy loading
- Font optimization
- CDN usage (Vercel Edge Network)
- Compression (gzip/brotli)

#### Mobile Optimization
- Responsive design
- Touch-friendly tap targets
- Mobile-first approach
- Fast mobile loading

#### Security
- HTTPS enforced
- Security headers configured
- Regular dependency updates

### Link Building Strategy

#### Internal Linking
- Link related pages together
- Use descriptive anchor text
- Maintain logical site structure
- Create content hubs

#### External Linking (Future)
- Guest blogging
- Industry partnerships
- Resource page link building
- Social media promotion

### SEO Maintenance

#### Regular Tasks
- **Weekly**:
  - Monitor Google Analytics
  - Check Search Console for errors
  - Review top performing pages

- **Monthly**:
  - Update content with fresh information
  - Add new blog posts
  - Review and update metadata
  - Check for broken links
  - Analyze competitor strategies

- **Quarterly**:
  - Comprehensive SEO audit
  - Update keyword strategy
  - Review and improve top pages
  - Technical SEO check
  - Backlink analysis

### SEO Tools & Resources

#### Essential Tools
- **Google Search Console**: Monitor search performance
- **Google Analytics 4**: Track user behavior
- **Screaming Frog**: Technical SEO audits
- **Ahrefs/SEMrush**: Keyword research, backlinks
- **PageSpeed Insights**: Performance testing
- **Schema Markup Validator**: Test structured data

#### Learning Resources
- Google Search Central documentation
- Moz SEO Learning Center
- Ahrefs Blog
- Search Engine Journal
- Next.js SEO documentation

