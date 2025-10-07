'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { getCompanyInfo, getCompanyStats, getAllServices, type Service } from '@/lib/data';

export default function Home() {
  const [structuredData, setStructuredData] = useState<any>(null);

  useEffect(() => {
    const loadStructuredData = async () => {
      const [companyInfo, stats, services] = await Promise.all([
        getCompanyInfo(),
        getCompanyStats(),
        getAllServices()
      ]);

      const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": companyInfo.name,
        "description": companyInfo.description,
        "url": process.env.NEXT_PUBLIC_APP_URL || "https://evalaunche.com",
        "logo": {
          "@type": "ImageObject",
          "url": `${process.env.NEXT_PUBLIC_APP_URL || "https://evalaunche.com"}/logo.png`,
          "width": 200,
          "height": 200
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": companyInfo.email.general,
          "availableLanguage": "English"
        },
        "foundingDate": companyInfo.foundingYear,
        "numberOfEmployees": stats.teamSize,
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
        "service": services.map((service: Service) => ({
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": companyInfo.name
          }
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": stats.averageRating,
          "reviewCount": stats.happyClients.replace('+', ''),
          "bestRating": "5",
          "worstRating": "1"
        }
      };

      setStructuredData(data);
    };

    loadStructuredData();
  }, []);

  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <Hero onStartProject={goToContact} />
        <Services />
        <About onStartProject={goToContact} />
        <Contact onStartProject={goToContact} />
        <Footer />
      </main>
    </>
  );
}
