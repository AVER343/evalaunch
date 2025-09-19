'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectDetailsForm from '@/components/ProjectDetailsForm';

export default function Home() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  const openProjectForm = () => {
    setIsProjectFormOpen(true);
  };

  const closeProjectForm = () => {
    setIsProjectFormOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Header onStartProject={openProjectForm} />
      <Hero onStartProject={openProjectForm} />
      <Services onStartProject={openProjectForm} />
      <About onStartProject={openProjectForm} />
      <Portfolio onStartProject={openProjectForm} />
      <Contact onStartProject={openProjectForm} />
      <Footer onStartProject={openProjectForm} />
      <ProjectDetailsForm isOpen={isProjectFormOpen} onClose={closeProjectForm} />
    </main>
  );
}
