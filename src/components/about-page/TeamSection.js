'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

const team = [
  {
    name: 'Dr. Ayaz Ahmad',
    role: 'Founder & Principal',
    initials: 'AA',
    subjects: ['Leadership', 'Physics', 'O & A Level'],
    bio: '15+ years of academic excellence and institution building.',
    variant: 'orange',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Sarah Khan',
    role: 'Head of Sciences',
    initials: 'SK',
    subjects: ['Biology', 'Chemistry', 'A Level'],
    bio: 'Expert in Cambridge Sciences with a passion for research.',
    variant: 'blue',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Ahmed Ali',
    role: 'Head of Mathematics',
    initials: 'AA',
    subjects: ['Pure Math', 'Statistics', 'O & A Level'],
    bio: 'Specialist in making complex mathematics simple and fun.',
    variant: 'orange',
    social: { linkedin: '#', email: '#' },
  },
  {
    name: 'Fatima Malik',
    role: 'Head of Languages',
    initials: 'FM',
    subjects: ['English', 'Urdu', 'O Level'],
    bio: 'Dedicated to building strong communication and writing skills.',
    variant: 'blue',
    social: { linkedin: '#', email: '#' },
  },
];

const particles = [
  { left: 6,  top: 12, size: 5, color: '#F5A623', dur: '3.4s', delay: '0s'   },
  { left: 93, top: 9,  size: 4, color: '#4a7cf7', dur: '4.2s', delay: '0.8s' },
  { left: 18, top: 80, size: 6, color: '#F5A623', dur: '3.9s', delay: '1.5s' },
  { left: 88, top: 76, size: 4, color: '#4a7cf7', dur: '5.1s', delay: '0.3s' },
  { left: 50, top: 5,  size: 3, color: '#F5A623', dur: '4.6s', delay: '2.1s' },
  { left: 3,  top: 55, size: 5, color: '#4a7cf7', dur: '3.7s', delay: '1.2s' },
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    <section ref={sectionRef} className={styles.teamSection}>

      {/* blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.gridOverlay} />

      {/* particles */}
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
            <span>Our Team</span>
          </div>
          <h2 className={styles.heading}>
            Meet Our <span className={styles.highlight}>Expert Faculty</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Dedicated professionals committed to your academic success
          </p>
        </div>

        {/* Cards */}
        <div className={styles.teamGrid}>
          {team.map((member, index) => {
            const isOrange = member.variant === 'orange';
            const accent     = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const accentA    = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';
            const isHovered  = hoveredIndex === index;

            return (
              <div
                key={index}
                className={styles.teamCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
                  '--accent': accent,
                  '--accent-dark': accentDark,
                  '--accent-a': accentA,
                }}
              >
                {/* top bar */}
                <div className={styles.topBar}
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})`,
                           opacity: isHovered ? 1 : 0 }} />

                {/* bg glow */}
                <div className={styles.bgGlow}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${accentA}0.12) 0%, transparent 70%)`,
                           opacity: isHovered ? 1 : 0 }} />

                {/* avatar */}
                <div className={styles.avatarWrapper}>
                  {/* outer ring */}
                  <div className={styles.avatarRing}
                    style={{ borderColor: isHovered ? accent : 'rgba(255,255,255,0.1)',
                             boxShadow: isHovered ? `0 0 0 4px ${accentA}0.15)` : 'none' }} />
                  {/* avatar circle */}
                  <div className={styles.avatar}
                    style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                             boxShadow: `0 8px 28px ${accentA}0.45)` }}>
                    <span className={styles.initials}>{member.initials}</span>
                  </div>
                  {/* online dot */}
                  <span className={styles.onlineDot}
                    style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
                </div>

                {/* name & role */}
                <h3 className={styles.name}
                  style={{ color: isHovered ? accent : '#ffffff' }}>
                  {member.name}
                </h3>
                <p className={styles.role}>{member.role}</p>

                {/* divider */}
                <div className={styles.cardDivider}
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                           opacity: isHovered ? 1 : 0.2 }} />

                {/* bio */}
                <p className={styles.bio}>{member.bio}</p>

                {/* subject tags */}
                <div className={styles.tags}>
                  {member.subjects.map((s, i) => (
                    <span key={i} className={styles.tag}
                      style={{ background: `${accentA}0.1)`,
                               color: accent,
                               border: `1px solid ${accentA}0.25)` }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* social icons */}
                <div className={styles.socials}>
                  {/* LinkedIn */}
                  <a href={member.social.linkedin} className={styles.socialBtn}
                    style={{ background: isHovered ? `${accentA}0.15)` : 'rgba(255,255,255,0.05)',
                             borderColor: isHovered ? `${accentA}0.4)` : 'rgba(255,255,255,0.1)',
                             color: isHovered ? accent : '#9ca3af' }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Email */}
                  <a href={member.social.email} className={styles.socialBtn}
                    style={{ background: isHovered ? `${accentA}0.15)` : 'rgba(255,255,255,0.05)',
                             borderColor: isHovered ? `${accentA}0.4)` : 'rgba(255,255,255,0.1)',
                             color: isHovered ? accent : '#9ca3af' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.socialIcon}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>

                {/* bottom corner number */}
                <span className={styles.cardNumber}
                  style={{ color: `${accentA}0.05)` }}>
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
