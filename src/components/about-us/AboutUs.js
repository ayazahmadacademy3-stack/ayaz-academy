'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './AboutUs.module.css';

const features = [
  {
    icon: (
      <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cambridge Registered',
    description: 'Official Cambridge Assessment International Education centre'
  },
  {
    icon: (
      <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Expert Faculty',
    description: 'Highly qualified and experienced teachers'
  },
  {
    icon: (
      <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Modern Approach',
    description: 'Interactive and technology-driven learning'
  },
  {
    icon: (
      <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Proven Results',
    description: '95% success rate in O & A Level examinations'
  }
];

const stats = [
  { number: '15+', label: 'Years' },
  { number: '5000+', label: 'Students' },
  { number: '95%', label: 'Success' },
  { number: '20+', label: 'Teachers' }
];

export default function AboutUs() {
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
    <section ref={sectionRef} className={styles.aboutSection}>
      {/* Background Elements */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>

      {/* Grid Overlay */}
      <div className={styles.gridOverlay}></div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        <div className={`${styles.particle} ${styles.particle1}`}></div>
        <div className={`${styles.particle} ${styles.particle2}`}></div>
        <div className={`${styles.particle} ${styles.particle3}`}></div>
        <div className={`${styles.particle} ${styles.particle4}`}></div>
        <div className={`${styles.particle} ${styles.particle5}`}></div>
        <div className={`${styles.particle} ${styles.particle6}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* LEFT SIDE - Image */}
          <div 
            className={`${styles.imageSection} ${isVisible ? styles.visible : ''}`}
          >
            <div className={styles.imageContainer}>
              {/* Decorative Elements */}
              <div className={styles.imageDecoration1}></div>
              <div className={styles.imageDecoration2}></div>
              <div className={styles.imageDecoration3}></div>

              {/* Main Image */}
              <div className={styles.mainImageWrapper}>
                <div className={styles.imageContent}>
                  <Image
                    src="/images/students-studying.jpg"
                    alt="Students studying at Ayaz Ahmad Academy"
                    fill
                    className={styles.mainImage}
                    priority
                  />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className={styles.floatingStatsCard}>
                <div className={styles.statsGrid}>
                  {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Badge */}
              <div className={styles.experienceBadge}>
                <div className={styles.badgeIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className={styles.badgeText}>
                  <div className={styles.badgeNumber}>15+</div>
                  <div className={styles.badgeLabel}>Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div 
            className={`${styles.contentSection} ${isVisible ? styles.visible : ''}`}
          >
            {/* Section Badge */}
            <div className={styles.sectionBadge}>
              <div className={styles.badgeDot}></div>
              <span className={styles.badgeText}>About Us</span>
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Empowering Students to{' '}
              <span className={styles.highlight}>Achieve Excellence</span>
            </h2>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Description */}
            <p className={styles.description}>
              Ayaz Ahmad Academy has been a beacon of academic excellence for over 15 years, 
              providing world-class O & A Level education. As an officially registered Cambridge 
              Assessment International Education centre, we are committed to nurturing young minds 
              and preparing them for a successful future.
            </p>

            <p className={styles.description}>
              Our experienced faculty, modern teaching methodologies, and state-of-the-art facilities 
              create an environment where students don't just learn—they thrive. We believe in 
              developing critical thinking, creativity, and confidence in every student.
            </p>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={styles.featureCard}
                  style={{ 
                    animationDelay: `${0.4 + index * 0.15}s`,
                    transitionDelay: `${index * 0.05}s`
                  }}
                >
                  <div className={styles.featureIconWrapper}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <button className="btn-primary">
                <span>Learn More</span>
              </button>
              <button className="btn-outline">
                <span>Register Now</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
