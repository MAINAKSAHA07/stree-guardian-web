
import React from 'react';
import { Lightbulb, BarChart3, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const processes = [
  {
    icon: Lightbulb,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    title: 'Research & Prototyping',
    steps: [
      'Market research and user interviews with diverse women across demographics',
      'Analysis of existing safety solutions and their limitations',
      'Iterative design process with early user testing',
      'Hardware prototyping and component optimization'
    ]
  },
  {
    icon: BarChart3,
    color: 'text-stree-500',
    bgColor: 'bg-stree-50',
    title: 'System Integration & Testing',
    steps: [
      'Hardware and software integration',
      'Field testing in real-world environments',
      'Security and reliability stress testing',
      'Battery optimization and performance enhancement',
      'User experience refinement based on feedback'
    ]
  },
  {
    icon: Rocket,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    title: 'Deployment & Feedback',
    steps: [
      'Limited production run for early adopters',
      'Support system establishment for user assistance',
      'Continuous improvement based on real-world usage',
      'Expansion of features through over-the-air updates',
      'Partnership development with safety organizations'
    ]
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-white" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Our Development <span className="text-stree-600">Process</span>
          </h2>
          <p className="section-subtitle">
            Creating an effective safety solution requires careful planning, thorough research, and continuous improvement. Here's how we developed Stree from concept to reality.
          </p>
        </div>
        
        <div className="space-y-16">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:items-start gap-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-1/3">
                <div className={cn(
                  'w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0',
                  process.bgColor
                )}>
                  <process.icon className={cn('w-8 h-8', process.color)} />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">{process.title}</h3>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <ol className="space-y-4">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white text-sm font-medium mr-3 border border-slate-200 shadow-sm">
                          {stepIndex + 1}
                        </span>
                        <span className="text-slate-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
