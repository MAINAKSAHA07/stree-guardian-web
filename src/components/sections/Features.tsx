
import React from 'react';
import { Shield, Zap, MapPin, Activity, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    title: 'Electric Shock Deterrent',
    description: 'Pressure sensor-based defense mechanism that can deliver a controlled electric pulse to deter attackers in extreme situations.'
  },
  {
    id: 2,
    icon: Shield,
    color: 'text-stree-500',
    bgColor: 'bg-stree-50',
    title: 'Multi-Level Emergency Alert System',
    description: 'Tiered alert system that can notify emergency contacts, local authorities, and nearby safety services based on the severity level.'
  },
  {
    id: 3,
    icon: MapPin,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    title: 'GPS Tracking',
    description: 'Precision location tracking that shares real-time coordinates with emergency contacts and authorities during alert activations.'
  },
  {
    id: 4,
    icon: Activity,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    title: 'Physiological Monitoring',
    description: 'Advanced sensors that detect stress indicators like heart rate and perspiration to automatically trigger alerts in distress situations.'
  },
  {
    id: 5,
    icon: Mic,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    title: 'Voice Activation',
    description: 'Instantly triggers emergency mode using voice recognition technology that responds to predefined phrases or distress sounds.'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Cutting-edge Features for <span className="text-stree-600">Ultimate Safety</span>
          </h2>
          <p className="section-subtitle">
            Our wearable is packed with innovative technologies designed specifically to enhance personal safety and provide immediate assistance in emergency situations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
                feature.bgColor
              )}>
                <feature.icon className={cn('w-6 h-6', feature.color)} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
