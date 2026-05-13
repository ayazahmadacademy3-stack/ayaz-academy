'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    end: 15,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Established 2010',
    tag: 'Legacy',
    variant: 'orange',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    end: 5000,
    suffix: '+',
    label: 'Students Passed Out',
    sublabel: 'Across all batches',
    tag: 'Alumni',
    variant: 'blue',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    end: 95,
    suffix: '%',
    label: 'Success Rate',
    sublabel: 'O & A Level results',
    tag: 'Top Rated',
    variant: 'orange',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    end: 20,
    suffix: '+',
    label: 'Expert Teachers',
    sublabel: 'Qualified & experienced',
    tag: 'Faculty',
    variant: 'blue',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    end: 12,
    suffix: '+',
    label: 'Subjects Offered',
    sublabel: 'O & A Level subjects',
    tag: 'Curriculum',
    variant: 'orange',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    end: 98,
    suffix: '%',
    label: 'Student Satisfaction',
    sublabel: 'Based on feedback',
    tag: 'Rated',
    variant: 'blue',
  },
];

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix, isVisible, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || started) return;
    const timer = setTimeout(() => {
      setStarted(true);
      let startTime = null;
      const duration = 2200;
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(easeOut(progress) * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, end, delay, started]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

/* ── Single stat card ── */
function StatCard({ stat, index, isVisible }) {
  const cardRef = useRef(null);
  const isOrange = stat.variant === 'orange';
  const accent      = isOrange ? '#F5A623' : '#4a7cf7';
  const accentDark  = isOrange ? '#cc7a00' : '#1a3fa8';
  const accentAlpha = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

  /* 3-D tilt on mouse move */
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)';
  };

  /* staggered entrance */
  const entranceDelay = `${index * 120}ms`;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
        border: `1px solid rgba(255,255,255,0.09)`,
        boxShadow: '0 4px 30px rgba(0,0,0,0.35)',
        transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        opacity: isVisible ? 1 : 0,
        translate: isVisible ? 'none' : '0 40px',
        transitionProperty: 'opacity, translate, transform, box-shadow, border-color',
        transitionDuration: `600ms, 600ms, 0.15s, 0.3s, 0.3s`,
        transitionDelay: `${entranceDelay}, ${entranceDelay}, 0ms, 0ms, 0ms`,
        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* ── Shimmer sweep on hover ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${accentAlpha}0.08) 50%, transparent 60%)`,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ── Top accent bar ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0,
          transition: 'opacity 0.4s ease',
        }}
        ref={(el) => {
          if (el) {
            const parent = el.closest('.group');
            if (parent) {
              parent.addEventListener('mouseenter', () => (el.style.opacity = '1'));
              parent.addEventListener('mouseleave', () => (el.style.opacity = '0'));
            }
          }
        }}
      />

      {/* ── Ambient corner glow ── */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="relative p-5 flex flex-col items-center text-center">

        {/* Tag badge */}
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-3"
          style={{
            background: `${accentAlpha}0.15)`,
            color: accent,
            border: `1px solid ${accentAlpha}0.35)`,
          }}
        >
          {stat.tag}
        </span>

        {/* Icon with pulse ring */}
        <div className="relative mb-4">
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 animate-ping"
            style={{
              background: `${accentAlpha}0.25)`,
              animationDuration: '1.4s',
            }}
          />
          <div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
              boxShadow: `0 6px 20px ${accentAlpha}0.4)`,
            }}
          >
            {stat.icon}
          </div>
        </div>

        {/* Animated number */}
        <div
          className="text-3xl xl:text-4xl font-extrabold tracking-tight mb-1"
          style={{ color: isOrange ? accent : '#ffffff' }}
        >
          <AnimatedCounter
            end={stat.end}
            suffix={stat.suffix}
            isVisible={isVisible}
            delay={index * 120}
          />
        </div>

        {/* Expanding divider */}
        <div
          className="h-[2px] rounded-full my-2 transition-all duration-500 group-hover:w-14"
          style={{
            width: '2rem',
            background: `linear-gradient(90deg, ${accent}, ${accentAlpha}0.3))`,
          }}
        />

        {/* Label */}
        <p className="text-white font-semibold text-sm leading-tight mb-1">{stat.label}</p>
        <p className="text-gray-500 text-xs">{stat.sublabel}</p>

        {/* Progress bar */}
        <div className="w-full mt-4 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: isVisible ? '100%' : '0%',
              background: `linear-gradient(90deg, ${accent}, ${accentAlpha}0.2))`,
              transition: `width 2s cubic-bezier(0.22,1,0.36,1) ${index * 150}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Floating particle ── */
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none animate-float"
      style={style}
    />
  );
}

/* ── Main section ── */
export default function Stats() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const particles = [
    { width: 6, height: 6, top: '12%', left: '8%',  background: '#F5A623', opacity: 0.5, animationDuration: '6s',  animationDelay: '0s'   },
    { width: 4, height: 4, top: '70%', left: '5%',  background: '#4a7cf7', opacity: 0.4, animationDuration: '8s',  animationDelay: '1s'   },
    { width: 5, height: 5, top: '25%', left: '92%', background: '#F5A623', opacity: 0.4, animationDuration: '7s',  animationDelay: '2s'   },
    { width: 3, height: 3, top: '80%', left: '88%', background: '#4a7cf7', opacity: 0.5, animationDuration: '9s',  animationDelay: '0.5s' },
    { width: 5, height: 5, top: '50%', left: '50%', background: '#F5A623', opacity: 0.2, animationDuration: '11s', animationDelay: '3s'   },
    { width: 4, height: 4, top: '40%', left: '20%', background: '#4a7cf7', opacity: 0.3, animationDuration: '10s', animationDelay: '1.5s' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]"
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2B4C9F]/10 rounded-full blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} style={p} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center space-x-2 rounded-full px-5 py-2 mb-6"
            style={{
              background: 'rgba(245,166,35,0.1)',
              border: '1px solid rgba(245,166,35,0.3)',
            }}
          >
            <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse" />
            <span className="text-[#F5A623] text-sm font-semibold tracking-wider uppercase">
              Our Achievements
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">
              Speak for Us
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Over a decade of academic excellence, shaping thousands of students into tomorrow's leaders.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mx-auto mt-6 rounded-full" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
