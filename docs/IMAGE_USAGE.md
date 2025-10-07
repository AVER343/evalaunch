# Image Usage Documentation

This document describes how images from the `/public` folder are being utilized throughout the eVaLaunche website.

## Hero Section (`/src/components/Hero.tsx`)

### Main Visual Elements
- **`/images/hero/mac.png`** - Central MacBook workspace image (400x300px)
- **`/images/hero/smartphone.png`** - Floating smartphone element (80x120px)
- **`/images/hero/drawing-tablet.png`** - Drawing tablet element (120x100px)
- **`/images/hero/papers.png`** - Document/papers element (100x100px)
- **`/images/hero/marker.png`** - Marker/pen element (60x80px)
- **`/images/hero/flowerpot.png`** - Plant/decoration element (70x90px)

### Purpose
These images create an engaging, workspace-themed visual on the right side of the hero section. They use floating animations at different delays to create a dynamic, professional atmosphere.

### Additional Elements Available (Not Currently Used)
- `camera.png`
- `edding.png`
- `paperclip.png`
- `pen.png`

## About Page (`/src/app/about/page.tsx`)

### Featured Images
- **`/images/about-1.jpg`** - Team collaboration/workspace image (600x400px)
  - Used in the hero section to showcase team culture
- **`/images/about-2.jpg`** - Available for additional sections

### Decorative Elements
- **`/images/circle-a.svg`** - Circular decorative shape (200x200px)
  - Used top-right of about hero section
- **`/images/circle-b.svg`** - Circular decorative shape (150x150px)
  - Used bottom-left of about hero section

## Services Section (`/src/components/Services.tsx`)

### Background Decorative Shapes
- **`/images/shape-1.png`** - Decorative background shape (300x300px)
  - Positioned top-right with 10% opacity
- **`/images/shape-2.png`** - Decorative background shape (250x250px)
  - Positioned bottom-left with 10% opacity

### Footer Icons
- **`/images/success.png`** - Success/achievement icon (60x60px)
- **`/images/medal.png`** - Excellence/award icon (60x60px)
- **`/images/smile.png`** - Customer satisfaction icon (60x60px)

These icons float with staggered animations to reinforce the service value proposition.

## Available Service Icons (`/public/icons/`)

These PNG icons are available for use in service cards or feature sections:

- **`ai.png`** - AI/Machine Learning services
- **`content-strategy.png`** - Content marketing/strategy
- **`conversation.png`** - Communication/chatbots
- **`mobile-app.png`** - Mobile development
- **`pantone.png`** - Design/branding services
- **`shopping.png`** - E-commerce solutions

### Recommended Usage
These icons can be integrated into:
1. Service detail pages
2. Feature comparison sections
3. Technology stack displays
4. Case study illustrations

## Additional Decorative Elements (Available)

### Shapes & Patterns
- `figure-shape-1.png`, `figure-shape-1-a.png`, `figure-shape-1-b.png`
- `figure-shape-2.png`
- `figure-shape-4.png`, `figure-shape-4-a.png`, `figure-shape-4-b.png`
- `shape-1-a.png`, `shape-1-b.png`
- `shape-2-a.png`, `shape-2-b.png`
- `dotted-1.png`

### Vector Graphics
- `envelope-1.svg` - Can be used for contact/email sections
- `bg3.jpg` - Background image option

### SVG Icons
- `file.svg`, `globe.svg`, `window.svg` - Generic UI elements
- `next.svg`, `vercel.svg` - Framework logos

## Best Practices

### Image Optimization
1. All images use Next.js `<Image>` component for automatic optimization
2. Hero images use `priority` prop for faster LCP
3. Decorative elements use appropriate width/height props

### Animation Classes
- `.animate-float` - Gentle floating animation for decorative elements
- `.animate-fade-in` - Smooth fade-in for content
- `.animate-slide-up` - Upward slide animation with opacity

### Responsive Considerations
1. Hero visuals are hidden on mobile (`hidden lg:block`)
2. Images use relative sizing for adaptability
3. Decorative shapes are semi-transparent to avoid overwhelming mobile views

## Adding New Images

When adding new images to `/public`:

1. **Organize by category:**
   - `/images/hero/` - Hero section elements
   - `/images/` - General site images
   - `/icons/` - Service/feature icons

2. **Naming convention:**
   - Use lowercase, hyphenated names
   - Be descriptive: `team-collaboration.jpg` not `img1.jpg`

3. **Optimization:**
   - Compress images before adding
   - Use WebP format when possible
   - SVGs for icons and simple graphics

4. **Documentation:**
   - Update this file with new image usage
   - Include dimensions and purpose
   - Note which component uses the image

## Performance Notes

- Total images loaded on homepage: ~15-20
- Hero section uses `priority` loading for above-the-fold content
- Decorative elements use lazy loading by default
- All images served through Next.js Image optimization pipeline

## Future Enhancements

Potential image integrations:
1. Team member photos in About page
2. Service-specific illustrations in Services detail pages
3. Client logos in testimonials section
4. Case study screenshots in Portfolio
5. Process diagrams using decorative shapes

