'use client';

import { useEffect, useState } from 'react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.heroSection}>
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
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <span className={styles.breadcrumbItem}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={`${styles.breadcrumbItem} ${styles.active}`}>About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            About <span className={styles.highlight}>Ayaz Ahmad Academy</span>
          </h1>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Description */}
          <p className={styles.description}>
            Empowering students with world-class O & A Level education for over 15 years. 
            We are committed to academic excellence, character building, and preparing 
            students for a successful future.
          </p>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years of Excellence</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>5000+</div>
              <div className={styles.statLabel}>Alumni Network</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Expert Faculty</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaWrapper}>
            <button className="btn-primary">
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
