'use client';

import { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import styles from './CoursesGrid.module.css';

const courses = [
  {
    level: 'O Level',
    title: 'Mathematics',
    code: '4024',
    description: 'Comprehensive coverage of O Level Mathematics syllabus with problem-solving techniques',
    duration: '2 Years',
    students: '150+',
    features: ['Core & Extended', 'Past Papers', 'Mock Exams', 'Expert Teachers'],
    variant: 'orange',
  },
  {
    level: 'O Level',
    title: 'Physics',
    code: '5054',
    description: 'In-depth study of physical concepts with practical experiments and applications',
    duration: '2 Years',
    students: '120+',
    features: ['Theory & Practical', 'Lab Sessions', 'Past Papers', 'Revision Classes'],
    variant: 'blue',
  },
  {
    level: 'O Level',
    title: 'Chemistry',
    code: '5070',
    description: 'Complete chemistry curriculum with hands-on laboratory experience',
    duration: '2 Years',
    students: '130+',
    features: ['Theory & Practical', 'Lab Work', 'Past Papers', 'Study Materials'],
    variant: 'orange',
  },
  {
    level: 'O Level',
    title: 'Biology',
    code: '5090',
    description: 'Detailed exploration of biological sciences with practical demonstrations',
    duration: '2 Years',
    students: '140+',
    features: ['Theory & Practical', 'Diagrams', 'Past Papers', 'Revision Notes'],
    variant: 'blue',
  },
  {
    level: 'O Level',
    title: 'English Language',
    code: '1123',
    description: 'Develop strong communication skills in reading, writing, and comprehension',
    duration: '2 Years',
    students: '200+',
    features: ['Reading & Writing', 'Speaking Skills', 'Past Papers', 'Practice Tests'],
    variant: 'orange',
  },
  {
    level: 'O Level',
    title: 'Computer Science',
    code: '2210',
    description: 'Programming fundamentals and computational thinking for the digital age',
    duration: '2 Years',
    students: '100+',
    features: ['Programming', 'Theory', 'Past Papers', 'Practical Projects'],
    variant: 'blue',
  },
  {
    level: 'A Level',
    title: 'Mathematics',
    code: '9709',
    description: 'Advanced mathematical concepts including Pure Math, Mechanics, and Statistics',
    duration: '2 Years',
    students: '80+',
    features: ['Pure Math', 'Mechanics', 'Statistics', 'Past Papers'],
    variant: 'orange',
  },
  {
    level: 'A Level',
    title: 'Physics',
    code: '9702',
    description: 'Advanced physics covering mechanics, electricity, waves, and modern physics',
    duration: '2 Years',
    students: '70+',
    features: ['Theory', 'Practical', 'Past Papers', 'Problem Solving'],
    variant: 'blue',
  },
  {
    level: 'A Level',
    title: 'Chemistry',
    code: '9701',
    description: 'Advanced chemistry with organic, inorganic, and physical chemistry',
    duration: '2 Years',
    students: '75+',
    features: ['Organic', 'Inorganic', 'Physical', 'Past Papers'],
    variant: 'orange',
  },
];

const particles = [
  { left: 6,  top: 10, size: 5, color: '#F5A623', dur: '3.2s', delay: '0s'   },
  { left: 92, top: 8,  size: 4, color: '#4a7cf7', dur: '4.0s', delay: '0.7s' },
  { left: 20, top: 82, size: 6, color: '#F5A623', dur: '3.7s', delay: '1.4s' },
  { left: 87, top: 78, size: 4, color: '#4a7cf7', dur: '5.0s', delay: '0.3s' },
  { left: 50, top: 4,  size: 3, color: '#F5A623', dur: '4.4s', delay: '2.0s' },
  { left: 3,  top: 54, size: 5, color: '#4a7cf7', dur: '3.6s', delay: '1.1s' },
];

export default function CoursesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [animated, setAnimated]   = useState(false);
  const [filter, setFilter]       = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          // after all cards finish entrance (~0.7s + 9*0.08s = ~1.5s), remove delay
          setTimeout(() => setAnimated(true), 1600);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(c => c.level === filter);

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
            <span>Our Courses</span>
          </div>
          <h2 className={styles.heading}>
            Choose Your <span className={styles.highlight}>Learning Path</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Expert-led courses designed to help you excel in Cambridge examinations
          </p>
        </div>

        {/* Filter buttons */}
        <div className={styles.filterBar} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
        }}>
          <button 
            className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Courses
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'O Level' ? styles.active : ''}`}
            onClick={() => setFilter('O Level')}
          >
            O Level
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === 'A Level' ? styles.active : ''}`}
            onClick={() => setFilter('A Level')}
          >
            A Level
          </button>
        </div>

        {/* Courses grid */}
        <div className={styles.grid}>
          {filteredCourses.map((course, index) => {
            const isOrange = course.variant === 'orange';
            const accent = isOrange ? '#F5A623' : '#4a7cf7';
            const accentDark = isOrange ? '#cc7a00' : '#1a3fa8';
            const accentA = isOrange ? 'rgba(245,166,35,' : 'rgba(74,124,247,';

            return (
              <div
                key={index}
                className={`${styles.courseCard} ${isVisible ? styles.courseCardVisible : ''}`}
                style={{
                  transitionDelay: animated ? '0s' : `${index * 0.08}s`,
                  '--accent': accent,
                  '--accent-dark': accentDark,
                  '--accent-alpha': accentA,
                }}
              >
                {/* Top bar */}
                <div className={styles.topBar} />

                {/* Corner glow */}
                <div className={styles.cornerGlow} />

                {/* Level badge */}
                <div className={styles.levelBadge}>
                  <Award className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>

                {/* Icon */}
                <div className={styles.iconBox}>
                  <BookOpen className="w-8 h-8" />
                  <div className={styles.iconRing} />
                </div>

                {/* Title & Code */}
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseCode}>Code: {course.code}</p>

                {/* Divider */}
                <div className={styles.cardDivider} />

                {/* Description */}
                <p className={styles.description}>{course.description}</p>

                {/* Meta info */}
                <div className={styles.metaInfo}>
                  <div className={styles.metaItem}>
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Features */}
                <div className={styles.features}>
                  {course.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <button className={styles.ctaBtn}>
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button> */}

                {/* Watermark */}
                {/* <span className={styles.watermark}>{String(index + 1).padStart(2, '0')}</span> */}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
