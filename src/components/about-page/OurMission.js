'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './OurMission.module.css';

const cards = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tag: 'Purpose',
    title: 'Our Mission',
    description:
      'To provide exceptional O & A Level education that empowers students with knowledge, skills, and values to excel academically and become responsible global citizens.',
    points: ['Student-centred learning', 'Academic excellence', 'Character development'],
    variant: 'orange',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    tag: 'Direction',
    title: 'Our Vision',
    description:
      'To be the leading educational institution recognized for academic excellence, innovative teaching, and holistic student development, preparing future leaders who make a positive impact on society.',
    points: ['Global recognition', 'Innovative teaching', 'Future-ready graduates'],
    variant: 'blue',
  },
];

const glowDots = [
  { left: 8,  top: 15, size: 6,  color: '#F5A623', duration: '3s',  delay: '0s'   },
  { left: 92, top: 10, size: 4,  color: '#4a7cf7', duration: '4s',  delay: '0.8s' },
  { left: 20, top: 80, size: 5,  color: '#F5A623', duration: '3.5s',delay: '1.5s' },
  { left: 85, top: 75, size: 7,  color: '#4a7cf7', duration: '5s',  delay: '0.3s' },
  { left: 50, top: 5,  size: 4,  color: '#F5A623', duration: '4.5s',delay: '2s'   },
  { left: 5,  top: 50, size: 5,  color: '#4a7cf7', duration: '3.8s',delay: '1.2s' },
  { left: 75, top: 40, size: 3,  color: '#F5A623', duration: '4.2s',delay: '2.5s' },
  { left: 40, top: 90, size: 6,  color: '#4a7cf7', duration: '3.2s',delay: '0.6s' },
];

export default function OurMission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.missionSection}>

      {/* Animated gradient mesh */}
      <div className={styles.meshBg} />

      {/* Grid */}
      <div className={styles.gridOverlay} />

      {/* Orbiting dashed rings */}
      <div className={styles.ringsWrapper}>
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
        <div className={`${styles.ring} ${styles.ring4}`} />
      </div>

      {/* Horizontal scan line */}
      <div className={styles.scanLine} />

      {/* Glowing dots */}
      <div className={styles.dotsWrapper}>
        {glowDots.map((d, i) => (
          <div
            key={i}
            className={styles.dot}
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
              background: d.color,
              boxShadow: `0 0 ${d.size * 3}px ${d.color}`,
              animationDuration: d.duration,
              animationDelay: d.delay,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>

        {/* Section header */}
        <div
          className={styles.sectionHeader}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Who We Are</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Driven by <span className={styles.highlight}>Purpose</span>,<br />
            Guided by <span className={styles.highlight}>Vision</span>
          </h2>
          <p className={styles.sectionSub}>
            Two pillars that define everything we do at Ayaz Ahmad Academy.
          </p>
          <div className={styles.titleDivider} />
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {cards.map((card, index) => {
            const isOrange = card.variant === 'orange';
            return (
              <div
                key={index}
                className={styles.missionCard}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
                  transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.2}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.2}s`,
                  '--accent': isOrange ? '#F5A623' : '#4a7cf7',
                  '--accent-dark': isOrange ? '#cc7a00' : '#1a3fa8',
                  '--accent-alpha': isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,',
                }}
              >
                {/* Top accent bar */}
                <div className={styles.topBar} style={{ background: `linear-gradient(90deg, var(--accent), var(--accent-dark))` }} />

                {/* Corner glow */}
                <div className={styles.cornerGlow} style={{ background: `var(--accent)` }} />

                {/* Tag */}
                <span
                  className={styles.cardTag}
                  style={{
                    background: `var(--accent-alpha)0.12)`,
                    color: 'var(--accent)',
                    border: `1px solid var(--accent-alpha)0.3)`,
                  }}
                >
                  {card.tag}
                </span>

                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <div
                    className={styles.iconCircle}
                    style={{
                      background: `linear-gradient(135deg, var(--accent), var(--accent-dark))`,
                      boxShadow: `0 10px 30px var(--accent-alpha)0.4)`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div
                    className={styles.iconGlow}
                    style={{ background: `var(--accent-alpha)0.25)` }}
                  />
                </div>

                {/* Title */}
                <h3 className={styles.title}>{card.title}</h3>

                {/* Divider */}
                <div
                  className={styles.divider}
                  style={{ background: `linear-gradient(90deg, var(--accent), var(--accent-alpha)0.2))` }}
                />

                {/* Description */}
                <p className={styles.description}>{card.description}</p>

                {/* Bullet points */}
                <ul className={styles.pointsList}>
                  {card.points.map((pt, i) => (
                    <li key={i} className={styles.pointItem}>
                      <span
                        className={styles.pointDot}
                        style={{ background: 'var(--accent)' }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
