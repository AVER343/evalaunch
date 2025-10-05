# Routing

## Page Structure and Navigation Strategy

### Overview
eVALaunche uses Next.js 14 App Router for file-system based routing with support for layouts, server components, and dynamic routes.

### Route Structure

#### Public Routes

##### Core Pages
```
/                           → Homepage (Hero, Services, About, Portfolio, Contact)
/about                      → About page (Mission, Vision, Values, Team)
/services                   → Services detail page (tabbed interface)
/careers                    → Careers page (job listings and benefits)
```

##### Content Pages
```
/blog                       → Blog listing page
/blog/[slug]                → Individual blog post (planned)
/case-studies               → Case studies listing
/case-studies/[id]          → Individual case study detail
```

##### Support & Legal
```
/support                    → Support and help center
/documentation              → API documentation and resources
/legal/privacy-policy       → Privacy policy
/legal/terms-of-service     → Terms of service
/legal/cookie-policy        → Cookie policy
/legal/gdpr                 → GDPR compliance info
```

##### Error Pages
```
/not-found                  → Custom 404 page (not-found.tsx)
```

#### API Routes
```
/api/send-email             → Contact form submission
/api/send-project-details   → Project details form submission
/api/chatbot                → AI chatbot conversation endpoint
```

### Navigation Structure

#### Primary Navigation (Header)
Located in: `src/components/Header.tsx`

**Desktop Navigation:**
- Home (scroll to top on homepage, link to / on other pages)
- Services (dropdown or link to /services)
- About (scroll on homepage or link to /about)
- Portfolio / Case Studies (link to /case-studies)
- Blog (link to /blog)
- Careers (link to /careers)
- Contact (scroll on homepage or link to /#contact)

**Mobile Navigation:**
- Hamburger menu with slide-out drawer
- Same links as desktop
- Touch-optimized spacing

#### Footer Navigation
Located in: `src/components/Footer.tsx`

**Footer Sections:**
1. **Company**
   - About Us
   - Careers
   - Contact

2. **Services**
   - Software Development
   - AI/ML Solutions
   - Digital Marketing

3. **Resources**
   - Blog
   - Case Studies
   - Documentation
   - Support

4. **Legal**
   - Privacy Policy
   - Terms of Service
   - Cookie Policy
   - GDPR

### Routing Patterns

#### Static Routes
Most pages use static generation for optimal performance:
```typescript
// Static page example
export default function AboutPage() {
  return <main>...</main>
}
```

#### Dynamic Routes
Case studies use dynamic routes with ID parameter:
```
app/case-studies/[id]/page.tsx
```

Access param:
```typescript
export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const { id } = params;
  // Fetch case study by ID
}
```

#### Catch-all Routes (Future)
For blog posts with categories:
```
app/blog/[...slug]/page.tsx  → /blog/category/post-title
```

### Navigation Behavior

#### Scroll Behavior
- **Homepage Sections**: Smooth scroll to section anchors
  ```typescript
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  ```

- **Cross-page Navigation**: Standard Next.js Link component
  ```typescript
  import Link from 'next/link';
  <Link href="/services">Services</Link>
  ```

#### Active State Detection
Current page highlight in navigation:
```typescript
const pathname = usePathname();
const isActive = pathname === '/services';
```

### URL Strategy

#### Clean URLs
- No file extensions
- Lowercase with hyphens
- Descriptive and SEO-friendly

Examples:
```
✅ /case-studies/ecommerce-platform
✅ /blog/nextjs-performance-optimization
✅ /legal/privacy-policy

❌ /case-studies.html
❌ /blog_post_1
❌ /legal/Privacy_Policy
```

#### Query Parameters
Used for:
- Service filtering: `/services?service=software-development`
- Search: `/blog?search=ai&category=machine-learning`
- Pagination: `/blog?page=2`

### Metadata Strategy

#### Page-level Metadata
Each page exports metadata for SEO:
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | eVALaunche',
  description: 'Page description...',
  openGraph: { ... },
  alternates: {
    canonical: '/page-url',
  },
};
```

#### Dynamic Metadata (for dynamic routes)
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchData(params.id);
  return {
    title: `${data.title} | eVALaunche`,
    description: data.description,
  };
}
```

### Sitemap Generation

Dynamic sitemap located at: `app/sitemap.ts`

Includes all static and dynamic routes:
```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/services`, priority: 0.9 },
    // ... all other routes
  ];
}
```

### Redirects & Rewrites

#### Next.js Config (next.config.mjs)
```javascript
// Redirects for legacy URLs
redirects: async () => [
  {
    source: '/old-path',
    destination: '/new-path',
    permanent: true,
  },
],

// Rewrites for API proxying
rewrites: async () => [
  {
    source: '/api/:path*',
    destination: '/api/:path*',
  },
],
```

### Loading States

#### Loading UI (loading.tsx)
Create loading.tsx in route folders for instant loading states:
```typescript
// app/blog/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}
```

#### Suspense Boundaries
Wrap async components:
```typescript
<Suspense fallback={<LoadingSkeleton />}>
  <AsyncComponent />
</Suspense>
```

### Error Handling

#### Error Boundaries (error.tsx)
```typescript
// app/error.tsx
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

### Route Groups (Organization)

Use route groups for organization without affecting URL:
```
app/
  (marketing)/
    page.tsx         → /
    about/page.tsx   → /about
  (legal)/
    privacy/page.tsx → /privacy
```

### Navigation Best Practices

1. **Use Next.js Link Component**
   - Client-side navigation
   - Prefetching for better performance
   
2. **Implement Loading States**
   - Immediate feedback on navigation
   - Skeleton loaders for content

3. **SEO-Friendly URLs**
   - Descriptive and readable
   - Include keywords where appropriate

4. **Consistent Navigation**
   - Same navigation structure across all pages
   - Clear active states

5. **Mobile-First Navigation**
   - Touch-friendly tap targets
   - Collapsible mobile menu
   - Swipe gestures (if applicable)

6. **Accessibility**
   - Keyboard navigation support
   - ARIA labels for navigation
   - Skip to content link

### Future Routing Enhancements

#### Planned Routes
```
/portfolio                  → Comprehensive portfolio page
/contact                    → Dedicated contact page (not just section)
/blog/category/[slug]       → Blog category pages
/services/[slug]            → Individual service detail pages
/team                       → Team members page
```

#### Internationalization (i18n)
Potential structure:
```
/en/...                     → English routes
/es/...                     → Spanish routes
/fr/...                     → French routes
```

### Routing Checklist for New Pages

When adding new pages:
- [ ] Create page.tsx in appropriate directory
- [ ] Export metadata with title, description, OG tags
- [ ] Add canonical URL
- [ ] Update sitemap.ts to include new route
- [ ] Add navigation link in Header/Footer if needed
- [ ] Create loading.tsx if page has async data
- [ ] Create error.tsx for error handling
- [ ] Test navigation from all entry points
- [ ] Verify mobile navigation works
- [ ] Check SEO metadata in browser

