import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join Our Team',
  description: 'Join eVaLaunche and work on cutting-edge software development, AI/ML, and digital marketing projects. Explore career opportunities and grow with us.',
  keywords: ['careers', 'jobs', 'software developer jobs', 'AI ML careers', 'digital marketing jobs', 'remote work', 'tech careers'],
  openGraph: {
    title: 'Careers at eVaLaunche - Join Our Growing Team',
    description: 'Join eVaLaunche and work on cutting-edge technology projects. Explore career opportunities in software development, AI/ML, and digital marketing.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://evalaunche.com'}/careers`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at eVaLaunche - Join Our Growing Team',
    description: 'Explore career opportunities at eVaLaunche. Work on innovative projects with talented professionals.',
  },
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

