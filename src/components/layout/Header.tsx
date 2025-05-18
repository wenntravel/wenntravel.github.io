"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../ui/Button';
import ContactModal from '../ui/ContactModal';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/wenn_logo.svg"
                alt="Wenn Travel Company"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#popular-destinations" className="text-gray-700 hover:text-green-600">
              Popular Destinations
            </Link>
            
            <button
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </button>
            <Link href="/login">
              <Button variant="primary" size="sm">Login</Button>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/#popular-destinations" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              Popular Destinations
            </Link>
            
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us
            </button>
            <div className="px-3 py-2">
              <Button variant="primary" fullWidth>Login</Button>
            </div>
          </div>
        </div>
      )}
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </header>
  );
};

export default Header; 