
import React from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'info@stree-safety.com',
    link: 'mailto:info@stree-safety.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 123 456 7890',
    link: 'tel:+911234567890'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: 'Tech Hub, Indiranagar, Bangalore, India',
    link: '#'
  }
];

const Contact = () => {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-in">
            <h2 className="section-title">
              Get in <span className="text-stree-600">Touch</span>
            </h2>
            <p className="section-subtitle">
              Have questions about Stree? Want to partner with us? Or simply interested in learning more? We'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 bg-stree-50 p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-stree-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-muted-foreground hover:text-stree-600 transition-colors"
                    >
                      {item.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-stree-50 rounded-xl p-6 border border-stree-100">
              <h3 className="text-lg font-medium mb-4">Who Should Contact Us?</h3>
              <ul className="space-y-3">
                {['Users interested in pre-ordering', 'Safety organizations for partnerships', 'Investors and supporters', 'Media and press inquiries'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-stree-100 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-stree-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-stree-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-stree-500 focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-stree-500 focus:border-transparent transition-all"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-stree-500 focus:border-transparent transition-all"
                    placeholder="Tell us what you need..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-stree-600 rounded border-slate-300 focus:ring-stree-500"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-slate-700">
                    I agree to the privacy policy and terms
                  </label>
                </div>
                
                <CustomButton className="w-full">
                  Send Message
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
