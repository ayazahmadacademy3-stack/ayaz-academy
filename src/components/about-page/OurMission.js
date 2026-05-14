'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './OurMission.module.css';

const missions = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Our Mission',
    description: 'To provide exceptional O & A Level education that empowers students with knowledge, skills, and values to excel academically and become responsible global citizens.'
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Our Vision',
    description: 'To be the leading educational institution recognized for academic excellence, innovative teaching, and holistic student development, preparing future leaders who make a positive impact on society.'
  }
];

export default function OurMission() {
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
    <section ref={sectionRef} className={styles.missionSection}>
      {/* Background Elements */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {missions.map((mission, index) => (
            <div 
              key={index}
              className={`${styles.missionCard} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  {mission.icon}
                </div>
                <div className={styles.iconGlow}></div>
              </div>

              <h3 className={styles.title}>{mission.title}</h3>
              <div className={styles.divider}></div>
              <p className={styles.description}>{mission.description}</p>

              <div className={styles.decorativeCorner}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
