
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Technology from '@/components/sections/Technology';
import Process from '@/components/sections/Process';
import Impact from '@/components/sections/Impact';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Process />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
