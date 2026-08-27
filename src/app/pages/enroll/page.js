import Navbar from '@/components/navbar/Navbar';
import RegisterForm from '@/components/register/RegisterForm';
import Footer from '@/components/footer/Footer';

// Advanced SEO Metadata for Enroll/Register Page
export const metadata = {
  title: 'Enroll Now - Register for O & A Level Cambridge Programs | Student Admission | Ayaz Ahmad Academy',
  description: 'Enroll now at Ayaz Ahmad Academy for O & A Level Cambridge education. Easy online registration, flexible payment plans, limited seats available. Join 500+ successful students. Register today for quality education with expert teachers and 95% success rate.',
  keywords: [
    'enroll O Level',
    'A Level admission',
    'register student',
    'online enrollment',
    'Cambridge admission',
    'student registration Pakistan',
    'O Level enrollment',
    'A Level registration',
    'academy admission',
    'join Ayaz Ahmad Academy',
    'enroll now',
    'admission open',
    'student intake',
    'register for courses',
    'enrollment form',
    'admission procedure',
    'how to enroll',
    'registration process',
    'admission requirements',
    'enroll online',
  ],
  
  // Open Graph for Social Media
  openGraph: {
    title: 'Enroll Now - Join 500+ Successful Students at Ayaz Ahmad Academy',
    description: 'Register for O & A Level Cambridge programs. Easy online enrollment, expert teachers, 95% success rate. Limited seats available. Enroll today!',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/enroll`,
    siteName: 'Ayaz Ahmad Academy',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - Enroll Now',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Enroll Now - O & A Level Cambridge Admission Open',
    description: 'Register for quality Cambridge education. Expert teachers, 95% success rate, modern facilities. Limited seats. Enroll today!',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/enroll`,
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

// JSON-LD Structured Data for Enroll Page
function generateEnrollStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // WebPage Schema for Enrollment
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/pages/enroll#webpage`,
        url: `${baseUrl}/pages/enroll`,
        name: 'Enroll Now - Student Registration',
        description: 'Register for O & A Level Cambridge programs at Ayaz Ahmad Academy',
        inLanguage: 'en-PK',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/pages/enroll#breadcrumb`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/academy-logo.png`,
        },
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/pages/enroll#breadcrumb`,
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
            name: 'Enroll Now',
            item: `${baseUrl}/pages/enroll`,
          },
        ],
      },
      
      // EducationalOrganization with Application
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'Ayaz Ahmad Academy',
        url: baseUrl,
        applicationContact: {
          '@type': 'ContactPoint',
          contactType: 'Admissions',
          email: 'info@ayazahmadacademy.com',
          telephone: '+92 345 2260042',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
          contactOption: 'TollFree',
        },
      },
      
      // Action Schema for Registration
      {
        '@type': 'RegisterAction',
        '@id': `${baseUrl}/pages/enroll#registeraction`,
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/pages/enroll`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Order',
          name: 'Student Registration',
        },
        agent: {
          '@type': 'EducationalOrganization',
          name: 'Ayaz Ahmad Academy',
        },
        object: {
          '@type': 'Service',
          name: 'O & A Level Education Enrollment',
          provider: {
            '@id': `${baseUrl}/#organization`,
          },
        },
      },
      
      // Offer Schema for Enrollment
      {
        '@type': 'Offer',
        '@id': `${baseUrl}/pages/enroll#offer`,
        name: 'Student Enrollment - O & A Level Programs',
        description: 'Enroll in Cambridge O & A Level education programs',
        category: 'Educational Service',
        availability: 'https://schema.org/InStock',
        availabilityStarts: new Date().toISOString().split('T')[0],
        price: 'Contact for details',
        priceCurrency: 'PKR',
        url: `${baseUrl}/pages/enroll`,
        seller: {
          '@id': `${baseUrl}/#organization`,
        },
        eligibleRegion: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        itemOffered: {
          '@type': 'EducationalOccupationalProgram',
          name: 'O & A Level Education',
          description: 'Complete Cambridge O & A Level education programs',
          provider: {
            '@id': `${baseUrl}/#organization`,
          },
          educationalProgramMode: 'Full-time',
          timeToComplete: 'P2Y',
        },
      },
      
      // FAQPage Schema for Enrollment
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/pages/enroll#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I enroll at Ayaz Ahmad Academy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can enroll online by filling out the registration form on our website. Simply provide your details, select your desired courses, and submit the form. Our admissions team will contact you within 24 hours to complete the enrollment process.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the admission requirements?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For O Level admission, students should have completed their matriculation or equivalent. For A Level admission, students should have completed O Levels or equivalent. We also conduct a placement test to determine the appropriate level for each student.',
            },
          },
          {
            '@type': 'Question',
            name: 'When does the enrollment period start?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We have multiple intakes throughout the year. However, main enrollment periods are in September for the fall semester and January for the spring semester. Contact us for current availability and batch schedules.',
            },
          },
          {
            '@type': 'Question',
            name: 'What documents are required for registration?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Required documents include previous academic records, CNIC/B-form copy, recent photographs, and any relevant certificates. Detailed document requirements will be provided upon application.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are there any entrance tests?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we conduct a placement test to assess the student\'s current knowledge level and place them in the appropriate class. This ensures students are matched with the right program level for optimal learning.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the fee structure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fee structure varies depending on the program and subjects selected. We offer flexible payment plans to make quality education accessible. Please contact our admissions office for detailed fee information and payment options.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I enroll in multiple subjects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, students can enroll in multiple subjects as per Cambridge requirements. Typically, O Level students take 6-8 subjects and A Level students take 3-4 subjects. Our counselors will help you choose the right combination.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a deadline for enrollment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While we accept applications throughout the year, we recommend enrolling early as seats are limited. Priority is given to early applicants, and classes may fill up quickly during peak enrollment periods.',
            },
          },
        ],
      },
      
      // HowTo Schema for Enrollment Process
      {
        '@type': 'HowTo',
        '@id': `${baseUrl}/pages/enroll#howto`,
        name: 'How to Enroll at Ayaz Ahmad Academy',
        description: 'Step-by-step guide to enrolling in O & A Level programs',
        image: `${baseUrl}/academy-logo.png`,
        totalTime: 'PT15M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'PKR',
          value: '0',
        },
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Fill Registration Form',
            text: 'Complete the online registration form with your personal details, educational background, and course preferences.',
            url: `${baseUrl}/pages/enroll`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Submit Application',
            text: 'Submit your completed form online. You will receive an acknowledgment email with your application reference number.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Placement Test',
            text: 'Schedule and appear for the placement test to assess your current knowledge level. This helps us place you in the appropriate class.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Document Submission',
            text: 'Submit required documents including previous academic records, ID proof, and photographs as per the checklist provided.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Fee Payment',
            text: 'Complete the fee payment as per the fee structure. We offer flexible payment plans to accommodate different needs.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Enrollment Confirmation',
            text: 'Receive your enrollment confirmation, student ID, and class schedule. Welcome to Ayaz Ahmad Academy!',
          },
        ],
      },
      
      // Service Schema for Enrollment Service
      {
        '@type': 'Service',
        '@id': `${baseUrl}/pages/enroll#service`,
        name: 'Student Enrollment Service',
        serviceType: 'Educational Enrollment',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          name: 'Online Registration',
          serviceUrl: `${baseUrl}/pages/enroll`,
          servicePhone: '+92 345 2260042',
          servicePostalAddress: {
            '@type': 'PostalAddress',
            streetAddress: 'Karachi',
            addressLocality: 'Karachi',
            addressRegion: 'Sinsh',
            postalCode: '75000',
            addressCountry: 'PK',
          },
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          price: 'Contact for details',
          priceCurrency: 'PKR',
        },
      },
    ],
  };
}

export default function EnrollPage() {
  const structuredData = generateEnrollStructuredData();
  
  return (
    <>
      {/* JSON-LD Structured Data for Enroll Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a1628 100%)' }}>
        <Navbar />
        <RegisterForm />
        <Footer />
      </div>
    </>
  );
}
