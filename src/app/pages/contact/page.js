import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ContactHero from '@/components/contact-page/ContactHero';
import ContactForm from '@/components/contact-page/ContactForm';

// Advanced SEO Metadata for Contact Page
export const metadata = {
  title: 'Contact Us - Get in Touch | Ayaz Ahmad Academy | Cambridge O & A Level Education',
  description: 'Contact Ayaz Ahmad Academy for admissions, inquiries, or support. Email: info@ayazahmadacademy.com | Phone: +92-XXX-XXXXXXX. Visit us for O & A Level Cambridge education. Quick response guaranteed. Office hours: Mon-Sat 9AM-6PM.',
  keywords: [
    'contact Ayaz Ahmad Academy',
    'academy contact number',
    'email academy',
    'visit academy',
    'contact us',
    'get in touch',
    'academy address',
    'office location',
    'phone number',
    'email address',
    'contact form',
    'inquiry form',
    'admission inquiry',
    'academy location Pakistan',
    'how to reach',
    'contact information',
    'reach us',
    'academy office',
    'customer support',
    'help desk',
  ],
  
  // Open Graph for Social Media
  openGraph: {
    title: 'Contact Ayaz Ahmad Academy - Get in Touch for Admissions & Inquiries',
    description: 'Contact us for O & A Level admissions, inquiries, or support. Email, phone, or visit us. Quick response within 24 hours. Office hours: Mon-Sat 9AM-6PM.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/contact`,
    siteName: 'Ayaz Ahmad Academy',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - Contact Us',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ayaz Ahmad Academy - Get in Touch',
    description: 'Contact us for admissions, inquiries, or support. Quick response guaranteed. Email, phone, or visit us.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/academy-logo.png`],
  },
  
  // Canonical URL
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com'}/pages/contact`,
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

// JSON-LD Structured Data for Contact Page
function generateContactStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // ContactPage Schema
      {
        '@type': 'ContactPage',
        '@id': `${baseUrl}/pages/contact#contactpage`,
        url: `${baseUrl}/pages/contact`,
        name: 'Contact Ayaz Ahmad Academy',
        description: 'Get in touch with Ayaz Ahmad Academy for admissions, inquiries, or support',
        inLanguage: 'en-PK',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/pages/contact#breadcrumb`,
        },
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/pages/contact#breadcrumb`,
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
            name: 'Contact Us',
            item: `${baseUrl}/pages/contact`,
          },
        ],
      },
      
      // Organization with Contact Details
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: 'Ayaz Ahmad Academy',
        alternateName: 'Ayaz Academy',
        url: baseUrl,
        logo: `${baseUrl}/academy-logo.png`,
        image: `${baseUrl}/academy-logo.png`,
        description: 'Leading O & A Level Cambridge educational institute in Pakistan',
        
        // Contact Information
        email: 'info@ayazahmadacademy.com',
        telephone: '+92 345 2260042',
        faxNumber: '+92 336 3659231', // Optional
        
        // Address
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Karachi',
          addressLocality: 'Karachi',
          addressRegion: 'Sindh',
          postalCode: '75000',
          addressCountry: 'PK',
        },
        
        // Geo Coordinates (Add your actual coordinates)
        // geo: {
        //   '@type': 'GeoCoordinates',
        //   latitude: '24.8607', // Replace with actual
        //   longitude: '67.0011', // Replace with actual
        // },
        
        // Area Served
        areaServed: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        
        // Opening Hours
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '00:00',
            closes: '00:00',
            description: 'Closed on Sundays',
          },
        ],
        
        // Contact Points
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+92 345 2260042',
            contactType: 'Admissions',
            email: 'info@ayazahmadacademy.com',
            areaServed: 'PK',
            availableLanguage: ['English', 'Urdu'],
            contactOption: 'TollFree',
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '18:00',
            },
          },
          {
            '@type': 'ContactPoint',
            telephone: '+92 345 2260042',
            contactType: 'Customer Service',
            email: 'info@ayazahmadacademy.com',
            areaServed: 'PK',
            availableLanguage: ['English', 'Urdu'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'General Inquiries',
            email: 'info@ayazahmadacademy.com',
            areaServed: 'PK',
            availableLanguage: ['English', 'Urdu'],
          },
        ],
        
        // Social Media
        sameAs: [
          'https://www.facebook.com/AyazAhmadAcadmy?rdid=G53TvFPj5CwXb4YO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QD2j4MRmQ%2F#',
        ],
      },
      
      // Local Business Schema
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/pages/contact#localbusiness`,
        name: 'Ayaz Ahmad Academy',
        image: `${baseUrl}/academy-logo.png`,
        '@id': `${baseUrl}/#organization`,
        url: baseUrl,
        telephone: '+92 345 2260042',
        email: 'info@ayazahmadacademy.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Karachi',
          addressLocality: 'Karachi',
          addressRegion: 'Sindh',
          postalCode: '75000',
          addressCountry: 'PK',
        },
        // geo: {
        //   '@type': 'GeoCoordinates',
        //   latitude: '24.8607',
        //   longitude: '67.0011',
        // },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        priceRange: '$$',
      },
      
      // FAQPage Schema for Contact
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/pages/contact#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the contact number of Ayaz Ahmad Academy?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach Ayaz Ahmad Academy at +92-XXX-XXXXXXX. Our phone lines are open Monday to Saturday from 9:00 AM to 6:00 PM. For urgent inquiries, you can also email us at info@ayazahmadacademy.com.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the email address for admissions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For admissions and general inquiries, email us at info@ayazahmadacademy.com. We respond to all emails within 24 hours during business days.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is Ayaz Ahmad Academy located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ayaz Ahmad Academy is located at [Your Address], [City], Pakistan. You can visit us during office hours Monday to Saturday, 9:00 AM to 6:00 PM. Please call ahead to schedule an appointment.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the office timings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our office is open Monday to Saturday from 9:00 AM to 6:00 PM. We are closed on Sundays and public holidays. For urgent matters outside office hours, please email us.',
            },
          },
          {
            '@type': 'Question',
            name: 'How quickly will I receive a response?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We aim to respond to all inquiries within 24 hours during business days. For urgent admission queries during enrollment season, we typically respond within a few hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I visit the academy for a tour?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, we welcome parents and students to visit our academy. Please call us at +92-XXX-XXXXXXX or email to schedule a campus tour and meet our faculty.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I inquire about course fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For fee structure and payment plans, please contact our admissions office via phone or email. We will provide detailed information about tuition fees, payment schedules, and any available scholarships.',
            },
          },
        ],
      },
      
      // WebPage with Action
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/pages/contact#webpage`,
        url: `${baseUrl}/pages/contact`,
        name: 'Contact Us',
        potentialAction: {
          '@type': 'CommunicateAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/pages/contact`,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          recipient: {
            '@type': 'Organization',
            name: 'Ayaz Ahmad Academy',
            email: 'info@ayazahmadacademy.com',
          },
        },
      },
    ],
  };
}

export default function ContactPage() {
  const structuredData = generateContactStructuredData();
  
  return (
    <>
      {/* JSON-LD Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a1628 100%)',
        }}
      >
        <Navbar />
        <ContactHero />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
