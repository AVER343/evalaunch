'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const openEmailClient = () => {
    window.location.href = 'mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services.';
  };

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "eVALaunche",
    "description": "Leading software development company specializing in AI/ML solutions, custom web applications, mobile apps, and digital marketing strategies.",
    "url": process.env.NEXT_PUBLIC_APP_URL || "https://evalaunche.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_APP_URL || "https://evalaunche.com"}/logo.png`,
      "width": 200,
      "height": 200
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "support@evalaunche.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "San Francisco",
      "addressRegion": "CA"
    },
    "foundingDate": "2014",
    "numberOfEmployees": "10-50",
    "knowsAbout": [
      "Software Development",
      "Web Development", 
      "Mobile App Development",
      "AI/ML Solutions",
      "Machine Learning",
      "Artificial Intelligence",
      "Digital Marketing",
      "SEO Optimization",
      "Cloud Solutions",
      "Data Analytics",
      "Business Automation",
      "Technology Consulting"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Software Development",
        "description": "Custom web applications, mobile apps, and enterprise software solutions",
        "provider": {
          "@type": "Organization",
          "name": "eVALaunche"
        }
      },
      {
        "@type": "Service", 
        "name": "AI/ML Solutions",
        "description": "Machine learning models, predictive analytics, and artificial intelligence solutions",
        "provider": {
          "@type": "Organization",
          "name": "eVALaunche"
        }
      },
      {
        "@type": "Service",
        "name": "Digital Marketing", 
        "description": "SEO optimization, social media marketing, and data-driven marketing campaigns",
        "provider": {
          "@type": "Organization",
          "name": "eVALaunche"
        }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/evalaunche",
      "https://twitter.com/evalaunche",
      "https://github.com/evalaunche"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className="min-h-screen">
        <Header onStartProject={openEmailClient} />
        <Hero onStartProject={openEmailClient} />
        <Services />
        <About onStartProject={openEmailClient} />
        <Portfolio onStartProject={openEmailClient} />
        <Contact onStartProject={openEmailClient} />
        <Footer />
      </main>
    </>
  );
}
