'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    badge: 'Comprehensive Education',
    title: 'Excellence in Education from Primary to University',
    subtitle: 'Complete Learning Journey',
    description: 'From foundational primary education to advanced university preparation, we provide comprehensive academic support at every stage of your educational journey.',
    primaryBtn: 'Explore Programs',
    secondaryBtn: 'Learn More',
  },
  {
    id: 2,
    badge: 'Leadership Development',
    title: 'Shaping Future Leaders Through Quality Education',
    subtitle: 'Building Tomorrow\'s Innovators',
    description: 'We don\'t just teach subjects – we nurture critical thinking, leadership skills, and character development to prepare students for success in life.',
    primaryBtn: 'Our Approach',
    secondaryBtn: 'View Programs',
  },
  {
    id: 3,
    badge: 'Academic Excellence',
    title: 'Your Gateway to Academic Success',
    subtitle: 'Achieve Your Dreams',
    description: 'With proven teaching methods, personalized attention, and a supportive learning environment, we help students unlock their full potential and achieve outstanding results.',
    primaryBtn: 'Get Started',
    secondaryBtn: 'Contact Us',
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
    <div className="relative h-screen overflow-hidden bg-black mt-4 main-website">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F5A623] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2B4C9F] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="h-full w-full bg-gradient-to-br from-black via-[#1a2d5f] to-black flex items-center">
            <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
                {/* Left Content - Slides in from Right */}
                <div 
                  className={`text-white space-y-6 ${
                    index === currentSlide ? styles['animate-slideInFromRight'] : ''
                  }`}
                  key={`content-${slide.id}-${currentSlide}`}
                >
                  {/* Badge */}
                  <div className="inline-block mt-5 pt-3">
                    <span className="bg-gradient-to-r from-[#F5A623] to-[#d97706] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-white">{slide.title.split(' ').slice(0, -1).join(' ')}</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#fbbf24]">
                      {slide.title.split(' ').slice(-1)}
                    </span>
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl xl:text-3xl text-[#F5A623] font-semibold">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base md:text-lg xl:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button className="btn-primary">
                      <span>{slide.primaryBtn}</span>
                    </button>
                    <button className="btn-outline">
                      <span>{slide.secondaryBtn}</span>
                    </button>
                  </div>
                </div>

                {/* Right Content - Hexagonal Images - Slides in from Left */}
                <div 
                  className={`relative hidden lg:flex justify-center items-center ${
                    index === currentSlide ? styles['animate-slideInFromLeft'] : ''
                  }`}
                  key={`images-${slide.id}-${currentSlide}`}
                >
                  <div className="relative w-full max-w-[600px] h-[500px]">
                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-72 h-72 border-4 border-[#F5A623] rounded-full opacity-20 ${styles['animate-spin-slow']}`}></div>
                    <div className={`absolute bottom-0 left-0 w-64 h-64 border-4 border-[#2B4C9F] rounded-full opacity-20 ${styles['animate-spin-slow-reverse']}`}></div>
                    
                    {/* Hexagon Container */}
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Top Hexagon - Teacher Teaching */}
                      <div className={`absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 h-48 ${styles['hexagon-clip']} ${styles['animate-float']} shadow-2xl overflow-hidden`}>
                        <Image
                          src="/images/teacher-teaching.jpg"
                          alt="Teacher Teaching"
                          width={200}
                          height={200}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Bottom Left Hexagon - One on One Tutoring */}
                      <div className={`absolute top-24 -left-32 w-56 h-56 ${styles['hexagon-clip']} ${styles['animate-float-delayed']} shadow-2xl overflow-hidden`}>
                        <Image
                          src="/images/tutoring.jpg"
                          alt="One on One Tutoring"
                          width={240}
                          height={240}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Bottom Right Hexagon - Students Studying */}
                      <div className={`absolute top-24 left-20 w-64 h-64 ${styles['hexagon-clip']} ${styles['animate-float-delayed-2']} shadow-2xl overflow-hidden`}>
                        <Image
                          src="/images/students-studying.jpg"
                          alt="Students Studying"
                          width={280}
                          height={280}
                          className="object-cover w-full h-full"
                        />
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
      <button
        onClick={() => {
          const target = window.innerHeight;
          const start = window.scrollY;
          const distance = target - start;
          const duration = 1800; // ms — increase for slower scroll
          let startTime = null;

          const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOutCubic(progress));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }}
        className="absolute bottom-8 right-8 flex flex-col items-center text-white/70 hover:text-[#F5A623] transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-xs mb-2 group-hover:text-[#F5A623] transition-colors duration-300">Scroll</span>
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>
    </div>
  );
}
