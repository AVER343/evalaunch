import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eVALaunche - Software Development, AI/ML Solutions & Digital Marketing",
  description: "Transform your business with cutting-edge software development, AI/ML solutions, and digital marketing strategies. eVALaunche delivers innovative technology solutions.",
  keywords: "software development, AI/ML solutions, digital marketing, web development, mobile apps, machine learning, artificial intelligence",
  authors: [{ name: "eVALaunche" }],
  openGraph: {
    title: "eVALaunche - Software Development, AI/ML Solutions & Digital Marketing",
    description: "Transform your business with cutting-edge software development, AI/ML solutions, and digital marketing strategies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "eVALaunche - Software Development, AI/ML Solutions & Digital Marketing",
    description: "Transform your business with cutting-edge technology solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </body>
    </html>
  );
}
