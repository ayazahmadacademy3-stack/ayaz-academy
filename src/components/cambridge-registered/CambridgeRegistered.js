'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Officially registered Cambridge centre',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    text: 'O & A Level examinations conducted on-site',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    text: 'Internationally recognised qualifications',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    text: 'Curriculum aligned with Cambridge standards',
  },
];

// Fixed positions to avoid hydration mismatch
const floatingShapes = [
  { left: 8,  top: 15, color: 'bg-[#F5A623]', delay: '0s',   duration: '6s'  },
  { left: 80, top: 8,  color: 'bg-[#2B4C9F]', delay: '0.7s', duration: '7s'  },
  { left: 20, top: 65, color: 'bg-[#F5A623]', delay: '1.4s', duration: '8s'  },
  { left: 88, top: 72, color: 'bg-[#2B4C9F]', delay: '2.1s', duration: '5s'  },
  { left: 50, top: 88, color: 'bg-[#F5A623]', delay: '2.8s', duration: '9s'  },
  { left: 65, top: 25, color: 'bg-[#2B4C9F]', delay: '0.3s', duration: '6.5s'},
  { left: 5,  top: 50, color: 'bg-[#F5A623]', delay: '1.8s', duration: '7.5s'},
  { left: 93, top: 40, color: 'bg-[#2B4C9F]', delay: '3.2s', duration: '8.5s'},
];

export default function CambridgeRegistered() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1a2d5f] to-[#0a1628]"
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Pulsing gradient orbs */}
        <div className="absolute top-16 left-8 w-72 h-72 bg-[#F5A623] opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-16 w-96 h-96 bg-[#2B4C9F] opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-1/3 w-80 h-80 bg-[#F5A623] opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-[#4a7cf7] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Floating rotating squares */}
        {floatingShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
            }}
          >
            <div className={`w-14 h-14 ${shape.color} rounded-lg transform rotate-45`} />
          </div>
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ══════════════ LEFT — Image ══════════════ */}
          <div
            className="flex items-center justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* Card wrapper */}
            <div
              className="relative group rounded-3xl p-8 md:p-12 flex items-center justify-center w-full max-w-md"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Corner glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#4a7cf7]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#F5A623]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Rotating border ring */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(74,124,247,0.3), transparent 40%, rgba(245,166,35,0.3) 100%)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Badge */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap"
                style={{
                  background: 'linear-gradient(90deg, #2B4C9F, #4a7cf7)',
                  boxShadow: '0 4px 20px rgba(43,76,159,0.5)',
                  color: '#fff',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Registered Centre
              </div>

              {/* Cambridge logo */}
              <div className="relative w-full aspect-[3/2] group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/cambridge-logo-written.png"
                  alt="Cambridge Assessment International Education"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ══════════════ RIGHT — Content ══════════════ */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(60px)',
              transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s',
            }}
          >
            {/* Section pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
              style={{
                background: 'rgba(245,166,35,0.1)',
                border: '1px solid rgba(245,166,35,0.3)',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span className="text-[#F5A623] text-sm font-semibold tracking-wider uppercase">
                Cambridge Affiliation
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Proud to be a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">
                Cambridge
              </span>{' '}
              Registered Academy
            </h2>

            {/* Body */}
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Ayaz Ahmad Academy is an officially registered Cambridge Assessment International
              Education centre. Our students sit their O & A Level examinations under the globally
              trusted Cambridge framework, earning qualifications recognised by universities and
              employers worldwide.
            </p>

            {/* Divider */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mb-8" />

            {/* Highlights list */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                    transition: `opacity 0.6s ease ${0.3 + i * 0.1}s, transform 0.6s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white mt-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #2B4C9F, #4a7cf7)',
                      boxShadow: '0 4px 14px rgba(43,76,159,0.4)',
                    }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-gray-300 text-base leading-snug pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <button className="btn-primary"><span>Learn More About Cambridge</span></button>
          </div>

        </div>
      </div>
    </section>
  );
}
