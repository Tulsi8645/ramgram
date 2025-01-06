import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nepal Ram Gram Foundation</h3>
            <p className="text-blue-200">
              Dedicated to creating positive change in Nepal through sustainable community development.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-yellow-400">About Us</a></li>
              <li><a href="#projects" className="text-blue-200 hover:text-yellow-400">Projects</a></li>
              <li><a href="#donate" className="text-blue-200 hover:text-yellow-400">Donate</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-blue-200 not-italic">
              <p>123 Ram Gram Street</p>
              <p>Kathmandu, Nepal</p>
              <p>Phone: +977 1234567890</p>
              <p>Email: info@nepalramgram.org</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-yellow-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-yellow-400">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>© 2024 Nepal Ram Gram Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;