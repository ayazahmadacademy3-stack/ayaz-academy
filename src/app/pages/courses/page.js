import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CoursesHero from '@/components/courses/CoursesHero';
import CoursesGrid from '@/components/courses/CoursesGrid';
import WhyChooseCourses from '@/components/courses/WhyChooseCourses';

// Advanced SEO Metadata for Courses Page
export const metadata = {
  title: 'Courses - O & A Level Cambridge Programs | Mathematics, Physics, Chemistry | Ayaz Ahmad Academy',
  description: 'Explore 15+ Cambridge O & A Level courses at Ayaz Ahmad Academy. Expert instruction in Mathematics, Physics, Chemistry, Biology, English, Computer Science. 2-year programs with 95% success rate. Enroll now for quality education.',
  keywords: [
    'O Level courses Pakistan',
    'A Level courses',
    'Cambridge courses',
    'O Level Mathematics',
    'O Level Physics',
    'O Level Chemistry',
    'O Level Biology',
    'A Level Mathematics 9709',
    'A Level Physics 9702',
    'A Level Chemistry 9701',
    'Computer Science O Level',
    'English Language O Level',
    'Cambridge syllabus courses',
    'Best O Level academy',
    'Quality education courses',
    'Cambridge examination preparation',
    'Secondary education programs',
    'Science courses Pakistan',
    'Math courses Cambridge',
    'Affordable O Level courses',
  ],
  
  // Open Graph for Social Media
  openGraph: {
    title: 'O & A Level Courses - Expert Cambridge Education Programs',
    description: '15+ Cambridge O & A Level courses available. Mathematics, Physics, Chemistry, Biology, English, Computer Science. Expert faculty, 95% success rate, proven teaching methods.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/courses`,
    siteName: 'Ayaz Ahmad Academy',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - O & A Level Courses',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'O & A Level Courses - Cambridge Education Programs',
    description: '15+ Cambridge courses: Math, Physics, Chemistry, Biology, English, Computer Science. Expert teachers, 95% success rate. Enroll today!',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/courses`,
  },
  
  // Additional Meta Tags
  authors: [{ name: 'Ayaz Ahmad Academy' }],
  category: 'Education',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Structured Data for Courses Page
function generateCoursesStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com';
  
  // Individual course offerings
  const coursesList = [
    // O Level Courses
    {
      name: 'O Level Mathematics',
      code: '4024',
      description: 'Comprehensive coverage of O Level Mathematics syllabus with problem-solving techniques',
      level: 'O Level',
      duration: 'P2Y',
    },
    {
      name: 'O Level Physics',
      code: '5054',
      description: 'In-depth study of physical concepts with practical experiments and applications',
      level: 'O Level',
      duration: 'P2Y',
    },
    {
      name: 'O Level Chemistry',
      code: '5070',
      description: 'Complete chemistry curriculum with hands-on laboratory experience',
      level: 'O Level',
      duration: 'P2Y',
    },
    {
      name: 'O Level Biology',
      code: '5090',
      description: 'Detailed exploration of biological sciences with practical demonstrations',
      level: 'O Level',
      duration: 'P2Y',
    },
    {
      name: 'O Level English Language',
      code: '1123',
      description: 'Develop strong communication skills in reading, writing, and comprehension',
      level: 'O Level',
      duration: 'P2Y',
    },
    {
      name: 'O Level Computer Science',
      code: '2210',
      description: 'Programming fundamentals and computational thinking for the digital age',
      level: 'O Level',
      duration: 'P2Y',
    },
    // A Level Courses
    {
      name: 'A Level Mathematics',
      code: '9709',
      description: 'Advanced mathematical concepts including Pure Math, Mechanics, and Statistics',
      level: 'A Level',
      duration: 'P2Y',
    },
    {
      name: 'A Level Physics',
      code: '9702',
      description: 'Advanced physics covering mechanics, electricity, waves, and modern physics',
      level: 'A Level',
      duration: 'P2Y',
    },
    {
      name: 'A Level Chemistry',
      code: '9701',
      description: 'Advanced chemistry with organic, inorganic, and physical chemistry',
      level: 'A Level',
      duration: 'P2Y',
    },
  ];
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // CollectionPage Schema
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/pages/courses#collectionpage`,
        url: `${baseUrl}/pages/courses`,
        name: 'O & A Level Courses',
        description: 'Complete catalog of Cambridge O & A Level courses offered by Ayaz Ahmad Academy',
        inLanguage: 'en-PK',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/pages/courses#breadcrumb`,
        },
      },
      
      // ItemList Schema for Course Catalog
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/pages/courses#courselist`,
        name: 'Cambridge O & A Level Courses',
        description: 'Complete list of courses offered',
        numberOfItems: coursesList.length,
        itemListElement: coursesList.map((course, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Course',
            '@id': `${baseUrl}/pages/courses#${course.code}`,
            name: course.name,
            courseCode: course.code,
            description: course.description,
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Ayaz Ahmad Academy',
              url: baseUrl,
            },
            educationalLevel: course.level,
            timeRequired: course.duration,
            inLanguage: 'en-PK',
            availableLanguage: ['English', 'Urdu'],
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'onsite',
              courseSchedule: {
                '@type': 'Schedule',
                duration: course.duration,
                repeatFrequency: 'Daily',
              },
              instructor: {
                '@type': 'Person',
                name: 'Expert Faculty',
                description: 'Qualified and experienced teachers',
              },
            },
            offers: {
              '@type': 'Offer',
              category: 'Course Enrollment',
              availability: 'https://schema.org/InStock',
              price: 'Contact for details',
              priceCurrency: 'PKR',
              validFrom: new Date().toISOString().split('T')[0],
            },
          },
        })),
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/pages/courses#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Courses',
            item: `${baseUrl}/pages/courses`,
          },
        ],
      },
      
      // EducationalOrganization with Courses
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'Ayaz Ahmad Academy',
        url: baseUrl,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Cambridge O & A Level Course Catalog',
          itemListElement: coursesList.map(course => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: course.name,
              courseCode: course.code,
              description: course.description,
              provider: {
                '@id': `${baseUrl}/#organization`,
              },
            },
          })),
        },
      },
      
      // FAQ Schema for Courses
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/pages/courses#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What O Level courses are available at Ayaz Ahmad Academy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer comprehensive O Level courses including Mathematics (4024), Physics (5054), Chemistry (5070), Biology (5090), English Language (1123), Computer Science (2210), and more. All courses follow Cambridge International syllabus.',
            },
          },
          {
            '@type': 'Question',
            name: 'What A Level courses does Ayaz Ahmad Academy offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our A Level programs include Mathematics (9709), Physics (9702), Chemistry (9701), and other subjects. All A Level courses are taught by expert faculty with extensive experience in Cambridge examinations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long are the O & A Level courses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both O Level and A Level courses are typically 2-year programs. This duration allows comprehensive coverage of the syllabus with ample time for revision and practice.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are past papers and practice materials provided?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all our courses include extensive past papers, practice materials, mock exams, and revision sessions to ensure students are fully prepared for Cambridge examinations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the teaching method for science courses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our science courses (Physics, Chemistry, Biology) combine theoretical instruction with hands-on practical laboratory sessions, ensuring students understand both concepts and applications.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can students enroll in multiple courses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, students can enroll in multiple courses based on their academic goals and Cambridge examination requirements. We help students choose the right combination of subjects.',
            },
          },
        ],
      },
      
      // Service Schema for Course Offerings
      {
        '@type': 'Service',
        '@id': `${baseUrl}/pages/courses#service`,
        name: 'Cambridge O & A Level Course Programs',
        serviceType: 'Educational Courses',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'Student',
          audienceType: 'Secondary School Students',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Course Offerings',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'O Level Program',
                description: 'Complete O Level education with 6+ subject offerings',
                educationalProgramMode: 'Full-time',
                timeToComplete: 'P2Y',
                occupationalCategory: 'Secondary Education',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'EducationalOccupationalProgram',
                name: 'A Level Program',
                description: 'Advanced Level education preparing students for university',
                educationalProgramMode: 'Full-time',
                timeToComplete: 'P2Y',
                occupationalCategory: 'Higher Secondary Education',
              },
            },
          ],
        },
      },
    ],
  };
}

export default function CoursesPage() {
  const structuredData = generateCoursesStructuredData();
  
  return (
    <>
      {/* JSON-LD Structured Data for Courses Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <CoursesHero />
        <CoursesGrid />
        <WhyChooseCourses />
        <Footer />
      </div>
    </>
  );
}
