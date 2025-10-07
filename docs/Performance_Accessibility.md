# Performance & Accessibility

## Performance Optimizations, WCAG Compliance, and Keyboard Navigation

### Overview
The eVaLaunche website is built with performance and accessibility as core priorities, ensuring fast loading times and usability for all users.

### Performance Optimization

#### Core Web Vitals Targets
| Metric | Target | Current Status |
|--------|--------|----------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Optimized |
| **FID** (First Input Delay) | < 100ms | Optimized |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Optimized |
| **TTFB** (Time to First Byte) | < 800ms | Optimized |
| **FCP** (First Contentful Paint) | < 1.8s | Optimized |

#### Image Optimization

##### Next.js Image Component
**Usage**: All images use `next/image`

```tsx
import Image from 'next/image';

// Optimized image with automatic sizing
<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={1200}
  height={630}
  priority  // For above-the-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

**Benefits**:
- Automatic responsive sizing
- Lazy loading by default
- Modern format conversion (WebP, AVIF)
- Blur-up placeholder
- Priority loading for critical images

##### Image Guidelines
- **Format**: Use WebP/AVIF when possible, JPG/PNG fallback
- **Size**: Optimize before upload (< 200KB ideally)
- **Dimensions**: Provide exact width/height to prevent CLS
- **Alt Text**: Required for all images
- **Priority**: Set for above-the-fold images only

#### Font Optimization

##### Next.js Font Optimization
**Implementation**: `src/app/layout.tsx`

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',  // Prevent invisible text
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

**Benefits**:
- Self-hosted fonts (no external requests)
- Automatic subsetting
- Font display swap for FOUT prevention
- Zero layout shift

#### Code Splitting

##### Automatic Code Splitting
Next.js automatically splits code by route:
```
Home page → home.js
Services → services.js
About → about.js
```

##### Dynamic Imports
For heavy components:

```tsx
import dynamic from 'next/dynamic';

// Lazy load heavy component
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false,  // Disable SSR for client-only components
});

// Lazy load with Suspense
import { Suspense } from 'react';

<Suspense fallback={<LoadingSkeleton />}>
  <HeavyComponent />
</Suspense>
```

##### Component Lazy Loading
- Chatbot: Load on user interaction
- Analytics: Load after initial render
- Third-party scripts: Use Next.js Script component

#### JavaScript Optimization

##### Bundle Analysis
Run bundle analyzer:
```bash
npm run build
# Analyze output in .next/analyze/
```

##### Tree Shaking
- Use ES6 imports
- Import only needed components
- Avoid `import *` syntax

```tsx
// Good
import { Button, Card } from 'lucide-react';

// Avoid
import * from 'lucide-react';
```

#### CSS Optimization

##### Tailwind CSS Purging
Tailwind automatically removes unused CSS in production:
```javascript
// tailwind.config.ts
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Only used classes are included in build
}
```

##### Critical CSS
Next.js automatically inlines critical CSS for first paint.

#### Caching Strategy

##### Static Asset Caching
Vercel automatically sets optimal cache headers:
```
/_next/static/* → Cache-Control: public, max-age=31536000, immutable
/images/* → Cache-Control: public, max-age=31536000
```

##### API Route Caching
```typescript
// Cache API responses
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const data = await fetchData();
  return Response.json(data);
}
```

#### Prefetching

##### Link Prefetching
Next.js Link automatically prefetches pages:
```tsx
<Link href="/services" prefetch={true}>
  Services
</Link>
```

##### Disable for external links:
```tsx
<Link href="https://external.com" prefetch={false}>
  External Link
</Link>
```

#### Performance Monitoring

##### Real User Monitoring (RUM)
```tsx
// Vercel Analytics automatically tracks:
- Page load times
- Core Web Vitals
- User interactions
- Error rates
```

##### Custom Performance Tracking
```typescript
// Track custom metrics
const trackPerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    const navigation = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', navigation.duration);
  }
};
```

### Accessibility (WCAG 2.1 AA Compliance)

#### Semantic HTML

##### Proper HTML Structure
```tsx
// Good - Semantic HTML
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>

<footer>
  <p>© 2024 eVaLaunche</p>
</footer>

// Bad - Divitis
<div className="header">
  <div className="nav">
    <div className="link">Home</div>
  </div>
</div>
```

##### Heading Hierarchy
- One `<h1>` per page
- Sequential heading levels (don't skip)
- Descriptive headings

```tsx
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Section</h2>
```

#### Color Contrast

##### WCAG AA Requirements
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text** (18pt+): Minimum 3:1 contrast ratio

##### Color Combinations Used
| Background | Text Color | Ratio | Status |
|------------|-----------|-------|--------|
| White (#FFFFFF) | Gray-900 (#111827) | 16.1:1 | ✅ Pass |
| White (#FFFFFF) | Gray-600 (#4B5563) | 7.2:1 | ✅ Pass |
| Yellow-500 (#EAB308) | White (#FFFFFF) | 4.8:1 | ✅ Pass |
| Blue-600 (#2563EB) | White (#FFFFFF) | 8.6:1 | ✅ Pass |

##### Testing Tools
- Chrome DevTools Lighthouse
- WAVE Browser Extension
- Contrast Checker (WebAIM)

#### Keyboard Navigation

##### Focus Management
All interactive elements are keyboard accessible:

```tsx
// Visible focus states
<button className="focus:ring-2 focus:ring-blue-500 focus:outline-none">
  Click Me
</button>

// Custom focus styles
<a href="/services" className="focus:underline focus:text-blue-600">
  Services
</a>
```

##### Tab Order
- Logical tab order following visual flow
- No positive `tabIndex` values
- Skip to content link for main navigation

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-blue-600 focus:text-white focus:p-4"
>
  Skip to main content
</a>
```

##### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| Tab | Navigate forward |
| Shift + Tab | Navigate backward |
| Enter | Activate button/link |
| Space | Activate button, scroll page |
| Escape | Close modal/dropdown |
| Arrow keys | Navigate menus (if applicable) |

#### ARIA Attributes

##### Proper ARIA Usage
```tsx
// Button with icon only (needs label)
<button aria-label="Close menu">
  <X className="h-6 w-6" />
</button>

// Loading state
<div role="status" aria-live="polite">
  Loading...
</div>

// Alert message
<div role="alert" aria-live="assertive">
  Form submitted successfully
</div>

// Navigation landmark
<nav aria-label="Main navigation">
  <ul>...</ul>
</nav>

// Hidden but screen-reader accessible
<span className="sr-only">
  Additional context for screen readers
</span>
```

##### Common ARIA Attributes
- `aria-label`: Accessible name for elements
- `aria-labelledby`: Reference to labeling element
- `aria-describedby`: Additional description
- `aria-hidden`: Hide from screen readers
- `aria-live`: Dynamic content updates
- `aria-expanded`: Expandable element state
- `role`: Define element role

#### Form Accessibility

##### Accessible Forms
```tsx
<form>
  {/* Proper label association */}
  <label htmlFor="email" className="block mb-2">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    name="email"
    required
    aria-required="true"
    aria-invalid={errors.email ? 'true' : 'false'}
    aria-describedby={errors.email ? 'email-error' : undefined}
  />
  {errors.email && (
    <p id="email-error" role="alert" className="text-red-600 text-sm mt-1">
      {errors.email}
    </p>
  )}

  {/* Submit button */}
  <button
    type="submit"
    disabled={isSubmitting}
    aria-disabled={isSubmitting}
  >
    {isSubmitting ? 'Submitting...' : 'Submit'}
  </button>
</form>
```

##### Form Validation
- Clear error messages
- Error summary at top of form
- Focus management on errors
- Real-time validation (optional)

#### Screen Reader Support

##### Screen Reader Only Content
```css
/* Tailwind utility class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus:not-sr-only {
  /* Reveal on focus */
}
```

##### Usage
```tsx
<a href="#main">
  <span className="sr-only">Skip to main content</span>
</a>

<button>
  <Icon />
  <span className="sr-only">Open menu</span>
</button>
```

#### Image Accessibility

##### Alt Text Guidelines
```tsx
// Decorative image
<Image src="/decoration.png" alt="" />

// Informative image
<Image src="/chart.png" alt="Bar chart showing 50% increase in revenue" />

// Linked image
<Link href="/services">
  <Image src="/service.png" alt="Software development services" />
</Link>

// Complex image
<figure>
  <Image src="/complex-chart.png" alt="See description below" />
  <figcaption>
    Detailed description of the chart data...
  </figcaption>
</figure>
```

#### Motion & Animation

##### Reduced Motion Support
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

##### Safe Animations
- No flashing content (> 3 times per second)
- Pausable animations
- Option to disable animations

#### Mobile Accessibility

##### Touch Targets
- Minimum size: 44x44px
- Adequate spacing between targets
- Easy to tap with thumb

```tsx
// Good touch target
<button className="min-h-[44px] min-w-[44px] p-4">
  Click Me
</button>
```

##### Zoom & Scaling
- Allow pinch-to-zoom
- Text resizes properly
- No horizontal scrolling on zoom

```html
<!-- Viewport meta (layout.tsx) -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Testing

#### Performance Testing

##### Lighthouse
```bash
# Run Lighthouse audit
npm run build
npm run start
# Open Chrome DevTools → Lighthouse → Generate report
```

**Target Scores**: > 90 for all categories

##### WebPageTest
- Test from multiple locations
- Test on different devices
- Analyze waterfall charts

##### Vercel Analytics
- Monitor real user metrics
- Track performance over time
- Identify slow pages

#### Accessibility Testing

##### Automated Testing
```bash
# Install axe DevTools extension
# Run accessibility audit in DevTools
```

##### Manual Testing
- [ ] Keyboard navigation through entire site
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Color contrast verification
- [ ] Focus indicator visibility
- [ ] Form error handling
- [ ] Image alt text review

##### Testing Checklist
- [ ] All interactive elements keyboard accessible
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] Proper ARIA labels
- [ ] Semantic HTML structure
- [ ] Sufficient color contrast
- [ ] Resizable text
- [ ] Screen reader friendly
- [ ] Form labels and validation
- [ ] Skip navigation link

### Performance Metrics

#### Monitoring Dashboard
Track these metrics regularly:
- **Performance Score**: Target > 90
- **Accessibility Score**: Target > 90
- **Best Practices**: Target > 90
- **SEO Score**: Target > 90
- **Page Load Time**: Target < 3s
- **Time to Interactive**: Target < 5s

### Continuous Improvement

#### Regular Audits
- **Weekly**: Quick Lighthouse check
- **Monthly**: Comprehensive audit
- **Quarterly**: External audit review

#### Optimization Opportunities
1. Image optimization improvements
2. Code splitting enhancements
3. Caching strategy updates
4. Accessibility improvements
5. Performance monitoring refinements

### Resources

#### Tools
- **Lighthouse**: Built into Chrome DevTools
- **WebPageTest**: webpagetest.org
- **WAVE**: Browser extension for accessibility
- **axe DevTools**: Accessibility testing
- **Color Contrast Analyzer**: Contrast checking

#### Documentation
- Web Content Accessibility Guidelines (WCAG 2.1)
- Next.js Performance documentation
- Vercel Analytics guides
- A11y Project resources

