
import React from 'react';
import { Shield, Zap, MapPin, Activity, Mic, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    title: 'Electric Shock Deterrent (1000V)',
    description: 'Advanced pressure sensor-based defense mechanism that delivers a controlled 1000V electric pulse to temporarily immobilize attackers without causing permanent harm, providing crucial escape time. Includes dual-authentication safety system to prevent accidental activation.'
  },
  {
    id: 2,
    icon: Shield,
    color: 'text-stree-500',
    bgColor: 'bg-stree-50',
    title: 'Multi-Level Emergency Alert System',
    description: 'Three-tiered alert system: Level 1 activates when stress is detected, Level 2 triggers with manual button press, and Level 3 activates automatically when the electric shock is deployed. Alerts notify emergency contacts, authorities, and nearby safety services with real-time location data.'
  },
  {
    id: 3,
    icon: MapPin,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    title: 'Advanced GPS Tracking',
    description: 'Precision GPS location tracking that works even in areas with limited cellular coverage using emergency frequency bands. Continuous monitoring shares real-time coordinates with emergency contacts and authorities during alert activations.'
  },
  {
    id: 4,
    icon: Activity,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    title: 'Physiological Monitoring',
    description: 'Intelligent sensors detect stress indicators like heart rate and skin conductance to automatically trigger Level 1 alerts in distress situations. Establishes personalized baseline readings and alerts when significant deviations occur.'
  },
  {
    id: 5,
    icon: Mic,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    title: 'Voice Activation',
    description: 'Instantly triggers emergency mode using voice recognition technology that responds to predefined phrases or distress sounds. Works effectively even in noisy environments through advanced noise-cancellation algorithms.'
  },
  {
    id: 6,
    icon: AlertTriangle,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    title: 'Fail-Safe Protection',
    description: 'Multiple safety mechanisms prevent accidental activation, including insulation layers to protect the wearer, dual-authentication system requiring both pressure sensor activation and manual trigger, and continuous system health monitoring.'
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
          <p className="section-subtitle mb-8">
            Our wearable concept integrates innovative technologies specifically designed to enhance personal safety and provide immediate assistance in emergency situations. Still in development phase, Stree represents the next generation of women's safety devices.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 mx-auto max-w-2xl">
            <h3 className="text-amber-800 text-lg font-semibold mb-2">Safety Notice</h3>
            <p className="text-amber-700 text-sm">
              The Stree device incorporates a carefully calibrated 1000V electric deterrent system that is <strong>non-lethal</strong> and designed to temporarily immobilize an attacker, providing crucial escape time. The system includes multiple safety mechanisms to protect the wearer while ensuring effectiveness when needed.
            </p>
          </div>
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
