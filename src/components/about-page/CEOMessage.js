'use client';

import { useEffect, useRef, useState } from 'react';
import { Quote, Sparkles, Award, Users, TrendingUp } from 'lucide-react';
import styles from './CEOMessage.module.css';

/* Fixed particle positions */
const particles = [
  { left: 5,  top: 12, size: 5, color: '#F5A623', dur: '3.5s', delay: '0s'   },
  { left: 93, top: 9,  size: 4, color: '#4a7cf7', dur: '4.2s', delay: '0.8s' },
  { left: 18, top: 85, size: 6, color: '#F5A623', dur: '3.9s', delay: '1.5s' },
  { left: 88, top: 80, size: 4, color: '#4a7cf7', dur: '5.1s', delay: '0.4s' },
  { left: 52, top: 6,  size: 3, color: '#F5A623', dur: '4.6s', delay: '2.1s' },
  { left: 7,  top: 55, size: 5, color: '#4a7cf7', dur: '3.7s', delay: '1.2s' },
  { left: 77, top: 42, size: 3, color: '#F5A623', dur: '4.3s', delay: '2.7s' },
  { left: 42, top: 93, size: 5, color: '#4a7cf7', dur: '3.1s', delay: '0.6s' },
];

const highlights = [
  { icon: <Award className="w-5 h-5" />, text: '15+ Years Excellence', color: 'orange' },
  { icon: <Users className="w-5 h-5" />, text: '5000+ Graduates', color: 'blue' },
  { icon: <TrendingUp className="w-5 h-5" />, text: '95% Success Rate', color: 'orange' },
];

export default function CEOMessage() {
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

      {/* ── BG: diagonal stripes ── */}
      <div className={styles.stripes} />

      {/* ── BG: orbs ── */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* ── BG: dot grid ── */}
      <div className={styles.dotGrid} />

      {/* ── BG: particles ── */}
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
            <span>Leadership</span>
          </div>
          <h2 className={styles.heading}>
            What Our <span className={styles.highlight}>CEO Says</span>
          </h2>
          <div className={styles.divider} />
        </div>

        {/* Main Card */}
        <div className={styles.mainCard} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
          transition: 'opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s',
        }}>

          {/* Top accent bar */}
          <div className={styles.topBar} />

          {/* Corner glow */}
          <div className={styles.cornerGlow} />

          <div className={styles.cardGrid}>

            {/* Left Side - Avatar */}
            <div className={styles.leftSide}>
              {/* Decorative circles */}
              <div className={styles.decorCircle1} />
              <div className={styles.decorCircle2} />
              <div className={styles.decorCircle3} />

              {/* Avatar container */}
              <div className={styles.avatarContainer}>
                <div className={styles.avatarRing1} />
                <div className={styles.avatarRing2} />
                <div className={styles.avatarCircle}>
                  {/* Professional woman icon */}
                  <svg className={styles.avatarIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                {/* Floating quote badge */}
                <div className={styles.quoteBadge}>
                  <Quote className="w-5 h-5" />
                </div>

                {/* Sparkle decorations */}
                <Sparkles className={styles.sparkle1} />
                <Sparkles className={styles.sparkle2} />
              </div>

              {/* CEO Name on left side */}
              <div className={styles.ceoNameLeft}>
                <h3>Saba Ayaz</h3>
                <p>Founder & CEO</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={styles.rightSide}>
              
              {/* Opening quote */}
              <Quote className={styles.openingQuote} />

              {/* Message content */}
              <div className={styles.messageContent}>
                <p className={styles.paragraph}>
                  At <span className={styles.brandName}>Ayaz Ahmad Academy</span>, 
                  we believe that every student has the potential to achieve excellence. 
                  Our mission is not just to teach, but to <strong>inspire</strong>, 
                  <strong>nurture</strong>, and <strong>empower</strong> young minds 
                  to reach their fullest potential.
                </p>

                <p className={styles.paragraph}>
                  With over <span className={styles.accent}>15 years of experience</span> in 
                  O & A Level education, we have built a legacy of academic excellence and 
                  character development. Our dedicated team of educators works tirelessly 
                  to create an environment where students don't just learn—they <strong>thrive</strong>.
                </p>

                <p className={styles.paragraph}>
                  We are proud to be a <span className={styles.accent}>Cambridge Registered Centre</span>, 
                  committed to maintaining the highest standards of education and preparing 
                  our students for success in their academic journey and beyond.
                </p>
              </div>

              {/* Signature divider */}
              <div className={styles.signatureDivider}>
                <div className={styles.signatureLine} />
                <Sparkles className={styles.signatureIcon} />
                <div className={styles.signatureLine} />
              </div>

              {/* CEO info bottom */}
              <div className={styles.ceoInfo}>
                <div className={styles.ceoDetails}>
                  <h4>Saba Ayaz</h4>
                  <p>Founder & CEO</p>
                  <span>Ayaz Ahmad Academy</span>
                </div>
                {/* <div className={styles.ceoDecor}>
                  <div className={styles.decorBar1} />
                  <div className={styles.decorBar2} />
                  <div className={styles.decorBar3} />
                </div> */}
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Highlights */}
        <div className={styles.highlightsGrid} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
        }}>
          {highlights.map((item, index) => (
            <div key={index} className={styles.highlightCard}
              style={{
                '--accent': item.color === 'orange' ? '#F5A623' : '#4a7cf7',
                '--accent-dark': item.color === 'orange' ? '#cc7a00' : '#1a3fa8',
              }}>
              <div className={styles.highlightIcon}>
                {item.icon}
              </div>
              <span className={styles.highlightText}>{item.text}</span>
              <div className={styles.highlightGlow} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
