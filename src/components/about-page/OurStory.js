'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './OurStory.module.css';

export default function OurStory() {
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
    <section ref={sectionRef} className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Left Side - Content */}
          <div className={`${styles.contentSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.sectionBadge}>
              <div className={styles.badgeDot}></div>
              <span className={styles.badgeText}>Our Story</span>
            </div>

            <h2 className={styles.heading}>
              A Journey of <span className={styles.highlight}>Excellence</span>
            </h2>

            <div className={styles.divider}></div>

            <p className={styles.description}>
              Founded in 2010, Ayaz Ahmad Academy began with a simple yet powerful vision: 
              to provide world-class O & A Level education that prepares students not just 
              for examinations, but for life itself.
            </p>

            <p className={styles.description}>
              What started as a small institution with a handful of dedicated teachers has 
              grown into one of the region's most respected educational centers, serving 
              thousands of students and maintaining an exceptional track record of academic success.
            </p>

            {/* Timeline */}
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className={styles.timelineContent}>
                  <h4>Cambridge Registration</h4>
                  <p>Officially registered as Cambridge Assessment International Education centre</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className={styles.timelineContent}>
                  <h4>5000+ Alumni</h4>
                  <p>Proud network of successful graduates pursuing careers worldwide</p>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className={styles.timelineContent}>
                  <h4>Award-Winning Institution</h4>
                  <p>Recognized for excellence in education and student development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Grid */}
          <div className={`${styles.imageSection} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageGrid}>
              <div className={`${styles.imageCard} ${styles.large}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/teacher-teaching.jpg"
                    alt="Teacher teaching at Ayaz Ahmad Academy"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/students-studying.jpg"
                    alt="Students studying"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
              <div className={styles.imageCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/images/tutoring.jpg"
                    alt="One-on-one tutoring"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </div>
            <div className={styles.decorativeCircle}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
