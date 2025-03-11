
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stree-600 to-stree-400">
                Stree
              </h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Your guardian in emergencies. Empowering women through innovative safety solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-stree-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-stree-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-stree-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-stree-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Pre-order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Store
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/process" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-stree-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stree. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-sm font-medium text-stree-600 hover:text-stree-700 transition-colors"
          >
            Back to top <ArrowUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
