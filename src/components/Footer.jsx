import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-8 px-6" style={{ backgroundColor: '#37302A' }}>
      <div className="mx-auto" style={{ width: '50%' }}>
        {/* Grid principal de 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Columna 1: Título FinanQuest */}
          <div className="flex items-start">
            <h2
              className="font-bold font-1"
              style={{ color: '#ffffff', fontSize: '4rem', lineHeight: 1 }}
            >
              FinanQuest
            </h2>
          </div>

          {/* Columna 2: Grid interno de 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="px-2">
              <h3
                className="font-semibold mb-6 uppercase tracking-wide font-1"
                style={{ color: '#F0D212', fontSize: '1.5rem' }}
              >
                QUICK LINKS
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Policy */}
            <div className="px-2">
              <h3
                className="font-semibold mb-6 uppercase tracking-wide font-1"
                style={{ color: '#F0D212', fontSize: '1.5rem' }}
              >
                POLICY
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="px-2">
              <h3
                className="font-semibold mb-6 uppercase tracking-wide font-1"
                style={{ color: '#F0D212', fontSize: '1.5rem' }}
              >
                SOCIAL
              </h3>
              <div className="flex space-x-5 text-lg">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Facebook size={28} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Twitter size={28} />
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  <Youtube size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-500 text-center">
          <p className="text-xs text-gray-200 ">
            © 2025 FinanQuest | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
