'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, BookOpen, TrendingUp, Target, Zap } from 'lucide-react';
import styles from './WhyChooseCourses.module.css';

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Expert Teachers',
    description: 'Learn from highly qualified and experienced Cambridge-certified educators',
    variant: 'orange',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Comprehensive Materials',
    description: 'Access to complete study materials, past papers, and revision notes',
    variant: 'blue',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Small Class Sizes',
    description: 'Personalized attention with limited students per class for better learning',
    variant: 'orange',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Focused Approach',
    description: 'Targeted teaching methods designed specifically for Cambridge examinations',
    variant: 'blue',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '95% Success Rate',
    description: 'Proven track record of excellent results and student achievements',
    variant: 'orange',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Modern Facilities',
    description: 'State-of-the-art classrooms and laboratories for practical learning',
    variant: 'blue',
  },
];

const particles = [
  { left: 7,  top: 14, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 91, top: 8,  size: 4, color: '#4a7cf7', dur: '4.1s', delay: '0.7s' },
  { left: 22, top: 78, size: 6, color: '#F5A623', dur: '3.8s', delay: '1.4s' },
  { left: 86, top: 82, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 48, top: 4,  size: 3, color: '#F5A623', dur: '4.5s', delay: '2.0s' },
  { left: 4,  top: 52, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
];

export default function WhyChooseCourses() {
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

      {/* Animated backgrounds */}
      <div className={styles.stripes} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.dotGrid} />
      
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
            <span>Why Choose Us</span>
          </div>
          <h2 className={styles.heading}>
            What Makes Our <span className={styles.highlight}>Courses Special</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Experience excellence in education with our proven teaching methods and dedicated support
          </p>
        </div>

        {/* Reasons grid */}
        <div className={styles.grid}>
          {reasons.map((reason, index) => {
            const isOrange = reason.variant === 'orange';
            const accent = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const accentA = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

            return (
              <div
                key={index}
                className={styles.reasonCard}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.93)',
                  transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s,
                               transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
                  '--accent': accent,
                  '--accent-dark': accentDark,
                  '--accent-alpha': accentA,
                }}
              >
                {/* Top bar */}
                <div className={styles.topBar} />

                {/* Corner glow */}
                <div className={styles.cornerGlow} />

                {/* Number watermark */}
                <span className={styles.watermark}>0{index + 1}</span>

                {/* Icon */}
                <div className={styles.iconBox}>
                  {reason.icon}
                  <div className={styles.iconRing} />
                </div>

                {/* Title */}
                <h3 className={styles.title}>{reason.title}</h3>

                {/* Divider */}
                <div className={styles.cardDivider} />

                {/* Description */}
                <p className={styles.description}>{reason.description}</p>

                {/* Bottom line */}
                <div className={styles.bottomLine} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
