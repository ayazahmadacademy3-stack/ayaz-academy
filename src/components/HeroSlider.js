'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    badge: 'Serving Since 2007',
    title: 'AYAZ AHMAD ACADEMY',
    subtitle: 'Institute of O & A Level',
    description: 'Enhance your knowledge and skills with personalized tutoring from Ayaz Ahmad Academy – your gateway to expert guidance and deep understanding in any subject.',
    primaryBtn: 'Request For A Tutor',
    secondaryBtn: 'Become A Tutor',
  },
  {
    id: 2,
    badge: 'Excellence in Education',
    title: 'EXPERT FACULTY',
    subtitle: 'Learn from the Best',
    description: 'Our experienced teachers are dedicated to helping you excel in your O & A Level examinations with proven teaching methodologies and personalized attention.',
    primaryBtn: 'Meet Our Teachers',
    secondaryBtn: 'View Courses',
  },
  {
    id: 3,
    badge: 'Modern Learning',
    title: 'STATE-OF-THE-ART FACILITIES',
    subtitle: 'Best Learning Environment',
    description: 'Experience education in a comfortable and technology-enabled learning environment designed to maximize student engagement and academic success.',
    primaryBtn: 'Take A Tour',
    secondaryBtn: 'Learn More',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black mt-4">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F5A623] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2B4C9F] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="h-full w-full bg-gradient-to-br from-black via-[#1a2d5f] to-black flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-white space-y-6 animate-fadeInLeft">
                  {/* Badge */}
                  <div className="inline-block">
                    <span className="bg-gradient-to-r from-[#F5A623] to-[#d97706] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-white">{slide.title.split(' ').slice(0, -1).join(' ')}</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#fbbf24]">
                      {slide.title.split(' ').slice(-1)}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-[#F5A623] font-semibold">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="group relative overflow-hidden bg-[#F5A623] text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/50 hover:scale-105">
                      <span className="relative z-10">{slide.primaryBtn}</span>
                    </button>
                    <button className="group relative overflow-hidden border-2 border-[#F5A623] text-[#F5A623] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#F5A623] hover:text-black hover:scale-105">
                      {slide.secondaryBtn}
                    </button>
                  </div>
                </div>

                {/* Right Content - Hexagonal Images */}
                <div className="relative hidden lg:block animate-fadeInRight">
                  <div className="relative w-full h-[500px]">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-72 h-72 border-4 border-[#F5A623] rounded-full opacity-20 animate-spin-slow"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-[#2B4C9F] rounded-full opacity-20 animate-spin-slow-reverse"></div>
                    
                    {/* Hexagon Container */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Top Hexagon - Teacher Teaching */}
                      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 h-48 hexagon-clip bg-gradient-to-br from-[#F5A623] to-[#d97706] p-1 animate-float shadow-2xl">
                        <div className="w-full h-full hexagon-clip bg-white overflow-hidden">
                          <Image
                            src="/images/teacher-teaching.jpg"
                            alt="Teacher Teaching"
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Bottom Left Hexagon - One on One Tutoring */}
                      <div className="absolute top-24 -left-32 w-56 h-56 hexagon-clip bg-gradient-to-br from-[#2B4C9F] to-[#1e3a8a] p-1 animate-float-delayed shadow-2xl">
                        <div className="w-full h-full hexagon-clip bg-white overflow-hidden">
                          <Image
                            src="/images/tutoring.jpg"
                            alt="One on One Tutoring"
                            width={240}
                            height={240}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      {/* Bottom Right Hexagon - Students Studying */}
                      <div className="absolute top-24 left-20 w-64 h-64 hexagon-clip bg-gradient-to-br from-[#F5A623] to-[#d97706] p-1 animate-float-delayed-2 shadow-2xl">
                        <div className="w-full h-full hexagon-clip bg-white overflow-hidden">
                          <Image
                            src="/images/students-studying.jpg"
                            alt="Students Studying"
                            width={280}
                            height={280}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Dots Pattern */}
                    <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-30">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-[#F5A623] rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'bg-[#F5A623] w-12 h-3' 
                : 'bg-white/30 hover:bg-white/50 w-3 h-3'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-xs mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
