
import React from 'react';
import { Lightbulb, BarChart3, Rocket, Microscope, Users, Database, Book, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const processes = [
  {
    icon: Lightbulb,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    title: 'Research & Prototyping',
    steps: [
      'Market research and user interviews with diverse women across demographics',
      'Feasibility study on integrating pressure sensors and 1000V electric shock mechanism',
      'Analysis of existing safety solutions and their limitations',
      'Iterative design process with early user testing and feedback',
      'Hardware prototyping and component optimization for wearability and effectiveness'
    ]
  },
  {
    icon: BarChart3,
    color: 'text-stree-500',
    bgColor: 'bg-stree-50',
    title: 'System Integration & Testing',
    steps: [
      'Assembly of components into a wearable form factor with optimal electrode placement',
      'Hardware and software integration with focus on response time',
      'Comprehensive safety testing of the 1000V shock mechanism',
      'Field testing in simulated emergency scenarios',
      'Security and reliability stress testing of the alert system',
      'Battery optimization for 48-hour continuous operation',
      'User experience refinement based on detailed feedback'
    ]
  },
  {
    icon: Rocket,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    title: 'Deployment & Feedback',
    steps: [
      'Limited production run for controlled testing with early adopters',
      'Establishment of dedicated support system for user assistance',
      'Implementation of continuous improvement based on real-world usage data',
      'Feature expansion through over-the-air updates and software enhancements',
      'Development of partnerships with women's safety organizations and emergency services',
      'Scaling production for wider market availability based on successful testing'
    ]
  }
];

const currentPhase = {
  icon: Microscope,
  color: 'text-blue-500',
  bgColor: 'bg-blue-50',
  title: 'Current Stage: Concept Development',
  description: 'We are currently in the early research and conceptual design phase, seeking seed funding of $1.5M to progress to prototype development and testing. Our team has completed initial market research and technical feasibility studies for the 1000V non-lethal defense mechanism and supporting technologies.'
};

const milestones = [
  {
    icon: Book,
    title: 'Phase 1: Q3-Q4 2023',
    description: 'Concept development and market research completed'
  },
  {
    icon: Wrench,
    title: 'Phase 2: Q1-Q2 2024',
    description: 'Prototyping and initial safety testing (pending funding)'
  },
  {
    icon: Users,
    title: 'Phase 3: Q3-Q4 2024',
    description: 'Field testing with focus groups and refinement'
  },
  {
    icon: Database,
    title: 'Phase 4: Q1-Q2 2025',
    description: 'Limited production run and market entry'
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
            Creating an effective safety solution requires careful planning, thorough research, and continuous improvement. Here's our roadmap for developing Stree from concept to reality.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-16">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center mb-2',
              currentPhase.bgColor
            )}>
              <currentPhase.icon className={cn('w-6 h-6', currentPhase.color)} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{currentPhase.title}</h3>
              <p className="text-slate-700">{currentPhase.description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <milestone.icon className="w-8 h-8 text-stree-500 mb-3" />
              <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
              <p className="text-sm text-slate-600">{milestone.description}</p>
            </div>
          ))}
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
