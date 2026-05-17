'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, GraduationCap } from 'lucide-react';
import styles from './FacultyBySubject.module.css';

const facultyData = {
  Physics: [
    {
      name: 'Dr. Ahmed Hassan',
      initials: 'AH',
      qualification: 'PhD in Physics',
      experience: '12 Years',
      specialization: 'Mechanics & Thermodynamics',
      bio: 'Expert in O & A Level Physics with research background',
      variant: 'orange',
    },
    {
      name: 'Sarah Khan',
      initials: 'SK',
      qualification: 'MSc Physics',
      experience: '8 Years',
      specialization: 'Electricity & Magnetism',
      bio: 'Passionate about making physics concepts clear',
      variant: 'blue',
    },
  ],
  Chemistry: [
    {
      name: 'Dr. Fatima Ali',
      initials: 'FA',
      qualification: 'PhD in Chemistry',
      experience: '15 Years',
      specialization: 'Organic Chemistry',
      bio: 'Cambridge examiner with extensive teaching experience',
      variant: 'orange',
    },
    {
      name: 'Usman Malik',
      initials: 'UM',
      qualification: 'MSc Chemistry',
      experience: '10 Years',
      specialization: 'Physical Chemistry',
      bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
  ],
  Mathematics: [
    {
      name: 'Prof. Ayaz Ahmad',
      initials: 'AA',
      qualification: 'MSc Mathematics',
      experience: '15+ Years',
      specialization: 'Pure Math & Statistics',
      bio: 'Founder with passion for mathematical excellence',
      variant: 'orange',
    },
    {
      name: 'Zainab Ahmed',
      initials: 'ZA',
      qualification: 'MSc Mathematics',
      experience: '9 Years',
      specialization: 'Calculus & Algebra',
      bio: 'Making complex mathematics simple and enjoyable',
      variant: 'blue',
    },
    {
      name: 'Hassan Raza',
      initials: 'HR',
      qualification: 'BSc Mathematics',
      experience: '7 Years',
      specialization: 'Mechanics & Statistics',
      bio: 'Young and energetic math educator',
      variant: 'orange',
    },
  ],
  Biology: [
    {
      name: 'Dr. Aisha Siddiqui',
      initials: 'AS',
      qualification: 'PhD in Biology',
      experience: '11 Years',
      specialization: 'Cell Biology & Genetics',
      bio: 'Research scientist turned passionate educator',
      variant: 'orange',
    },
    {
      name: 'Bilal Khan',
      initials: 'BK',
      qualification: 'MSc Biology',
      experience: '8 Years',
      specialization: 'Ecology & Evolution',
      bio: 'Bringing biology to life with practical examples',
      variant: 'blue',
    },
  ],
  English: [
    {
      name: 'Maria Johnson',
      initials: 'MJ',
      qualification: 'MA English Literature',
      experience: '10 Years',
      specialization: 'Language & Composition',
      bio: 'Building strong communication and writing skills',
      variant: 'orange',
    },
    {
      name: 'Ali Raza',
      initials: 'AR',
      qualification: 'MA English',
      experience: '7 Years',
      specialization: 'Literature & Comprehension',
      bio: 'Passionate about English language mastery',
      variant: 'blue',
    },
  ],
  Urdu: [
    {
      name: 'Saba Ayaz',
      initials: 'SA',
      qualification: 'MA Urdu',
      experience: '12 Years',
      specialization: 'Urdu Literature & Grammar',
      bio: 'CEO with deep love for Urdu language and culture',
      variant: 'orange',
    },
    {
      name: 'Faisal Ahmed',
      initials: 'FA',
      qualification: 'MA Urdu',
      experience: '9 Years',
      specialization: 'Poetry & Prose',
      bio: 'Making Urdu literature accessible and enjoyable',
      variant: 'blue',
    },
  ],
  'Computer Science': [
    {
      name: 'Hamza Ali',
      initials: 'HA',
      qualification: 'MSc Computer Science',
      experience: '8 Years',
      specialization: 'Programming & Algorithms',
      bio: 'Teaching coding and computational thinking',
      variant: 'orange',
    },
    {
      name: 'Ayesha Khan',
      initials: 'AK',
      qualification: 'BSc CS',
      experience: '6 Years',
      specialization: 'Web Development & Databases',
      bio: 'Bridging theory and practical applications',
      variant: 'blue',
    },
  ],
};

const particles = [
  { left: 6,  top: 10, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 92, top: 8,  size: 4, color: '#4a7cf7', dur: '4.0s', delay: '0.7s' },
  { left: 20, top: 82, size: 6, color: '#F5A623', dur: '3.7s', delay: '1.4s' },
  { left: 87, top: 78, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
];

export default function FacultyBySubject() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Physics');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const subjects = Object.keys(facultyData);

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

      {/* Animated backgrounds */}
      <div className={styles.stripes} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.dotGrid} />
      
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
            <span>Faculty by Subject</span>
          </div>
          <h2 className={styles.heading}>
            Our <span className={styles.highlight}>Subject Experts</span>
          </h2>
          <div className={styles.divider} />
        </div>

        {/* Subject Tabs */}
        <div className={styles.tabsWrapper} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
        }}>
          <div className={styles.tabs}>
            {subjects.map((subject) => (
              <button
                key={subject}
                className={`${styles.tab} ${activeTab === subject ? styles.active : ''}`}
                onClick={() => setActiveTab(subject)}
              >
                <GraduationCap className="w-4 h-4" />
                <span>{subject}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Cards */}
        <div className={styles.grid} key={activeTab}>
          {facultyData[activeTab].map((teacher, index) => {
            const isOrange = teacher.variant === 'orange';
            const accent = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={styles.card}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  opacity: 1,
                  transform: 'translateY(0) scale(1)',
                  animation: `${styles.fadeInUp} 0.6s ease ${index * 0.1}s both`,
                  '--accent': accent,
                  '--accent-dark': accentDark,
                }}
              >
                {/* Top bar */}
                <div className={styles.topBar} style={{
                  opacity: isHovered ? 1 : 0,
                }} />

                {/* Corner glow */}
                <div className={styles.cornerGlow} style={{
                  opacity: isHovered ? 1 : 0,
                }} />

                {/* Avatar */}
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatarRing} style={{
                    borderColor: isHovered ? accent : 'rgba(255,255,255,0.1)',
                  }} />
                  <div className={styles.avatar} style={{
                    background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                  }}>
                    <span className={styles.initials}>{teacher.initials}</span>
                  </div>
                  <span className={styles.onlineDot} style={{
                    background: accent,
                  }} />
                </div>

                {/* Name */}
                <h3 className={styles.name} style={{
                  color: isHovered ? accent : '#ffffff',
                }}>{teacher.name}</h3>

                {/* Qualification */}
                <p className={styles.qualification}>{teacher.qualification}</p>

                {/* Divider */}
                <div className={styles.cardDivider} style={{
                  opacity: isHovered ? 1 : 0.2,
                }} />

                {/* Info grid */}
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Experience</span>
                    <span className={styles.infoValue}>{teacher.experience}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Specialization</span>
                    <span className={styles.infoValue}>{teacher.specialization}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className={styles.bio}>{teacher.bio}</p>

                {/* Social icons */}
                <div className={styles.socials}>
                  <button className={styles.socialBtn} style={{
                    background: isHovered ? 'rgba(255, 165, 0, 0.15)' : 'rgba(255,255,255,0.05)',
                    borderColor: isHovered ? 'rgba(255, 165, 0, 0.4)' : 'rgba(255,255,255,0.1)',
                    color: isHovered ? accent : '#9ca3af',
                  }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className={styles.socialBtn} style={{
                    background: isHovered ? 'rgba(255, 165, 0, 0.15)' : 'rgba(255,255,255,0.05)',
                    borderColor: isHovered ? 'rgba(255, 165, 0, 0.4)' : 'rgba(255,255,255,0.1)',
                    color: isHovered ? accent : '#9ca3af',
                  }}>
                    <Mail className="w-4 h-4" />
                  </button>
                </div>

                {/* Watermark */}
                {/* <span className={styles.watermark}>0{index + 1}</span> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
