
import React from 'react';
import { Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { value: '68%', label: 'of women feel unsafe in public spaces' },
  { value: '82%', label: 'reduction in anxiety when using Stree' },
  { value: '3.5min', label: 'average emergency response time' },
  { value: '10,000+', label: 'pre-orders and counting' }
];

const testimonials = [
  {
    content: "As someone who often travels alone, Stree has given me an incredible sense of security. The GPS tracking feature allows my family to know I'm safe, and the emergency alert system is reassuringly responsive.",
    author: "Priya S.",
    role: "Marketing Executive"
  },
  {
    content: "The discreet design is what I love most about Stree. It doesn't look like a safety device, yet it provides all the protection I need when walking home late from university classes.",
    author: "Ananya M.",
    role: "University Student"
  },
  {
    content: "After a frightening experience last year, I've been looking for something that would help me feel secure again. Stree has been life-changing - especially the physiological monitoring that can detect when I'm in distress.",
    author: "Lakshmi R.",
    role: "Healthcare Professional"
  }
];

const Impact = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center bg-rose-50 p-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-rose-500 mr-2" />
            <span className="text-sm font-medium text-rose-600">Making a difference</span>
          </div>
          
          <h2 className="section-title">
            The <span className="text-rose-500">Impact</span> of Stree
          </h2>
          <p className="section-subtitle">
            Women's safety isn't just a feature - it's a fundamental right. Stree is committed to creating technology that empowers women and provides peace of mind in everyday situations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-stree-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-slate-100 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6">"{testimonial.content}"</blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                  <span className="text-sm font-medium text-slate-600">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-stree-50 to-rose-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-slate-700 mb-8">
              We're committed to creating a safer world for women through innovative technology. 
              Partner with us to make a difference in your community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-stree-600 text-white font-medium hover:bg-stree-700 transition-colors">
                Become a Partner
              </button>
              <button className="px-6 py-3 rounded-lg bg-white border border-stree-200 text-stree-700 font-medium hover:bg-stree-50 transition-colors">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
