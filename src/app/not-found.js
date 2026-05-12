'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a2d5f] to-black flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F5A623] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2B4C9F] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Books Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            <svg className="w-12 h-12 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
          </div>
        ))}
      </div>

      <div className={`relative z-10 text-center max-w-3xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo */}
        <div className="mb-8 animate-bounce-slow">
          <Image
            src="/academy-logo.png"
            alt="Ayaz Ahmad Academy"
            width={120}
            height={120}
            className="mx-auto drop-shadow-2xl"
          />
        </div>

        {/* 404 Text with Animation */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] via-[#fbbf24] to-[#F5A623] animate-gradient-x">
            404
          </h1>
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-[#F5A623] opacity-20 blur-2xl animate-pulse">
            404
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Looks like you've wandered off the academic path. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Animated Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#F5A623] animate-pulse"></div>
          <svg className="w-8 h-8 text-[#F5A623] animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#F5A623] animate-pulse"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/"
            className="group relative overflow-hidden bg-[#F5A623] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/50 hover:scale-105"
          >
            <span className="relative z-10">Back to Home</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center text-[#2B4C9F] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Back to Home
            </span>
          </Link>

          <Link 
            href="/contact"
            className="group relative overflow-hidden border-2 border-[#F5A623] text-[#F5A623] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#F5A623] hover:text-white hover:scale-105"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="text-[#F5A623] hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/courses" className="text-[#F5A623] hover:text-white transition-colors">
              Courses
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/faculty" className="text-[#F5A623] hover:text-white transition-colors">
              Faculty
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/enroll" className="text-[#F5A623] hover:text-white transition-colors">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
