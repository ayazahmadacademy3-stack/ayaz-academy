'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Users, TrendingUp } from 'lucide-react';
import styles from './CoursesHero.module.css';

const stats = [
  { icon: <BookOpen className="w-5 h-5" />, value: '20+', label: 'Courses' },
  { icon: <Award className="w-5 h-5" />, value: '95%', label: 'Success Rate' },
  { icon: <Users className="w-5 h-5" />, value: '5000+', label: 'Students' },
  { icon: <TrendingUp className="w-5 h-5" />, value: '15+', label: 'Years' },
];

const particles = [
  { left: 8,  top: 15, size: 5, color: '#F5A623', dur: '3.5s', delay: '0s'   },
  { left: 92, top: 12, size: 4, color: '#4a7cf7', dur: '4.2s', delay: '0.8s' },
  { left: 18, top: 85, size: 6, color: '#F5A623', dur: '3.9s', delay: '1.5s' },
  { left: 88, top: 78, size: 4, color: '#4a7cf7', dur: '5.1s', delay: '0.4s' },
  { left: 52, top: 8,  size: 3, color: '#F5A623', dur: '4.6s', delay: '2.1s' },
  { left: 5,  top: 55, size: 5, color: '#4a7cf7', dur: '3.7s', delay: '1.2s' },
];

export default function CoursesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.hero}>
      
      {/* Animated backgrounds */}
      <div className={styles.stripes} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.dotGrid} />
      
      {/* Particles */}
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
        
        {/* Main content */}
        <div className={styles.content} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>
          
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Cambridge Registered Centre</span>
          </div>

          <h1 className={styles.title}>
            Explore Our <span className={styles.highlight}>O & A Level</span><br />
            Courses
          </h1>

          <p className={styles.subtitle}>
            Comprehensive programs designed to help students excel in Cambridge examinations
            with expert guidance and proven teaching methodologies
          </p>

          <div className={styles.divider} />

          {/* Stats grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard} style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.3 + index * 0.1}s, transform 0.8s ease ${0.3 + index * 0.1}s`,
              }}>
                <div className={styles.statIcon}>
                  {stat.icon}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
