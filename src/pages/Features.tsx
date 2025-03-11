
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Features from '@/components/sections/Features';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="py-12 md:py-16 bg-gradient-to-b from-white via-stree-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-stree-50 px-3 py-1 text-sm mb-4">
              <span className="text-xs font-medium text-stree-700">Development Concept</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Stree Features
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our innovative safety concept includes a non-lethal 1000V deterrent system and advanced monitoring technology designed to protect and empower women in every situation.
            </p>
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
