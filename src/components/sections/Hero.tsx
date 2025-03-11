
import React, { useEffect, useRef } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const scrollToNext = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const opacity = 1 - Math.min(scrollY / (heroHeight * 0.5), 1);
      
      if (heroRef.current.querySelector('.hero-content')) {
        (heroRef.current.querySelector('.hero-content') as HTMLElement).style.opacity = String(opacity);
        (heroRef.current.querySelector('.hero-content') as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-slate-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-[radial-gradient(40%_50%_at_50%_50%,rgba(14,165,233,0.1),transparent)] z-[1]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="hero-content flex flex-col items-center text-center transition-all duration-200 ease-out">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm">
            <span className="mr-1 rounded-full bg-stree-500 px-1.5 py-0.5 text-xs font-medium text-white">Concept</span>
            <span className="text-xs font-medium text-slate-700">Seeking $1.5M in seed funding</span>
          </div>
          
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 animate-fade-in">
            Stree
            <span className="block text-stree-600">Your Guardian in Emergencies</span>
          </h1>
          
          <p className="mb-8 max-w-3xl text-lg md:text-xl text-slate-700 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A revolutionary smart wearable concept designed to empower women with real-time safety solutions. 
            Featuring a non-lethal 1000V electric deterrent, multi-level alert system, and physiological monitoring in an elegant design.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-stree-600 mr-2 flex-shrink-0 mt-1" />
              <p className="text-sm text-slate-700">
                <strong>Investor Notice:</strong> Stree is currently in development phase. This website presents our vision and technical specifications to potential investors. The 1000V electric shock mechanism is designed to be non-lethal while providing effective protection, similar to civilian stun gun technology but with advanced safety features.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact">
              <CustomButton size="lg">
                Contact for Investment
              </CustomButton>
            </Link>
            <Link to="/features">
              <CustomButton size="lg" variant="outline">
                Explore Features
              </CustomButton>
            </Link>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 shadow-2xl">
              <div className="h-full w-full bg-gradient-to-br from-stree-100 via-white to-rose-50 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=1400&q=80" 
                  alt="Stree Wearable Device Concept" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -right-6 h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-slate-500 hover:text-stree-600 transition-colors"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium mb-2">Discover More</span>
        <ChevronDown size={24} className="animate-bounce" />
      </button>
    </div>
  );
};

export default Hero;
