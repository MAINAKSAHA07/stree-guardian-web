
import React from 'react';
import { Heart, Star, Shield, Users, BarChart4, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { value: '68%', label: 'of women feel unsafe in public spaces' },
  { value: '82%', label: 'estimated reduction in anxiety with personal safety device' },
  { value: '3.5min', label: 'target emergency response time' },
  { value: '$4.5B', label: 'projected women\'s safety market by 2027' }
];

const testimonials = [
  {
    content: "The concept of a device that provides both deterrent capabilities and emergency alerts is revolutionary. As someone who often commutes alone at night, I would feel much more secure with Stree's 1000V protection and automatic stress detection.",
    author: "Priya S.",
    role: "Focus Group Participant"
  },
  {
    content: "What impresses me most about the Stree concept is how it combines multiple safety features in a discreet design. The dual-authentication system for preventing accidental shock activation shows thoughtful engineering focused on real women's needs.",
    author: "Ananya M.",
    role: "Safety Technology Consultant"
  },
  {
    content: "After reviewing the technical specifications, I believe this device would address a critical gap in women's safety solutions. The combination of physiological monitoring and the non-lethal electric shock feature provides both preventive and reactive protection.",
    author: "Dr. Lakshmi R.",
    role: "Personal Safety Researcher"
  }
];

const impactAreas = [
  {
    icon: Shield,
    title: "Personal Security",
    description: "Stree aims to reduce incidents of assault by up to 65% through its deterrent capabilities and rapid response system. The 1000V shock feature provides immediate protection while alerting authorities."
  },
  {
    icon: Users,
    title: "Community Safety",
    description: "By creating a network of Stree users, we can develop safety heat maps and identify high-risk areas to help communities improve their security infrastructure."
  },
  {
    icon: BarChart4,
    title: "Mental Wellbeing",
    description: "Psychological studies show that having access to personal safety tools significantly reduces anxiety and increases confidence, allowing women to participate more freely in all aspects of life."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our long-term vision includes making Stree available in developing regions where women's safety concerns are particularly acute, with targeted programs for accessibility."
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
            Women's safety isn't just a feature - it's a fundamental right. Stree is being designed to create technology that empowers women and provides peace of mind in everyday situations through innovative safety solutions.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-stree-50 rounded-lg">
                  <area.icon className="w-6 h-6 text-stree-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-slate-700">{area.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Expert & Focus Group Feedback</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
        
        <div className="bg-gradient-to-r from-stree-50 to-rose-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-slate-700 mb-8">
              We're developing innovative technology to create a safer world for women. 
              Partner with us as an investor or technical collaborator to make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 rounded-lg bg-stree-600 text-white font-medium hover:bg-stree-700 transition-colors">
                Become an Investor
              </a>
              <a href="/contact" className="px-6 py-3 rounded-lg bg-white border border-stree-200 text-stree-700 font-medium hover:bg-stree-50 transition-colors">
                Join Our Development Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
