
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Impact from '@/components/sections/Impact';

const ImpactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="py-12 md:py-16 bg-gradient-to-b from-white via-stree-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Impact
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Stree is making a difference in women's lives and contributing to a safer world.
            </p>
          </div>
        </div>
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;
