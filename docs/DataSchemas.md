# Data Schemas

## JSON Schemas, Data Utilities, and Mock API Usage

### Overview
The eVaLaunche website uses local JSON files for data storage, simulating an API for easy future migration to a CMS or database backend.

### Data Architecture

#### Location
- **Data Files**: `/data/*.json`
- **Utilities**: `/lib/data.ts`
- **Types**: Defined in `/lib/data.ts`

#### Design Philosophy
1. **Separation of Concerns**: Data separate from components
2. **Type Safety**: Full TypeScript interfaces
3. **Easy Migration**: Simple to swap JSON for API/CMS
4. **Performance**: Static data for fast builds
5. **Maintainability**: Single source of truth

### Data Schemas

#### 1. Services Schema
**File**: `data/services.json`

```typescript
interface Service {
  id: string;                    // Unique identifier
  title: string;                 // Service name
  slug: string;                  // URL-friendly identifier
  description: string;           // Full description
  shortDescription: string;      // Brief summary
  icon: string;                  // Icon name (Lucide React)
  features: Array<{
    name: string;                // Feature name
    description: string;         // Feature details
  }>;
  technologies: string[];        // Tech stack array
  pricing: {
    startingAt: string;          // Starting price
    currency: string;            // Currency code
    model: string;               // Pricing model
  };
  timeline: string;              // Estimated timeline
  stats: {
    projects: string;            // Projects completed
    clients: string;             // Client count
    satisfaction: string;        // Satisfaction rate
  };
}
```

**Example**:
```json
{
  "id": "software-development",
  "title": "Software Development",
  "slug": "software-development",
  "description": "Custom web and mobile applications...",
  "shortDescription": "Custom software solutions",
  "icon": "Code",
  "features": [
    {
      "name": "Web Applications",
      "description": "React.js, Next.js, Vue.js"
    }
  ],
  "technologies": ["React", "Node.js", "AWS"],
  "pricing": {
    "startingAt": "$5,000",
    "currency": "USD",
    "model": "project-based"
  },
  "timeline": "4-12 weeks",
  "stats": {
    "projects": "25+",
    "clients": "15+",
    "satisfaction": "95%"
  }
}
```

#### 2. Case Studies Schema
**File**: `data/case-studies.json`

```typescript
interface CaseStudy {
  id: string;                    // Unique identifier
  title: string;                 // Project title
  slug: string;                  // URL-friendly identifier
  client: string;                // Client name
  industry: string;              // Industry sector
  service: string;               // Service provided
  thumbnail: string;             // Thumbnail image path
  hero: string;                  // Hero image path
  summary: string;               // Brief summary
  challenge: string;             // Problem statement
  solution: string;              // Solution provided
  results: Array<{
    metric: string;              // Result metric name
    value: string;               // Metric value
    description: string;         // Metric description
  }>;
  technologies: string[];        // Technologies used
  timeline: string;              // Project duration
  teamSize: string;              // Team size
  testimonial: {
    quote: string;               // Client quote
    author: string;              // Author name
    role: string;                // Author role
  };
}
```

#### 3. Blog Posts Schema
**File**: `data/blog-posts.json`

```typescript
interface BlogPost {
  id: string;                    // Unique identifier
  title: string;                 // Post title
  slug: string;                  // URL-friendly identifier
  excerpt: string;               // Brief excerpt
  content: string;               // Full content (or markdown)
  author: {
    name: string;                // Author name
    role: string;                // Author role
    avatar: string;              // Author image
  };
  category: string;              // Post category
  tags: string[];                // Post tags
  publishedAt: string;           // ISO date string
  updatedAt: string;             // ISO date string
  readingTime: string;           // Estimated reading time
  featured: boolean;             // Featured post flag
  thumbnail: string;             // Thumbnail image
  seo: {
    title: string;               // SEO title
    description: string;         // SEO description
  };
}
```

#### 4. Testimonials Schema
**File**: `data/testimonials.json`

```typescript
interface Testimonial {
  id: string;                    // Unique identifier
  client: {
    name: string;                // Client name
    company: string;             // Company name
    role: string;                // Client role
    avatar: string;              // Client image
  };
  content: string;               // Testimonial text
  rating: number;                // Rating (1-5)
  service: string;               // Service received
  project: string;               // Project name
  date: string;                  // ISO date string
}
```

#### 5. Team Schema
**File**: `data/team.json`

```typescript
interface TeamMember {
  id: string;                    // Unique identifier
  name: string;                  // Member name
  role: string;                  // Job title
  avatar: string;                // Profile image
  bio: string;                   // Biography
  expertise: string[];           // Skills/expertise
  social: {
    linkedin?: string;           // LinkedIn URL
    github?: string;             // GitHub URL
    twitter?: string;            // Twitter URL
    facebook?: string;           // Facebook URL
  };
}
```

### Data Utilities (lib/data.ts)

#### API Functions

##### Services
```typescript
// Get all services
getAllServices(): Promise<Service[]>

// Get service by slug
getServiceBySlug(slug: string): Promise<Service | null>

// Get service by ID
getServiceById(id: string): Promise<Service | null>
```

##### Case Studies
```typescript
// Get all case studies
getAllCaseStudies(): Promise<CaseStudy[]>

// Get case study by slug
getCaseStudyBySlug(slug: string): Promise<CaseStudy | null>

// Get case study by ID
getCaseStudyById(id: string): Promise<CaseStudy | null>

// Get case studies by service
getCaseStudiesByService(service: string): Promise<CaseStudy[]>
```

##### Blog Posts
```typescript
// Get all blog posts (sorted by date)
getAllBlogPosts(): Promise<BlogPost[]>

// Get featured blog posts
getFeaturedBlogPosts(): Promise<BlogPost[]>

// Get blog post by slug
getBlogPostBySlug(slug: string): Promise<BlogPost | null>

// Get blog posts by category
getBlogPostsByCategory(category: string): Promise<BlogPost[]>

// Get blog posts by tag
getBlogPostsByTag(tag: string): Promise<BlogPost[]>
```

##### Testimonials
```typescript
// Get all testimonials (sorted by date)
getAllTestimonials(): Promise<Testimonial[]>

// Get testimonials by service
getTestimonialsByService(service: string): Promise<Testimonial[]>

// Get featured testimonials (5-star, limited)
getFeaturedTestimonials(limit?: number): Promise<Testimonial[]>
```

##### Team
```typescript
// Get all team members
getAllTeamMembers(): Promise<TeamMember[]>

// Get team member by ID
getTeamMemberById(id: string): Promise<TeamMember | null>
```

##### Search & Stats
```typescript
// Search across all content
searchContent(query: string): Promise<{
  services: Service[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
}>

// Get aggregate statistics
getStatistics(): Promise<{
  totalProjects: string;
  totalClients: string;
  avgSatisfaction: string;
  caseStudiesCount: number;
  testimonialsCount: number;
  yearsExperience: string;
}>
```

### Usage Examples

#### In a Page Component
```typescript
import { getAllServices } from '@/lib/data';

export default async function ServicesPage() {
  const services = await getAllServices();
  
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
```

#### In a Dynamic Route
```typescript
import { getCaseStudyById } from '@/lib/data';

export default async function CaseStudyPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const caseStudy = await getCaseStudyById(params.id);
  
  if (!caseStudy) {
    notFound();
  }
  
  return <CaseStudyDetail caseStudy={caseStudy} />;
}
```

#### Generating Static Params
```typescript
import { getAllCaseStudies } from '@/lib/data';

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  
  return caseStudies.map(study => ({
    id: study.id,
  }));
}
```

### Migration Path to CMS/Database

#### Step 1: Keep Interface Contracts
The TypeScript interfaces remain the same, only implementation changes.

#### Step 2: Update Data Functions
Replace JSON imports with API calls:

```typescript
// Before (JSON)
import servicesData from '@/data/services.json';
export async function getAllServices() {
  return servicesData.services;
}

// After (API)
export async function getAllServices() {
  const response = await fetch(`${API_URL}/services`);
  return response.json();
}

// After (CMS - e.g., Contentful)
import { client } from '@/lib/contentful';
export async function getAllServices() {
  const entries = await client.getEntries({
    content_type: 'service'
  });
  return entries.items.map(transformService);
}

// After (Database - e.g., PostgreSQL with Prisma)
import { prisma } from '@/lib/prisma';
export async function getAllServices() {
  return prisma.service.findMany();
}
```

#### Step 3: Update Components
No changes needed! Components continue using the same data functions.

### Data Validation

#### Runtime Validation (Optional)
Consider adding Zod schemas for runtime validation:

```typescript
import { z } from 'zod';

const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  // ... other fields
});

export async function getAllServices() {
  const data = await fetchServices();
  return z.array(ServiceSchema).parse(data);
}
```

### Best Practices

1. **Type Safety**: Always use TypeScript interfaces
2. **Error Handling**: Handle null/undefined cases
3. **Caching**: Use Next.js caching for data functions
4. **Validation**: Validate data structure consistency
5. **Documentation**: Keep schemas documented
6. **Versioning**: Version your data structures
7. **Migration**: Plan for CMS/database migration

### Data Update Workflow

#### Current (JSON-based)
1. Edit JSON file in `/data` directory
2. Restart dev server to see changes
3. Commit changes to Git
4. Deploy (Vercel builds with new data)

#### Future (CMS-based)
1. Update content in CMS UI
2. Webhook triggers rebuild (or ISR updates)
3. Changes go live automatically
4. No code deployment needed

### Data Management Tools

#### Recommended CMS Options
- **Contentful**: Enterprise-grade headless CMS
- **Sanity**: Developer-friendly CMS with Studio
- **Strapi**: Open-source headless CMS
- **Prismic**: Slice-based content modeling

#### Database Options
- **PostgreSQL**: Relational database (Vercel Postgres)
- **MongoDB**: NoSQL database (MongoDB Atlas)
- **Supabase**: PostgreSQL with real-time features
- **PlanetScale**: MySQL-compatible serverless database

### Performance Considerations

1. **Static Generation**: Pre-render pages at build time
2. **Incremental Static Regeneration**: Update pages periodically
3. **Client-side Caching**: Cache fetched data in React state
4. **Image Optimization**: Use Next.js Image component
5. **Code Splitting**: Lazy load large data sets

### Testing Data Functions

```typescript
import { getAllServices } from '@/lib/data';

describe('getAllServices', () => {
  it('should return an array of services', async () => {
    const services = await getAllServices();
    expect(Array.isArray(services)).toBe(true);
    expect(services.length).toBeGreaterThan(0);
  });
  
  it('should return services with required fields', async () => {
    const services = await getAllServices();
    services.forEach(service => {
      expect(service).toHaveProperty('id');
      expect(service).toHaveProperty('title');
      expect(service).toHaveProperty('slug');
    });
  });
});
```

