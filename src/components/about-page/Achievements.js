'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';

const achievements = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    end: 200, suffix: '+',
    label: 'A* Grades Achieved',
    sublabel: 'Cambridge O & A Level',
    tag: 'Excellence',
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    end: 5000, suffix: '+',
    label: 'Successful Graduates',
    sublabel: 'Across all batches',
    tag: 'Alumni',
    variant: 'blue',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    end: 95, suffix: '%',
    label: 'Pass Rate',
    sublabel: 'Consistent every year',
    tag: 'Top Rated',
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    end: 50, suffix: '+',
    label: 'Countries Represented',
    sublabel: 'Global student community',
    tag: 'Global',
    variant: 'blue',
  },
];

/* animated counter */
function Counter({ end, suffix, isVisible, delay = 0 }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    const t = setTimeout(() => {
      started.current = true;
      let startTime = null;
      const duration = 2200;
      const ease = (t) => 1 - Math.pow(1 - t, 3);
      const step = (ts) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        setCount(Math.floor(ease(p) * end));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(t);
  }, [isVisible, end, delay]);

  return <>{count.toLocaleString()}{suffix}</>;
}

/* fixed particle positions */
const particles = [
  { left: 6,  top: 10, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 92, top: 8,  size: 4, color: '#4a7cf7', dur: '4.0s', delay: '0.7s' },
  { left: 20, top: 82, size: 6, color: '#F5A623', dur: '3.7s', delay: '1.4s' },
  { left: 87, top: 78, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 50, top: 4,  size: 3, color: '#F5A623', dur: '4.4s', delay: '2.0s' },
  { left: 3,  top: 54, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
  { left: 75, top: 36, size: 3, color: '#F5A623', dur: '4.2s', delay: '2.5s' },
  { left: 40, top: 91, size: 5, color: '#4a7cf7', dur: '3.0s', delay: '0.5s' },
];

export default function Achievements() {
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
    <section ref={sectionRef} className={styles.section}>

      {/* ── BG: diagonal stripes ── */}
      <div className={styles.stripes} />

      {/* ── BG: orbs ── */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* ── BG: dot grid ── */}
      <div className={styles.dotGrid} />

      {/* ── BG: particles ── */}
      <div className={styles.particlesWrapper}>
        {particles.map((p, i) => (
          <span key={i} className={styles.particle} style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: p.size, height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDuration: p.dur, animationDelay: p.delay,
          }} />
        ))}
      </div>

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Our Achievements</span>
          </div>
          <h2 className={styles.heading}>
            Numbers That <span className={styles.highlight}>Define Us</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            A legacy of excellence built over 15 years of dedicated teaching
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {achievements.map((item, index) => {
            const isOrange  = item.variant === 'orange';
            const accent     = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const accentA    = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

            return (
              <div
                key={index}
                className={styles.card}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.93)',
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s,
                               transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
                }}
              >
                {/* top bar */}
                <div className={styles.cardTopBar}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }} />

                {/* corner glow */}
                <div className={styles.cardGlow}
                  style={{ background: accent }} />

                {/* tag */}
                <span className={styles.tag}
                  style={{ background: `${accentA}0.12)`, color: accent, border: `1px solid ${accentA}0.3)` }}>
                  {item.tag}
                </span>

                {/* icon */}
                <div className={styles.iconBox}
                  style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                           boxShadow: `0 8px 28px ${accentA}0.45)` }}>
                  {item.icon}
                  <span className={styles.iconRing}
                    style={{ borderColor: `${accentA}0.5)` }} />
                </div>

                {/* counter */}
                <div className={styles.counter}
                  style={{ color: isOrange ? accent : '#ffffff' }}>
                  <Counter end={item.end} suffix={item.suffix}
                    isVisible={isVisible} delay={index * 120} />
                </div>

                {/* expanding divider */}
                <div className={styles.cardDivider}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentA}0.2))` }} />

                {/* label */}
                <p className={styles.label}>{item.label}</p>
                <p className={styles.sublabel}>{item.sublabel}</p>

                {/* progress bar */}
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill}
                    style={{
                      width: isVisible ? '100%' : '0%',
                      background: `linear-gradient(90deg, ${accent}, ${accentA}0.2))`,
                      transition: `width 2s cubic-bezier(0.22,1,0.36,1) ${index * 150}ms`,
                    }} />
                </div>

                {/* watermark number */}
                {/* <span className={styles.watermark}
                  style={{ color: `${accentA}0.05)` }}>
                  0{index + 1}
                </span> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
