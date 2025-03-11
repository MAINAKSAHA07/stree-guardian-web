
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Technology from '@/components/sections/Technology';

const TechnologyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="py-12 md:py-16 bg-gradient-to-b from-white via-stree-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-stree-50 px-3 py-1 text-sm mb-4">
              <span className="text-xs font-medium text-stree-700">Technical Specifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the cutting-edge technology behind Stree's proposed safety solution, including our precisely calibrated 1000V defense system, advanced sensors, and integrated alert network.
            </p>
            <div className="mt-6 max-w-2xl mx-auto">
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-left text-sm text-amber-800">
                <p><strong>Safety Notice:</strong> The 1000V electric shock feature is designed to be non-lethal, comparable to civilian stun guns but with enhanced safety mechanisms. All specifications represent our development targets and are subject to regulatory approval and testing.</p>
              </div>
            </div>
          </div>
        </div>
        <Technology />
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyPage;
