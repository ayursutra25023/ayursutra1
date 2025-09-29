import React from 'react';
import { Heart, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-green-600 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-bold">AyurSutra</span>
            </div>
            <p className="text-green-100 mb-4 leading-relaxed">
              Bridging ancient Ayurvedic wisdom with modern technology to provide 
              comprehensive Panchakarma therapy management and wellness solutions.
            </p>
            <div className="flex space-x-4">
              <Leaf className="h-5 w-5 text-green-400" />
              <span className="text-sm text-green-200">
                Authentic • Scientific • Holistic
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/panchakarma" className="text-green-100 hover:text-white transition-colors">Panchakarma Therapies</a></li>
              <li><a href="/clinic-finder" className="text-green-100 hover:text-white transition-colors">Find Clinics</a></li>
              <li><a href="/community" className="text-green-100 hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Ayurveda</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-green-100 text-sm">support@ayursutra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-green-100 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-green-100 text-sm">Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2024 AyurSutra. All rights reserved. | Empowering wellness through ancient wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;