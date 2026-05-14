'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Achievements.module.css';

const achievements = [
  { icon: '🏆', number: '200+', label: 'A* Grades Achieved' },
  { icon: '🎓', number: '5000+', label: 'Successful Graduates' },
  { icon: '⭐', number: '95%', label: 'Pass Rate' },
  { icon: '🌍', number: '50+', label: 'Countries Represented' }
];

export default function Achievements() {
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
    <section ref={sectionRef} className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.heading}>
            Our <span className={styles.highlight}>Achievements</span>
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`${styles.achievementCard} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{achievement.icon}</div>
              <div className={styles.number}>{achievement.number}</div>
              <div className={styles.label}>{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
