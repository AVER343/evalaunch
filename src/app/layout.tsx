import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | eVaLaunche - Leading Software Development & AI Solutions",
    default: "eVaLaunche - Software Development, AI/ML Solutions & Digital Marketing | Transform Your Business"
  },
  description: "Transform your business with cutting-edge software development, AI/ML solutions, and digital marketing strategies. Expert developers delivering custom web applications, mobile apps, machine learning solutions, and data-driven marketing campaigns. 3+ years experience, 25+ projects completed.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
  },
  keywords: [
    "software development company",
    "AI ML solutions",
    "digital marketing services", 
    "web development",
    "mobile app development",
    "machine learning consulting",
    "artificial intelligence solutions",
    "custom software solutions",
    "ecommerce development",
    "cloud solutions",
    "data analytics",
    "business automation",
    "technology consulting",
    "software engineering",
    "full stack development",
    "React development",
    "Node.js development",
    "Python development",
    "AWS cloud services",
    "SEO optimization"
  ],
  authors: [{ name: "eVaLaunche Team", url: "https://evalaunche.com" }],
  creator: "eVaLaunche",
  publisher: "eVaLaunche",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://evalaunche.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "eVaLaunche - Software Development, AI/ML Solutions & Digital Marketing",
    description: "Transform your business with cutting-edge software development, AI/ML solutions, and digital marketing strategies. Expert developers delivering custom solutions.",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://evalaunche.com',
    siteName: "eVaLaunche",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'eVaLaunche - Software Development & AI Solutions',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eVaLaunche - Software Development, AI/ML Solutions & Digital Marketing",
    description: "Transform your business with cutting-edge technology solutions. Expert developers, AI/ML specialists, and digital marketing professionals.",
    images: ['/og-image.jpg'],
    creator: '@evalaunche',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
