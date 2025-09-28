'use client';

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

  return (
    <main className="min-h-screen">
      <Header onStartProject={openEmailClient} />
      <Hero onStartProject={openEmailClient} />
      <Services />
      <About onStartProject={openEmailClient} />
      <Portfolio onStartProject={openEmailClient} />
      <Contact onStartProject={openEmailClient} />
      <Footer />
    </main>
  );
}
