'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1a2d5f] shadow-2xl py-3' 
          : 'bg-gradient-to-r from-[#2B4C9F] via-[#1e3a8a] to-[#2B4C9F] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5A623] rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Image
                src="/academy-logo.png"
                alt="Ayaz Ahmad Academy Logo"
                width={55}
                height={55}
                className="relative object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide">
                Ayaz Ahmad Academy
              </span>
              <span className="text-xs text-[#F5A623] font-medium">
                Institute of O & A Level
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/courses">Courses</NavLink>
            <NavLink href="/faculty">Faculty</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link 
              href="/enroll" 
              className="ml-4 relative group overflow-hidden bg-[#F5A623] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#F5A623]/50"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-[#2B4C9F] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Enroll Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About Us</MobileNavLink>
            <MobileNavLink href="/courses">Courses</MobileNavLink>
            <MobileNavLink href="/faculty">Faculty</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
            <Link 
              href="/enroll" 
              className="bg-[#F5A623] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#2B4C9F] transition-all text-center mt-2"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="relative text-white px-4 py-2 font-medium group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5A623] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      <span className="absolute inset-0 bg-white/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    </Link>
  );
}

function MobileNavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-white hover:text-[#F5A623] font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
    >
      {children}
    </Link>
  );
}
