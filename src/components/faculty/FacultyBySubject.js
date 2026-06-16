'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import styles from './FacultyBySubject.module.css';

const facultyData = {
  Physics: [
    {
      name: 'Asghar Khan',
      image: '/phy-img/phy1.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '18 Years',
      course: "O-Levels (5054), IGCSE (0625), A-levels (9702)",
      board: 'IGCSE/ GCE/ Olevel  / A-level / AQA ',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
    {
      name: 'Kashif Anees',
      image: '/phy-img/phy2.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '10 Years',
      course: "Codes: 5054/0625/9702/4PH1/XPH11",
      board: 'Caie edexcel',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
    {
      name: 'Arooj Kainat',
      image: '/phy-img/phy3.jpeg',
      course: "Physics (0625)",
      experience: "9 years",
      board: 'IGCSE, GCSE, Edexecl, Fedral',
      variant: 'orange',
    }
  ],
  Chemistry: [
     {
      name: 'Osama Shahab',
      image: '/chem-img/chem3.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '7 Years',
      course: "O-Levels (5070), IGCSE (0620), A-levels (9701)",
      board: 'Cambridge and Edexcel',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
    {
      name: 'Syed Mujeeb Hussain',
      image: '/chem-img/chem2.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '6 Years',
      course: "O-Levels, IGCSE, A-levels, Edexcel IGCSE, Edexcel IAL",
      board: 'Cambridge and Edexcel',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
    {
      name: 'Sir Nayyer Ahmed',
      image: '/chem-img/chem1.jpeg',
      course: "Chemistry (GCE & IGCSE) (5070 & 0620)",
      experience: "1 Year Experience at St. Patrick's High School & Karachi Public School Jauhar Campus, 1 Year Experience at DHA College and Schooling System",
      board: 'Cambridge',
      variant: 'orange',
    }
  ],
  Mathematics: [
    {
      name: 'Arooj Kainat',
      image: '/math-img/math1.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '9 Years',
      course: "Codes: (0580), (4024)",
      board: 'IGCSE, GCSE, Edexecl, Fedral',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
    {
      name: 'Furqan Khatri',
      image: '/math-img/math2.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '6 Years',
      course: "Mathematics",
      board: 'O levels, Alevels, IGCSE, GCSE, Edexcel, OCR, CAIE ',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
    {
      name: 'Muhammad Bin Asim',
      image: '/math-img/math3.jpeg',
      course: "Codes: (4024), (0580)",
      experience: "3 years",
      board: 'O levels and IGCSE',
      variant: 'orange',
    },
    {
      name: 'Faheem Galaria ',
      image: '/math-img/math4.jpeg',
      // qualification: 'MSc Chemistry',
      // experience: '6 Years',
      course: "Mathematics",
      board: 'O levels, AlevelsEdexcel AQA Mathematics',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
    {
      name: 'Sir yousuf panwala',
      image: '/math-img/math5.jpeg',
      course: "Codes: (0580), (4024)",
      experience: "3 years",
      board: 'O-levels IGCSE, A-levels',
      variant: 'orange',
    }
  ],
  ICT: [
    {
      name: 'Miss Fatima Ashraf',
      image: '/ict-img/ict1.jpeg',
      course: "ICT (0417), CS(0478), IT(9626), CS(9618)",
      // experience: "3 years",
      // board: 'O-levels IGCSE, A-levels',
      variant: 'orange',
    }
  ],
  English: [
    {
      name: 'Maryam Ansari',
      image: '/eng-img/eng1.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '13 Years',
      course: "Codes: (0510), (0511), (0876), (0861), (9093), (9096), (0475), (1123)",
      board: 'IGCSE olevels alevels Pearson edexcel ',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
    {
      name: 'Ayesha Abu Bakar',
      image: '/eng-img/eng2.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '13 Years',
      course: "English (0510)",
      board: 'Cambridge, American Board',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
    {
      name: 'Syed Kashif Abbas Rizvi',
      image: '/eng-img/eng3.jpeg',
      course: "Codes: (1123), (0510), (0500), (9093), (4ea1), (4ea2)",
      experience: "12 years",
      board: 'IGCSE ,Edexcel Pearson, AQA',
      variant: 'orange',
    }
  ],
  Economics: [
    {
      name: 'Abdul Hadi',
      image: '/eco-img/eco.jpeg',
      // qualification: 'MSc Chemistry',
      experience: '7 Years',
      course: "Codes: (2281), (0455), (9708)",
      board: 'O-level, IGCSE, A-levels ',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
    {
      name: 'Miss Shanila Farhan',
      image: '/eco-img/eco.jpeg',
      // qualification: 'MSc Chemistry',
      // experience: '13 Years',
      course: "Economics",
      board: 'O-level, IGCSE, A-levels',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
  ],
  Urdu: [
     {
      name: 'Ali Mehdi',
      image: '/urdu-img/urd1.jpeg',
      imagePosition: '75% -15%',
      // qualification: 'MSc Chemistry',
      experience: '10 Years',
      course: "O-Levels, IGCSE (3248, 0539)",
      board: 'Cambridge',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
     {
      name: 'Bushra Nadeem',
      image: '/images/faculty/urdu.jpg',
      // qualification: 'MSc Chemistry',
      experience: '2 Years',
      course: "IGCSE, O-Levels (0539, 2438)",
      board: 'Cambridge',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
  ],

  "Pak.Studies": [
     {
      name: 'Mashal Ahmed',
      image: '/pak-img/pak1.jpeg',
      // imagePosition: '75% -15%',
      // qualification: 'MSc Chemistry',
      experience: '5 Years',
      course: "Codes: (2059), (0448)",
      board: 'O Levels & IGSCE',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'orange',
    },
     {
      name: 'Waqas Ashraf ',
      image: '/pak-img/pak2.png',
      // qualification: 'MSc Chemistry',
      // experience: '2 Years',
      course: "Pakistan-Studies",
      board: 'IGCSE, O-levels',
      // bio: 'Specialist in practical chemistry and lab work',
      variant: 'blue',
    },
  ],
  'Accounting': [
    {
      name: 'Ayaz Ahmad',
      image: '/acc-img/acc1.png',
      course: "IGCSE Accounting (0452), O level Accounting (7707), A level Accounting (9706)",
      experience: "5+ years",
      board: 'IGCSE / O level / A Level',
      variant: 'orange',
    },
  ],
   'Business': [
    {
      name: 'Atique Maniya',
      image: '/business-img/busi1.jpeg',
      course: "Codes: (7115), (0450), (9609)",
      experience: "18 years",
      board: 'IGCSE / O level / A Level',
      variant: 'orange',
    },
  ],

  'Computer-Science': [
    {
      name: 'Sir Afham Saya',
      image: '/comp-img/comp1.jpeg',
      course: "IGCSE(2210), O-levels(0478), A-Levels(9618)",
      // experience: "18 years",
      board: 'IGCSE / O level / A Level',
      variant: 'orange',
    },
  ],

    'Biology': [
    {
      name: 'Abdul Qadir ',
      image: '/bio-img/bio1.jpeg',
      course: "Biology",
      // experience: "18 years",
      board: 'Cambridge, Pearson edexcel, oxford AQA',
      variant: 'orange',
    },
  ],

      'Islamiat': [
    {
      name: 'Sir Bilal Sujela',
      image: '/isl-img/isl1.png',
      course: "Codes: (0493), GCSE(2058)",
      // experience: "18 years",
      board: 'IGCSE / O level / A Level',
      variant: 'orange',
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
                <div
                  className={styles.avatarWrapper}
                  style={{ '--img-position': teacher.imagePosition || 'top center' }}
                >
                  <div className={styles.avatarRing} style={{
                    borderColor: isHovered ? accent : 'rgba(255,255,255,0.1)',
                  }} />
                  <div className={styles.avatar} style={{
                    background: `linear-gradient(135deg, ${accent}, ${accentDark})`,
                    boxShadow: `0 10px 30px ${accent}66`,
                  }}>
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      sizes="100px"
                      className={styles.avatarImg}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    {/* Fallback initials shown via CSS when image fails */}
                    <span className={styles.initials} aria-hidden="true">
                      {teacher.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
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

                {/* course */}
                <p className={styles.course}>{teacher.course}</p>

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
                    <span className={styles.infoLabel}>board</span>
                    <span className={styles.infoValue}>{teacher.board}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className={styles.bio}>{teacher.bio}</p>

                {/* Social icons */}
                {/* <div className={styles.socials}>
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
                </div> */}

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
