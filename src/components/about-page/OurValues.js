'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './OurValues.module.css';

const values = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do',
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Integrity',
    description: 'Building trust through honesty and ethical practices',
    variant: 'blue',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'Embracing modern teaching methods and technology',
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Compassion',
    description: 'Creating a supportive and caring learning environment',
    variant: 'blue',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Growth',
    description: 'Fostering continuous learning and personal development',
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'Achievement',
    description: 'Celebrating success and encouraging ambition',
    variant: 'blue',
  },
];

/* fixed positions — no Math.random to avoid hydration mismatch */
const particles = [
  { left: 7,  top: 14, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 91, top: 8,  size: 4, color: '#4a7cf7', dur: '4.1s', delay: '0.7s' },
  { left: 22, top: 78, size: 6, color: '#F5A623', dur: '3.8s', delay: '1.4s' },
  { left: 86, top: 82, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 48, top: 4,  size: 3, color: '#F5A623', dur: '4.5s', delay: '2.0s' },
  { left: 4,  top: 52, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
  { left: 74, top: 38, size: 3, color: '#F5A623', dur: '4.3s', delay: '2.6s' },
  { left: 38, top: 92, size: 5, color: '#4a7cf7', dur: '3.0s', delay: '0.5s' },
];

export default function OurValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.valuesSection}>

      {/* ── BG: diagonal gradient stripes ── */}
      <div className={styles.stripes} />

      {/* ── BG: large soft glow orbs ── */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* ── BG: dot-grid ── */}
      <div className={styles.dotGrid} />

      {/* ── BG: glowing particles ── */}
      <div className={styles.particlesWrapper}>
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div
          className={styles.header}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Our Values</span>
          </div>
          <h2 className={styles.heading}>
            The <span className={styles.highlight}>Principles</span> We Live By
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Our core values guide everything we do and shape the culture of our academy
          </p>
        </div>

        {/* Grid */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => {
            const isOrange = value.variant === 'orange';
            const accent     = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const accentA    = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

            return (
              <div
                key={index}
                className={styles.valueCard}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.93)',
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s,
                               transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
                }}
              >
                {/* top bar */}
                <div className={styles.cardTopBar}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }} />

                {/* corner glow */}
                <div className={styles.cardCornerGlow}
                  style={{ background: accent }} />

                {/* number watermark */}
                {/* <span className={styles.cardNumber}
                  style={{ color: `${accentA}0.06)` }}>
                  0{index + 1}
                </span> */}

                {/* icon */}
                <div
                  className={styles.iconBox}
                  style={{
                    background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                    boxShadow: `0 8px 24px ${accentA}0.4)`,
                  }}
                >
                  {value.icon}
                  {/* pulse ring */}
                  <span className={styles.iconRing}
                    style={{ borderColor: `${accentA}0.4)` }} />
                </div>

                {/* text */}
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <div className={styles.cardDivider}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentA}0.15))` }} />
                <p className={styles.cardDesc}>{value.description}</p>

                {/* bottom accent line */}
                <div className={styles.cardBottomLine}
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
