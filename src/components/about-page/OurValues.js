'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './OurValues.module.css';

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Building trust through honesty and ethical practices'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Embracing modern teaching methods and technology'
  },
  {
    icon: '❤️',
    title: 'Compassion',
    description: 'Creating a supportive and caring learning environment'
  },
  {
    icon: '🌟',
    title: 'Growth',
    description: 'Fostering continuous learning and personal development'
  },
  {
    icon: '🎓',
    title: 'Achievement',
    description: 'Celebrating success and encouraging ambition'
  }
];

export default function OurValues() {
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
    <section ref={sectionRef} className={styles.valuesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeDot}></div>
            <span className={styles.badgeText}>Our Values</span>
          </div>

          <h2 className={styles.heading}>
            The <span className={styles.highlight}>Principles</span> We Live By
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.subtitle}>
            Our core values guide everything we do and shape the culture of our academy
          </p>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index}
              className={`${styles.valueCard} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{value.icon}</span>
              </div>
              <h3 className={styles.title}>{value.title}</h3>
              <p className={styles.description}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
