'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Ahmed',
    grade: 'A Level Graduate',
    image: '👩‍🎓',
    rating: 5,
    text: 'Ayaz Ahmad Academy transformed my academic journey. The teachers are incredibly supportive and the teaching methodology is outstanding. I achieved 3 A*s in my A Levels!',
    achievement: '3 A*s in A Levels'
  },
  {
    id: 2,
    name: 'Muhammad Hassan',
    grade: 'O Level Student',
    image: '👨‍🎓',
    rating: 5,
    text: 'The best decision I made was joining this academy. The faculty is highly qualified and they make even the most difficult concepts easy to understand. Highly recommended!',
    achievement: '8 A*s in O Levels'
  },
  {
    id: 3,
    name: 'Fatima Khan',
    grade: 'A Level Graduate',
    image: '👩‍🎓',
    rating: 5,
    text: 'Exceptional teaching quality and a nurturing environment. The academy prepared me not just for exams but for university life. Forever grateful for the guidance I received here.',
    achievement: 'Oxford University Admission'
  },
  {
    id: 4,
    name: 'Ali Raza',
    grade: 'O Level Graduate',
    image: '👨‍🎓',
    rating: 5,
    text: 'The personalized attention and comprehensive study materials helped me excel in my O Levels. The teachers go above and beyond to ensure every student succeeds.',
    achievement: '9 A*s in O Levels'
  },
  {
    id: 5,
    name: 'Ayesha Malik',
    grade: 'A Level Student',
    image: '👩‍🎓',
    rating: 5,
    text: 'Amazing academy with world-class facilities and dedicated teachers. The interactive teaching methods and regular assessments kept me motivated throughout my journey.',
    achievement: 'Top in District'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className={styles.testimonialSection}>
      {/* Animated Background Blobs */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>

      {/* Grid Overlay */}
      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">Students Say</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Hear from our successful students who have achieved excellence with us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className={styles.testimonialWrapper}>
          {/* Background Decorations */}
          <div className={styles.bgDecoration1}></div>
          <div className={styles.bgDecoration2}></div>
          
          {/* Quote Icon */}
          <div className={styles.quoteIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          <div className={`${styles.testimonialCard} ${isAnimating ? styles[direction] : ''}`}>
            {/* Student Image */}
            <div className={styles.imageWrapper}>
              <div className={styles.imageCircle}>
                <span className={styles.emoji}>{currentTestimonial.image}</span>
              </div>
              <div className={styles.achievementBadge}>
                🏆 {currentTestimonial.achievement}
              </div>
            </div>

            {/* Star Rating */}
            <div className={styles.rating}>
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className={styles.star} style={{ animationDelay: `${i * 0.1}s` }}>
                  ⭐
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className={styles.testimonialText}>
              "{currentTestimonial.text}"
            </p>

            {/* Student Info */}
            <div className={styles.studentInfo}>
              <h4 className={styles.studentName}>{currentTestimonial.name}</h4>
              <p className={styles.studentGrade}>{currentTestimonial.grade}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNext}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsContainer}>
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
