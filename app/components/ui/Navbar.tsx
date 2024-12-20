'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:contact@girmantech.com';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-24 h-6 sm:w-32 sm:h-8">
            <Image
              src="/Girma.svg"
              alt="Girman "
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-black" // Added text-black for black color
        >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Rest of the navbar code remains the same */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            SEARCH
          </Link>
          <Link href="https://girmantech.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            WEBSITE
          </Link>
          <Link href="https://www.linkedin.com/company/girmantech/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            LINKEDIN
          </Link>
          <button onClick={handleContact} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            CONTACT
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-3 bg-white">
          <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            SEARCH
          </Link>
          <Link href="https://girmantech.com" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            WEBSITE
          </Link>
          <Link href="https://www.linkedin.com/company/girmantech/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            LINKEDIN
          </Link>
          <button onClick={handleContact} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}