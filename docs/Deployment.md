# Deployment

## Vercel Deployment, Environment Variables, and Build Pipeline

### Overview
The eVALaunche website is optimized for deployment on Vercel, leveraging Next.js features for optimal performance and automatic deployments.

### Vercel Deployment

#### Why Vercel?
- **Next.js Native**: Built by the creators of Next.js
- **Zero Configuration**: Automatic optimization
- **Global CDN**: Edge network for fast delivery
- **Automatic HTTPS**: SSL certificates included
- **Preview Deployments**: Every PR gets a preview URL
- **Analytics**: Built-in performance monitoring
- **Serverless Functions**: For API routes

#### Prerequisites
- GitHub account with repository
- Vercel account (free tier available)
- Domain name (optional, Vercel provides subdomain)

### Initial Deployment Setup

#### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import GitHub repository
4. Select `evaLaunch` repository

#### Step 2: Configure Project
```
Framework Preset: Next.js
Root Directory: ./
Build Command: next build
Output Directory: .next
Install Command: npm install
```

#### Step 3: Environment Variables
Add all variables from `env.template`:

| Variable Name | Description | Required |
|---------------|-------------|----------|
| `NEXT_PUBLIC_APP_URL` | Production URL | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | Yes |
| `GOOGLE_SITE_VERIFICATION` | Search Console verification | No |
| `RESEND_API_KEY` | Email API key | Yes |
| `CONTACT_EMAIL` | Contact form recipient | Yes |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA public key | Recommended |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key | Recommended |
| `GEMINI_API_KEY` | AI chatbot API key | Yes |

#### Step 4: Deploy
Click "Deploy" and wait for build to complete (2-3 minutes).

### Environment Variables Management

#### Development (.env.local)
```bash
# Create local environment file
cp env.template .env.local

# Edit with your development keys
nano .env.local
```

**Never commit `.env.local`** - it's in `.gitignore`

#### Production (Vercel Dashboard)
1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`
   - Environment: Production, Preview, Development
3. Click "Save"

#### Environment-Specific Variables
```
Production: Live site environment variables
Preview: PR preview environment variables
Development: Local development variables
```

#### Accessing Environment Variables

##### Client-Side (Public)
Prefix with `NEXT_PUBLIC_`:
```typescript
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const gaId = process.env.NEXT_PUBLIC_GA_ID;
```

##### Server-Side (Secret)
No prefix needed:
```typescript
const apiKey = process.env.RESEND_API_KEY;
const secretKey = process.env.RECAPTCHA_SECRET_KEY;
```

### Build Configuration

#### next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as standalone for optimal deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.evalaunche.com',
      },
    ],
  },
  
  // Redirects for old URLs
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

#### vercel.json
```json
{
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 10
    }
  }
}
```

### Build Process

#### Local Build
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build locally
npm run start

# Open http://localhost:3000
```

#### Build Output
```
Route (app)                              Size     First Load JS
┌ ○ /                                    142 B          87.4 kB
├ ○ /about                               142 B          87.4 kB
├ ○ /services                            142 B          87.4 kB
├ ○ /careers                             142 B          87.4 kB
├ ○ /case-studies                        142 B          87.4 kB
└ ○ /case-studies/[id]                   142 B          87.4 kB

○ (Static)  automatically rendered as static HTML
```

#### Build Optimizations
- Automatic code splitting
- Image optimization
- Font optimization
- CSS purging (Tailwind)
- Tree shaking
- Minification

### Deployment Workflow

#### Automatic Deployments

##### Production Deployment
```bash
# Push to main branch
git add .
git commit -m "Update feature"
git push origin main

# Vercel automatically deploys to production
# URL: https://evalaunche.com
```

##### Preview Deployments
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and push
git push origin feature/new-feature

# Create Pull Request on GitHub
# Vercel automatically creates preview deployment
# URL: https://evalaunche-git-feature-new-feature.vercel.app
```

#### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Deployment Checklist

Before deploying to production:
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test locally with `npm run start`
- [ ] Environment variables configured in Vercel
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active
- [ ] Google Analytics configured
- [ ] Email service configured
- [ ] reCAPTCHA keys added
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] 404 page works
- [ ] API routes tested
- [ ] Forms submission working
- [ ] Images loading correctly
- [ ] Mobile responsive check
- [ ] Performance audit (Lighthouse)
- [ ] SEO metadata verified

### Custom Domain Setup

#### Add Domain to Vercel
1. Go to Project Settings → Domains
2. Add domain: `evalaunche.com`
3. Add `www.evalaunche.com` (optional)
4. Configure DNS records:

##### DNS Configuration
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

#### SSL Certificate
Vercel automatically provisions SSL certificate (Let's Encrypt).

#### Domain Redirect
```javascript
// next.config.mjs
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.evalaunche.com' }],
      destination: 'https://evalaunche.com/:path*',
      permanent: true,
    },
  ];
}
```

### Monitoring & Analytics

#### Vercel Analytics
Automatically enabled:
- Real user metrics
- Page views
- Core Web Vitals
- Audience insights

#### Deployment Status
View in Vercel Dashboard:
- Build logs
- Function logs
- Error tracking
- Performance metrics

#### Alerts
Configure alerts for:
- Failed deployments
- Performance degradation
- Error rate spikes
- Budget limits

### Rollback Strategy

#### Quick Rollback
1. Go to Deployments page
2. Find previous successful deployment
3. Click "..." → "Promote to Production"
4. Instant rollback (no rebuild)

#### Git Rollback
```bash
# Revert last commit
git revert HEAD
git push origin main

# Vercel auto-deploys reverted version
```

### Performance Optimization

#### Edge Functions
API routes are deployed as Edge Functions:
- Global distribution
- Low latency
- Automatic scaling

#### Caching Strategy
Vercel automatically caches:
```
Static assets: 1 year
API responses: Based on headers
Pages: Based on ISR config
```

#### ISR (Incremental Static Regeneration)
```typescript
// Revalidate page every hour
export const revalidate = 3600;

export default async function Page() {
  const data = await fetch('...');
  return <div>{/* ... */}</div>;
}
```

### CI/CD Pipeline

#### Automated Checks
```yaml
# .github/workflows/ci.yml (optional)
name: CI

on:
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
```

### Backup Strategy

#### Git Repository
- Source code: GitHub
- Regular commits
- Feature branches
- Tag releases

#### Database Backups (Future)
When migrating to database:
- Automated daily backups
- Point-in-time recovery
- Backup retention policy

#### Content Backups
- JSON data files in Git
- Export CMS content regularly (when applicable)

### Troubleshooting

#### Build Failures

##### Common Issues
1. **Missing Environment Variables**
   - Check Vercel dashboard
   - Ensure all required variables are set

2. **Dependency Errors**
   - Clear node_modules: `rm -rf node_modules`
   - Reinstall: `npm install`
   - Update package-lock.json

3. **Type Errors**
   - Run `npm run build` locally
   - Fix TypeScript errors

4. **Image Optimization Errors**
   - Check image paths
   - Verify image formats
   - Configure `next.config.mjs`

##### Debug Logs
View in Vercel Dashboard:
- Build logs
- Function logs
- Runtime errors

#### Performance Issues

##### Slow Page Loads
- Check image sizes
- Verify code splitting
- Review bundle size
- Check API response times

##### High Bandwidth Usage
- Optimize images
- Enable caching
- Reduce unnecessary requests

### Deployment Scripts

#### Custom Deploy Script
```bash
#!/bin/bash
# deploy.sh

echo "🚀 Starting deployment process..."

# Run linting
echo "📋 Running linter..."
npm run lint || exit 1

# Build project
echo "🔨 Building project..."
npm run build || exit 1

# Deploy to Vercel
echo "☁️  Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
```

Usage:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Cost Management

#### Vercel Pricing Tiers
- **Hobby**: Free (personal projects)
- **Pro**: $20/month (commercial projects)
- **Enterprise**: Custom pricing

#### Usage Monitoring
Monitor in Vercel Dashboard:
- Bandwidth usage
- Function invocations
- Build minutes
- Team member seats

#### Optimization Tips
- Use static generation where possible
- Optimize images
- Implement caching
- Monitor function execution time

### Security Best Practices

#### Environment Variables
- Never commit secrets
- Rotate API keys regularly
- Use different keys for dev/prod
- Restrict API key permissions

#### Headers
Configure security headers:
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      ],
    },
  ];
}
```

#### HTTPS
- Always use HTTPS
- Enable HSTS
- Redirect HTTP to HTTPS

### Post-Deployment

#### Verification
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Forms work
- [ ] Images display
- [ ] Analytics tracking
- [ ] API routes functional
- [ ] Mobile responsive
- [ ] No console errors

#### Monitoring
- Set up uptime monitoring
- Configure error tracking
- Enable performance monitoring
- Set up alerts

### Documentation Updates

Keep deployment docs updated:
- Environment variable changes
- Configuration updates
- New deployment steps
- Troubleshooting solutions

