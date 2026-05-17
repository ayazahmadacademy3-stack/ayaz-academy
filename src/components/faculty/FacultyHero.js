'use client';

import { useEffect, useState } from 'react';
import { Users, Award, BookOpen, Star } from 'lucide-react';
import styles from './FacultyHero.module.css';

const stats = [
  { icon: <Users className="w-5 h-5" />, value: '20+', label: 'Expert Teachers' },
  { icon: <Award className="w-5 h-5" />, value: '100%', label: 'Qualified' },
  { icon: <BookOpen className="w-5 h-5" />, value: '15+', label: 'Years Experience' },
  { icon: <Star className="w-5 h-5" />, value: '4.9/5', label: 'Rating' },
];

const particles = [
  { left: 8,  top: 15, size: 5, color: '#F5A623', dur: '3.5s', delay: '0s'   },
  { left: 92, top: 12, size: 4, color: '#4a7cf7', dur: '4.2s', delay: '0.8s' },
  { left: 18, top: 85, size: 6, color: '#F5A623', dur: '3.9s', delay: '1.5s' },
  { left: 88, top: 78, size: 4, color: '#4a7cf7', dur: '5.1s', delay: '0.4s' },
];

export default function FacultyHero() {
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
        
        <div className={styles.content} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>
          
          <div className={styles.pill}>
            <span className={styles.pillDot} />
            <span>Our Expert Team</span>
          </div>

          <h1 className={styles.title}>
            Meet Our <span className={styles.highlight}>Dedicated Faculty</span>
          </h1>

          <p className={styles.subtitle}>
            Highly qualified and experienced educators committed to your academic excellence
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
