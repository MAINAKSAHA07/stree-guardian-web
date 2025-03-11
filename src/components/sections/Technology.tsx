
import React from 'react';
import { Cpu, Smartphone, ShieldCheck, PenTool, Layers, Battery, Server, Power } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const technologies = [
  {
    icon: Cpu,
    title: 'Advanced Microcontroller',
    description: 'High-efficiency central processing unit that manages all device operations, sensor inputs, and triggers with millisecond response time and low power consumption.'
  },
  {
    icon: Power,
    title: 'Electric Shock Mechanism',
    description: 'Carefully engineered 1000V shock delivery system with strategically placed electrodes. Includes comprehensive insulation to protect the wearer while effectively deterring attackers.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Integration',
    description: 'Companion app for configuration of emergency contacts, real-time tracking, status monitoring, and alert notifications. Features intuitive UI for quick access to safety settings.'
  },
  {
    icon: ShieldCheck,
    title: 'Security Features',
    description: 'End-to-end encryption of all data with secure communication channels for emergency alerts. Dual-authentication system prevents accidental activation of safety mechanisms.'
  },
  {
    icon: Battery,
    title: 'Power System',
    description: 'High-capacity rechargeable lithium-ion battery providing 48 hours of continuous operation per charge. Includes low-battery alerts and power-saving mode for extended use.'
  },
  {
    icon: Server,
    title: 'Communication Infrastructure',
    description: 'Integrated GPS and Bluetooth modules with emergency frequency band capabilities for reliable connectivity even in areas with limited cellular coverage.'
  },
  {
    icon: PenTool,
    title: 'Elegant Design',
    description: 'Sleek, lightweight wristband design that can be worn comfortably throughout the day without drawing attention to its safety features. Available in multiple colors and styles.'
  },
  {
    icon: Layers,
    title: 'Durable Materials',
    description: 'Water-resistant, shockproof aluminum alloy and reinforced plastic casing for long-lasting protection. Designed to withstand daily use and harsh conditions while maintaining functionality.'
  }
];

const Technology = () => {
  return (
    <section className="section-padding bg-slate-50" id="technology">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-1 bg-white rounded-2xl shadow-xl">
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-8">
                <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-inner relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-stree-100/50 via-white to-rose-50/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 relative">
                        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-stree-500/20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-stree-500/40 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1/4 h-1/4 bg-stree-500 rounded-full shadow-lg shadow-stree-500/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="animate-slide-in">
              <h2 className="section-title">
                <span className="text-stree-600">Innovative</span> Technology
              </h2>
              <p className="section-subtitle mb-8">
                We're combining cutting-edge hardware with intuitive software to create a revolutionary safety device concept. The Stree wearable is currently in development, leveraging state-of-the-art technology to provide unparalleled protection.
              </p>
              
              <div className="bg-stree-50 border border-stree-200 rounded-lg p-4 mb-8">
                <h3 className="text-stree-800 text-lg font-semibold mb-2">Electric Shock Technology</h3>
                <p className="text-stree-700 text-sm">
                  Our proprietary electric shock system delivers a precisely controlled 1000V current – strong enough to temporarily immobilize an attacker without causing permanent harm. Unlike tasers, our specialized electrodes are designed for optimal contact through clothing while integrated safety features prevent accidental discharge.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                      <tech.icon className="w-5 h-5 text-stree-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{tech.title}</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <CustomButton>
                Learn More About Our Technology
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
