'use client';

import { useState } from 'react';

const reasons = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expert Faculty',
    description: 'Our highly qualified teachers bring years of experience and passion for education, ensuring every student receives personalized attention and guidance.',
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Proven Track Record',
    description: 'With a 95% success rate and hundreds of students achieving top grades, our results speak for themselves in O & A Level examinations.',
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms equipped with the latest technology create an optimal learning environment for academic excellence.',
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Timings',
    description: 'We offer convenient class schedules that accommodate students\' needs, making quality education accessible to everyone.',
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Small Class Sizes',
    description: 'Limited students per class ensure individual attention and a supportive learning environment where every question is answered.',
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Comprehensive Support',
    description: 'From study materials to regular assessments and parent-teacher meetings, we provide complete academic support throughout the year.',
  },
];

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Fixed positions for floating shapes to avoid hydration mismatch
  const floatingShapes = [
    { left: 15, top: 20 },
    { left: 75, top: 10 },
    { left: 25, top: 60 },
    { left: 85, top: 70 },
    { left: 45, top: 85 },
    { left: 60, top: 30 },
    { left: 10, top: 45 },
    { left: 90, top: 55 },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2d5f] to-[#0a1628]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F5A623] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#2B4C9F] opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#F5A623] opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Shapes */}
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-10"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i}s`,
            }}
          >
            <div className={`w-16 h-16 ${i % 2 === 0 ? 'bg-[#F5A623]' : 'bg-[#2B4C9F]'} rounded-lg transform rotate-45`}></div>
          </div>
        ))}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-[#F5A623] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg shadow-[#F5A623]/50">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            What Makes Us <span className="text-[#F5A623]">Different</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            At Ayaz Ahmad Academy, we combine excellence in education with a nurturing environment 
            to help every student reach their full potential.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              onMouseEnter={() => setHoveredCard(reason.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/20 hover:-translate-y-2 hover:bg-white/20 ${
                hoveredCard === reason.id ? 'border-2 border-[#F5A623]' : 'border-2 border-white/10'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 ${
                hoveredCard === reason.id 
                  ? 'bg-[#F5A623] text-white scale-110 shadow-lg shadow-[#F5A623]/50' 
                  : 'bg-white/20 text-[#F5A623]'
              }`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-[#F5A623] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full transition-all duration-300 ${
                hoveredCard === reason.id ? 'bg-[#F5A623]/30 scale-100' : 'bg-transparent scale-0'
              }`}></div>

              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                hoveredCard === reason.id ? 'opacity-100' : 'opacity-0'
              }`} style={{
                background: 'radial-gradient(circle at center, rgba(245, 166, 35, 0.1) 0%, transparent 70%)'
              }}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button className="relative overflow-hidden bg-[#F5A623] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#F5A623]/50 group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2B4C9F]">Schedule a Visit</span>
              
              {/* Liquid Fill Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-500 ease-out rounded-full"></div>
            </button>
            <button className="relative overflow-hidden border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#2B4C9F]">Contact Us</span>
              
              {/* Liquid Fill Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-white group-hover:h-full transition-all duration-500 ease-out rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
