import Navbar from '@/components/navbar/Navbar';
import AboutHero from '@/components/about-page/AboutHero';
import OurStory from '@/components/about-page/OurStory';
import OurMission from '@/components/about-page/OurMission';
import OurValues from '@/components/about-page/OurValues';
import CEOMessage from '@/components/about-page/CEOMessage';
import Achievements from '@/components/about-page/Achievements';
import Footer from '@/components/footer/Footer';

// Advanced SEO Metadata for About Page
export const metadata = {
  title: 'About Us - 15+ Years of Excellence in O & A Level Education | Ayaz Ahmad Academy',
  description: 'Discover Ayaz Ahmad Academy\'s journey of excellence. Cambridge registered institute with 15+ years experience, 95% success rate, expert faculty, and modern facilities. Learn about our mission to provide world-class O & A Level education in Pakistan.',
  keywords: [
    'About Ayaz Ahmad Academy',
    'O Level academy history',
    'A Level institute Pakistan',
    'Cambridge registered center',
    'Educational excellence Pakistan',
    'Academy mission and vision',
    'Best teachers Pakistan',
    'Student success stories',
    '15 years education experience',
    'Quality education provider',
    'Academy achievements',
    'CEO message',
    'Our values education',
    'Academic excellence',
  ],
  
  // Open Graph for Social Media
  openGraph: {
    title: 'About Ayaz Ahmad Academy - 15+ Years of Educational Excellence',
    description: 'Cambridge registered O & A Level institute with proven track record. Expert faculty, 95% success rate, modern facilities. Shaping future leaders since 2010.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/about`,
    siteName: 'Ayaz Ahmad Academy',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - About Us',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'About Ayaz Ahmad Academy - 15+ Years of Excellence',
    description: 'Cambridge registered O & A Level institute with 95% success rate. Learn about our mission, values, and achievements.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/about`,
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

// JSON-LD Structured Data for About Page
function generateAboutStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // AboutPage Schema
      {
        '@type': 'AboutPage',
        '@id': `${baseUrl}/pages/about#aboutpage`,
        url: `${baseUrl}/pages/about`,
        name: 'About Ayaz Ahmad Academy',
        description: 'Learn about our 15+ years journey of providing excellence in O & A Level education',
        inLanguage: 'en-PK',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/pages/about#breadcrumb`,
        },
      },
      
      // Organization Detailed Schema
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'Ayaz Ahmad Academy',
        alternateName: 'Ayaz Academy',
        description: 'Leading O & A Level educational institute in Pakistan providing Cambridge International Education',
        url: baseUrl,
        logo: `${baseUrl}/academy-logo.png`,
        image: `${baseUrl}/academy-logo.png`,
        foundingDate: '2010',
        slogan: 'Excellence in O & A Level Education',
        
        // Achievements
        awards: [
          'Cambridge Registered Center',
          '95% Success Rate',
          '15+ Years of Excellence',
          '500+ Successful Students',
        ],
        
        // Contact Information
        email: 'info@ayazahmadacademy.com',
        telephone: '+92 345 2260042',
        
        // Address
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'karachi',
          addressLocality: 'Karachi',
          addressRegion: 'Sindh',
          postalCode: '75000',
          addressCountry: 'PK',
        },
        
        // Area Served
        areaServed: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        
        // Key People
        founder: {
          '@type': 'Person',
          name: 'Ayaz Ahmad',
          jobTitle: 'Founder & CEO',
        },
        
        // Organization Features
        knowsAbout: [
          'O Level Education',
          'A Level Education',
          'Cambridge International Examinations',
          'Secondary Education',
          'International Education Standards',
        ],
        
        // Social Media
        sameAs: [
          'https://facebook.com/ayazahmadacademy',
          'https://twitter.com/ayazacademy',
          'https://instagram.com/ayazahmadacademy',
          'https://linkedin.com/company/ayazahmadacademy',
          'https://youtube.com/@ayazahmadacademy',
        ],
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/pages/about#breadcrumb`,
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
            name: 'About Us',
            item: `${baseUrl}/pages/about`,
          },
        ],
      },
      
      // FAQPage Schema (common about page questions)
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/pages/about#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long has Ayaz Ahmad Academy been operating?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ayaz Ahmad Academy has been providing excellence in O & A Level education for over 15 years, since 2010.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Ayaz Ahmad Academy a Cambridge registered center?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Ayaz Ahmad Academy is a Cambridge registered center, authorized to provide O & A Level education following Cambridge International curriculum.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the success rate at Ayaz Ahmad Academy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We maintain an impressive 95% success rate, with our students consistently achieving excellent grades in O & A Level examinations.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes Ayaz Ahmad Academy different?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our academy stands out with experienced faculty, modern facilities, personalized attention, proven teaching methods, and a strong track record of student success over 15+ years.',
            },
          },
        ],
      },
      
      // Review/Rating Schema (add actual reviews if available)
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization-rating`,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
  };
}

export default function AboutPage() {
  const structuredData = generateAboutStructuredData();
  
  return (
    <>
      {/* JSON-LD Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AboutHero />
        <OurStory />
        <OurMission />
        <OurValues />
        <CEOMessage />
        <Achievements />
        <Footer />
      </div>
    </>
  );
}
