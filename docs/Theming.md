# Theming

## Design System for eVaLaunche Website (Blue Theme)

### Overview
The eVaLaunche website uses a consistent design system built with **Tailwind CSS**, maintaining clean, accessible, and professional visuals.  
The design uses a **modern blue color scheme** with **flat, enterprise-ready styling**.

---

### Color Palette

#### Primary Colors
- **Blue**: `#3b82f6`  
  Used for: Primary CTAs, links, highlights, and brand accents  
  Represents: Trust, professionalism, and innovation

#### Secondary Colors
- **Dark Blue**: `#2563eb` — hover states, section backgrounds, contrast elements  
- **Light Blue**: `#dbeafe` — subtle backgrounds and hover overlays

#### Accent Colors
- **Cyan**: `#06b6d4` — secondary buttons, info indicators, links  
- **Cyan Light**: `#22d3ee` — hover states for accent elements  
- **Cyan Dark**: `#0891b2` — pressed/active states for accent
- **Warning Yellow**: `#f59e0b` — warnings, alerts (use sparingly)
- **Error Red**: `#dc2626` — error states, alerts  
- **Gray-Green Neutral**: `#F9FAF9` — light section backgrounds

#### Neutral Colors
- Text Primary: `#111827`  
- Text Secondary: `#4B5563`  
- Borders: `#E5E7EB`  
- Backgrounds: `#FFFFFF`, `#F9FAF9`

---

### Typography

#### Font Family
- **Primary**: Inter (Google Fonts)  
- **Weights**: 300 → 700  
- **Fallback**: system-ui, -apple-system, sans-serif

#### Font Sizes & Hierarchy
- Hero Headings: `text-4xl lg:text-6xl`  
- Page Headings: `text-4xl md:text-6xl`  
- Section Headings: `text-3xl md:text-4xl`  
- Subsection: `text-2xl`  
- Body Large: `text-xl`  
- Body: `text-base`  
- Small: `text-sm`  
- Extra Small: `text-xs`

#### Line Heights
- Headings: `leading-tight`  
- Body: `leading-relaxed`  
- Small: `leading-normal`

---

### Spacing System

Base spacing scale is 4px.  
Common values: `4, 6, 8, 12, 16, 20, 24`

#### Section Padding
- Vertical: `py-16` to `py-20`  
- Horizontal: `px-4 sm:px-6 lg:px-8`

#### Component Spacing
- Card Padding: `p-6` to `p-8`  
- Button Padding: `px-6 py-3`  
- Input Padding: `px-4 py-3`

---

### Shadows & Depth

- **Small**: `shadow-md` — subtle elevation for cards  
- **Medium**: `shadow-lg` — used for buttons, CTAs  
- **Large**: `shadow-xl` — used for hero or important content  

#### Hover States
- Buttons: `hover:shadow-lg hover:-translate-y-0.5`  
- Cards: `hover:shadow-xl transition-all duration-300`

---

### Border Radius

- Buttons & Inputs: `rounded-lg`  
- Cards: `rounded-2xl`  
- Large Elements: `rounded-3xl`  
- Circles: `rounded-full`

---

### Icons

- **Library**: Lucide React  
- **Sizes**:  
  - Small: `h-4 w-4`  
  - Medium: `h-6 w-6`  
  - Large: `h-10 w-10`  

#### Icon Rules
- ✅ Use Lucide React SVGs  
- ❌ No emojis  
- ✅ Use colors consistent with section (primary or neutral)  
- ❌ No gradients or complex fills

---

### Animations

- **Transitions**: `transition-all duration-300 ease-out`  
- **Transforms**: `hover:scale-105` or slight translate  
- **Global Keyframes (globals.css)**:
  - `@keyframes fade-in`  
  - `@keyframes slide-up`  
  - `@keyframes pulse-slow`  
  - `@keyframes float`

---

### Responsive Design

#### Breakpoints
- sm: 640px  
- md: 768px  
- lg: 1024px  
- xl: 1280px  
- 2xl: 1536px

#### Mobile-First
- Base for mobile, progressive enhancement for larger screens  
- All interactive targets ≥ 44px height

---

### Navigation/Header Theming

#### Header/Navbar
- **Background**: `bg-white` with `shadow-md` or `border-b border-gray-100`
- **Logo/Brand**: Text in `text-gray-900` or custom logo image
- **Navigation Links**:
  - Default: `text-gray-600 hover:text-primary-600`
  - Active: `text-primary-600 font-semibold`
  - Transition: `transition-colors duration-300`
- **Mobile Menu**:
  - Toggle button: `text-gray-600 hover:text-primary-600`
  - Dropdown: `bg-white shadow-lg border border-gray-100`
  - Mobile links: Same as desktop with `py-3` spacing
- **CTA Button in Nav**:
  - `bg-primary-500 hover:bg-primary-700 text-white`
  - `px-6 py-2 rounded-lg`
  - `shadow-md hover:shadow-lg transition-all duration-300`
- **Sticky Behavior**:
  - `sticky top-0 z-50 bg-white/95 backdrop-blur-sm`
  - Smooth shadow on scroll

**Example**:
```tsx
<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-gray-900">
        eVaLaunche
      </Link>
      
      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/services" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
          Services
        </Link>
        {/* ... more links ... */}
      </div>
      
      {/* CTA */}
      <button className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        Get Started
      </button>
    </div>
  </nav>
</header>
```

---

### Component Theming Rules

#### Buttons
1. **Primary CTA**  
   `bg-primary-500 text-white hover:bg-primary-700 shadow-md hover:shadow-lg`  
   or use CSS variables: `background: var(--color-primary)` → `background: var(--color-primary-dark)` on hover
2. **Secondary**  
   `border border-primary-500 text-primary-500 bg-white hover:bg-primary-50`  
   or use CSS variables: `border-color: var(--color-primary)`, `color: var(--color-primary)`
3. **Text Only**  
   `text-primary-500 hover:underline`  
   or use CSS variables: `color: var(--color-primary)`

**Important**: Always prefer Tailwind's `primary-*` scale or CSS variables over hardcoded hex colors for theme consistency.

#### Cards
- `bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300`

#### Forms
- Inputs: `bg-white border border-gray-200 focus:ring-2 focus:ring-primary-500`  
  or use CSS variables: `border-color: var(--color-border)`, `focus:ring-color: var(--color-primary)`
- Labels: `text-gray-700 font-medium`  
- Errors: `border-red-500 text-red-600` or `border-color: var(--color-error)`  
- Success: `border-primary-500 text-primary-600` or `border-color: var(--color-success)`

#### Sections
- Alternate backgrounds: `bg-white`, `bg-[#F9FAF9]`  
- Maintain vertical rhythm: `py-20`  
- Centered layout: `max-w-7xl mx-auto`

---

### Accessibility

- Text contrast ≥ 4.5:1  
- Focus states: `focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`  
  or use CSS variables: `box-shadow: 0 0 0 3px var(--color-primary)`
- Non-color cues (icons, text) for state changes  
- Clear hover and focus differentiation

---

### Theme Consistency Checklist
- [ ] Uses Blue theme palette (`--color-primary` or `primary-*` classes)
- [ ] Uses gradients sparingly (primarily for CTA sections and accents)
- [ ] No hardcoded colors (use theme variables)
- [ ] Typography hierarchy consistent  
- [ ] Spacing matches scale  
- [ ] Icons from Lucide React  
- [ ] Standard transitions (300ms)  
- [ ] Responsive breakpoints applied  
- [ ] Hover/focus states visible  
- [ ] Meets accessibility standards  

---

### Tailwind Configuration Notes (`tailwind.config.ts`)

Extend Tailwind with custom theme values:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6', // Main Blue
        700: '#1d4ed8', // Dark Blue for hover
      },
      // ... full scale defined in config
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
}
```

**Color Usage Rules:**
- **ALWAYS** use `primary-*` scale or CSS variables (`var(--color-primary)`)
- **NEVER** hardcode colors like `#3b82f6`, `#2563EB`, `#FACC15` in components
- **USE** gradients sparingly for emphasis (CTAs, hero sections, accents only)
- Changing `--color-primary` in `globals.css` will update the entire theme

### CSS Variables in `globals.css`

All colors are defined as CSS variables for easy theming:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;
  --color-accent: #06b6d4;
  /* ... etc */
}
```

Use these variables in custom styles to ensure theme consistency.

---

## Theme Color Change Guide

To change the theme color globally across the entire website:

1. **Update `globals.css`** - Change the primary color variables:
   ```css
   :root {
     --color-primary: #3b82f6;        /* Main brand color */
     --color-primary-light: #60a5fa;  /* Light variant */
     --color-primary-dark: #2563eb;   /* Dark variant for hovers */
   }
   ```

2. **Update `tailwind.config.ts`** - Modify the primary color scale:
   ```js
   colors: {
     primary: {
       500: '#3b82f6',  // Main color
       700: '#1d4ed8',  // Hover state
       // ... update other shades as needed
     }
   }
   ```

3. **Update `.cursorrules`** - Keep the color variables in sync with globals.css

4. **Optional: Update `manifest.ts`** - Change the PWA theme color to match

**All components will automatically reflect the new theme color** because they use:
- Tailwind classes (`bg-primary-500`, `text-primary-600`, etc.)
- CSS variables (`var(--color-primary)`)
- No hardcoded hex colors in components

This ensures complete theme consistency and easy customization.  
