import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import FacultyHero from '@/components/faculty/FacultyHero';
import FacultyBySubject from '@/components/faculty/FacultyBySubject';

// Advanced SEO Metadata for Faculty Page
export const metadata = {
  title: 'Expert Faculty - Qualified Cambridge Teachers | 20+ Experienced Educators | Ayaz Ahmad Academy',
  description: 'Meet our highly qualified faculty of 20+ expert teachers with extensive experience in O & A Level Cambridge education. Specialized instructors for Mathematics, Physics, Chemistry, Biology, English, Computer Science, and more. 95% student success rate.',
  keywords: [
    'expert faculty Pakistan',
    'Cambridge teachers',
    'O Level teachers',
    'A Level teachers',
    'qualified instructors',
    'experienced educators',
    'subject specialists',
    'Mathematics teachers',
    'Physics teachers',
    'Chemistry teachers',
    'Biology teachers',
    'English teachers',
    'Computer Science teachers',
    'best teachers Pakistan',
    'academy faculty',
    'teaching staff',
    'expert instructors Cambridge',
    'qualified Cambridge teachers',
    'experienced O Level teachers',
    'professional educators',
  ],
  
  // Open Graph for Social Media
  openGraph: {
    title: 'Expert Faculty - 20+ Qualified Cambridge Teachers at Ayaz Ahmad Academy',
    description: 'Meet our highly qualified team of expert teachers. Specialized instructors for all O & A Level subjects with extensive Cambridge examination experience. 95% student success rate.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/faculty`,
    siteName: 'Ayaz Ahmad Academy',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - Expert Faculty',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Faculty - Qualified Cambridge Teachers',
    description: '20+ experienced teachers specialized in O & A Level Cambridge education. Mathematics, Physics, Chemistry, Biology, English, CS & more.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/faculty`,
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

// JSON-LD Structured Data for Faculty Page
function generateFacultyStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com';
  
  // Faculty members organized by subject
  const facultyBySubject = {
    Physics: [
      { name: 'Asghar Khan', experience: '18 Years', specialization: 'O-Levels, IGCSE, A-levels Physics' },
      { name: 'Kashif Anees', experience: '10 Years', specialization: 'Cambridge & Edexcel Physics' },
      { name: 'Arooj Kainat', experience: '9 years', specialization: 'IGCSE Physics' },
    ],
    Chemistry: [
      { name: 'Osama Shahab', experience: '7 Years', specialization: 'O-Levels, IGCSE, A-levels Chemistry' },
      { name: 'Syed Mujeeb Hussain', experience: '6 Years', specialization: 'Cambridge & Edexcel Chemistry' },
      { name: 'Nayyer Ahmed', experience: '2 Years', specialization: 'GCE & IGCSE Chemistry' },
    ],
    Mathematics: [
      { name: 'Arooj Kainat', experience: '9 Years', specialization: 'IGCSE, GCSE Mathematics' },
      { name: 'Furqan Khatri', experience: '6 Years', specialization: 'O & A Level Mathematics' },
      { name: 'Muhammad Bin Asim', experience: '3 years', specialization: 'O Level & IGCSE Mathematics' },
      { name: 'Faheem Galaria', specialization: 'O & A Level, Edexcel Mathematics' },
      { name: 'Yousuf Panwala', experience: '3 years', specialization: 'O & A Level Mathematics' },
    ],
    English: [
      { name: 'Maryam Ansari', experience: '13 Years', specialization: 'IGCSE, O & A Level English' },
      { name: 'Ayesha Abu Bakar', experience: '13 Years', specialization: 'Cambridge English' },
      { name: 'Syed Kashif Abbas Rizvi', experience: '12 years', specialization: 'IGCSE, Edexcel English' },
    ],
    'Computer Science': [
      { name: 'Afham Saya', experience: '10 years', specialization: 'IGCSE, O & A Level Computer Science' },
      { name: 'Fatima Ashraf', specialization: 'ICT, Computer Science, IT' },
    ],
    Biology: [
      { name: 'Abdul Qadir', specialization: 'Cambridge, Edexcel Biology' },
    ],
    Economics: [
      { name: 'Abdul Hadi', experience: '7 Years', specialization: 'O & A Level Economics' },
      { name: 'Shanila Farhan', experience: '15 Years', specialization: 'O & A Level Economics' },
    ],
    Accounting: [
      { name: 'Ayaz Ahmad', experience: '5+ years', specialization: 'IGCSE, O & A Level Accounting' },
      { name: 'Zeeshan Hassan', experience: '10+ years', specialization: 'ACCA' },
    ],
    'Other Subjects': [
      { name: 'Ali Mehdi', experience: '10 Years', specialization: 'O Level Urdu' },
      { name: 'Bushra Nadeem', experience: '2 Years', specialization: 'IGCSE Urdu' },
      { name: 'Mashal Ahmed', experience: '5 Years', specialization: 'Pakistan Studies' },
      { name: 'Waqas Ashraf', specialization: 'Pakistan Studies' },
      { name: 'Atique Maniya', experience: '18 years', specialization: 'Business Studies' },
      { name: 'Bilal Sujela', experience: '5+ years', specialization: 'Islamiat' },
    ],
  };
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // CollectionPage Schema
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/pages/faculty#collectionpage`,
        url: `${baseUrl}/pages/faculty`,
        name: 'Expert Faculty - Cambridge Teachers',
        description: 'Meet our team of 20+ highly qualified and experienced Cambridge O & A Level teachers',
        inLanguage: 'en-PK',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/pages/faculty#breadcrumb`,
        },
      },
      
      // EducationalOrganization with Faculty
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'Ayaz Ahmad Academy',
        url: baseUrl,
        employee: Object.values(facultyBySubject)
          .flat()
          .slice(0, 10) // First 10 teachers for main schema
          .map(teacher => ({
            '@type': 'Person',
            name: teacher.name,
            jobTitle: 'Subject Teacher',
            worksFor: {
              '@id': `${baseUrl}/#organization`,
            },
            knowsAbout: teacher.specialization,
            ...(teacher.experience && { yearsOfExperience: teacher.experience }),
          })),
      },
      
      // ItemList Schema for Faculty
      {
        '@type': 'ItemList',
        '@id': `${baseUrl}/pages/faculty#facultylist`,
        name: 'Faculty Members by Subject',
        description: 'Complete list of subject-specialized teachers',
        numberOfItems: Object.values(facultyBySubject).flat().length,
        itemListElement: Object.entries(facultyBySubject).flatMap(([subject, teachers], subjectIndex) =>
          teachers.map((teacher, teacherIndex) => ({
            '@type': 'ListItem',
            position: subjectIndex * 10 + teacherIndex + 1,
            item: {
              '@type': 'Person',
              name: teacher.name,
              jobTitle: `${subject} Teacher`,
              worksFor: {
                '@type': 'EducationalOrganization',
                name: 'Ayaz Ahmad Academy',
                url: baseUrl,
              },
              knowsAbout: [subject, teacher.specialization, 'Cambridge Education', 'O Level', 'A Level'],
              ...(teacher.experience && { 
                description: `${teacher.experience} of teaching experience in ${subject}`,
              }),
            },
          }))
        ),
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/pages/faculty#breadcrumb`,
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
            name: 'Faculty',
            item: `${baseUrl}/pages/faculty`,
          },
        ],
      },
      
      // FAQPage Schema for Faculty
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/pages/faculty#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How many teachers does Ayaz Ahmad Academy have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ayaz Ahmad Academy has 20+ highly qualified and experienced teachers specialized in various O & A Level subjects including Mathematics, Physics, Chemistry, Biology, English, Computer Science, and more.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the faculty members qualified for Cambridge education?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all our faculty members are specifically trained and experienced in Cambridge International O & A Level curriculum. They have extensive experience preparing students for Cambridge examinations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the average experience of teachers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our faculty members have an average of 8-10 years of teaching experience, with some teachers having 15+ years of experience in O & A Level Cambridge education.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do teachers specialize in specific subjects?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, each teacher is a subject specialist with deep expertise in their field. We have dedicated teachers for Mathematics, Physics, Chemistry, Biology, English, Computer Science, Economics, Accounting, and other subjects.',
            },
          },
          {
            '@type': 'Question',
            name: 'What teaching boards do faculty members cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our faculty is experienced in teaching Cambridge IGCSE, Cambridge O Level, Cambridge A Level, Edexcel, Pearson, and AQA examination boards.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the academy ensure quality teaching?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We maintain quality through rigorous teacher selection, ongoing professional development, regular performance reviews, and our proven 95% student success rate which reflects the effectiveness of our teaching staff.',
            },
          },
        ],
      },
      
      // Organization Team Schema
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/pages/faculty#team`,
        name: 'Ayaz Ahmad Academy Teaching Team',
        url: `${baseUrl}/pages/faculty`,
        parentOrganization: {
          '@id': `${baseUrl}/#organization`,
        },
        member: [
          // Key faculty members with detailed info
          {
            '@type': 'OrganizationRole',
            roleName: 'Physics Teacher',
            member: {
              '@type': 'Person',
              name: 'Asghar Khan',
              jobTitle: 'Senior Physics Teacher',
              description: '18 years of experience in O & A Level Physics',
              knowsAbout: ['Physics', 'Cambridge IGCSE', 'O Level', 'A Level'],
            },
          },
          {
            '@type': 'OrganizationRole',
            roleName: 'Mathematics Teacher',
            member: {
              '@type': 'Person',
              name: 'Arooj Kainat',
              jobTitle: 'Senior Mathematics Teacher',
              description: '9 years of experience in O & A Level Mathematics',
              knowsAbout: ['Mathematics', 'IGCSE', 'O Level', 'GCSE'],
            },
          },
          {
            '@type': 'OrganizationRole',
            roleName: 'English Teacher',
            member: {
              '@type': 'Person',
              name: 'Maryam Ansari',
              jobTitle: 'Senior English Teacher',
              description: '13 years of experience in Cambridge English',
              knowsAbout: ['English Language', 'IGCSE', 'O Level', 'A Level'],
            },
          },
        ],
      },
    ],
  };
}

export default function FacultyPage() {
  const structuredData = generateFacultyStructuredData();
  
  return (
    <>
      {/* JSON-LD Structured Data for Faculty Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <FacultyHero />
        <FacultyBySubject />
        <Footer />
      </div>
    </>
  );
}
