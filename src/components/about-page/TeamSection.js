'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

const team = [
  { name: 'Dr. Ayaz Ahmad', role: 'Founder & Principal', emoji: '👨‍🏫' },
  { name: 'Sarah Khan', role: 'Head of Sciences', emoji: '👩‍🔬' },
  { name: 'Ahmed Ali', role: 'Head of Mathematics', emoji: '👨‍💼' },
  { name: 'Fatima Malik', role: 'Head of Languages', emoji: '👩‍🏫' }
];

export default function TeamSection() {
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
    <section ref={sectionRef} className={styles.teamSection}>
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sectionBadge}>
            <div className={styles.badgeDot}></div>
            <span className={styles.badgeText}>Our Team</span>
          </div>

          <h2 className={styles.heading}>
            Meet Our <span className={styles.highlight}>Expert Faculty</span>
          </h2>

          <div className={styles.divider}></div>

          <p className={styles.subtitle}>
            Dedicated professionals committed to your academic success
          </p>
        </div>

        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div 
              key={index}
              className={`${styles.teamCard} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.avatar}>{member.emoji}</div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
