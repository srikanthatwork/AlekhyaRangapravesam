import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import ProgramGuide from './ProgramGuide';
import Biography from './Biography';
import ExpertGuidance from './ExpertGuidance';
import Academic from './Academic';
import Cultural from './Cultural';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [Home,ProgramGuide,Biography,ExpertGuidance,Academic,Cultural], );

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Program Guide", href: "#programguide" },
    { name: "Biography", href: "#biography" },
    { name: "Expert Guidance", href: "#expert-guidance" },
    { name: "Academic", href: "#academic" },
    { name: "Kuchipudi", href: "#cultural" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-amber-800/90 backdrop-blur-md text-amber-50 shadow-lg' : 'bg-transparent text-amber-800'
    } `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl md:text-2xl font-display">
            Alekhya Alapati Rangapravesam
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-amber-500 ${
                    isScrolled ? 'hover:text-amber-300' : 'hover:text-amber-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6\" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6\" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-800 text-amber-50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md hover:bg-amber-700 hover:text-white transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;