// SEO Metadata Configuration
export const siteMetadata = {
  title: 'Ayaz Ahmad Academy - Best O & A Level Institute in Pakistan | Cambridge Education',
  description: 'Top-rated O & A Level Academy in Pakistan offering Cambridge International Education. Expert faculty, proven results with 95% success rate, modern facilities. Enroll now for quality education.',
  keywords: [
    'O Level Academy Pakistan',
    'A Level Institute',
    'Cambridge Education Pakistan',
    'Ayaz Ahmad Academy',
    'O Level tuition',
    'A Level classes',
    'Best O Level Academy',
    'Cambridge International School',
    'O Level courses Pakistan',
    'A Level preparation',
    'Cambridge registered center',
    'Secondary education Pakistan',
    'International education',
    'O Level examination',
    'A Level examination',
    'Quality education Pakistan',
    'Top academy Pakistan',
    'Student success academy'
  ],
  authors: [{ name: 'Ayaz Ahmad Academy' }],
  creator: 'Ayaz Ahmad Academy',
  publisher: 'Ayaz Ahmad Academy',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ayazahmadacademy.com',
  siteName: 'Ayaz Ahmad Academy',
  locale: 'en_PK',
  type: 'website',
  
  // Contact Information
  contact: {
    email: 'info@ayazahmadacademy.com',
    phone: '+92 345 2260042',
  },
  
  // Social Media (add your actual social media links)
  social: {
    facebook: 'https://www.facebook.com/AyazAhmadAcadmy?rdid=G53TvFPj5CwXb4YO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QD2j4MRmQ%2F#',
    // twitter: 'https://twitter.com/ayazacademy',
    // instagram: 'https://instagram.com/ayazahmadacademy',
    // linkedin: 'https://linkedin.com/company/ayazahmadacademy',
    // youtube: 'https://youtube.com/@ayazahmadacademy',
  },
  
  // Organization Schema Data
  organization: {
    name: 'Ayaz Ahmad Academy',
    legalName: 'Ayaz Ahmad Academy - Institute of O & A Level',
    foundingDate: '2010',
    email: 'info@ayazahmadacademy.com',
    address: {
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your Province',
      postalCode: 'Your Postal Code',
      addressCountry: 'PK',
    },
  },
};

// Generate structured data for home page
export function generateHomeStructuredData() {
  const baseUrl = siteMetadata.siteUrl;
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'EducationalOrganization',
        '@id': `${baseUrl}/#organization`,
        name: siteMetadata.organization.name,
        legalName: siteMetadata.organization.legalName,
        url: baseUrl,
        logo: `${baseUrl}/academy-logo.png`,
        foundingDate: siteMetadata.organization.foundingDate,
        email: siteMetadata.organization.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteMetadata.organization.address.streetAddress,
          addressLocality: siteMetadata.organization.address.addressLocality,
          addressRegion: siteMetadata.organization.address.addressRegion,
          postalCode: siteMetadata.organization.address.postalCode,
          addressCountry: siteMetadata.organization.address.addressCountry,
        },
        sameAs: [
          siteMetadata.social.facebook,
          siteMetadata.social.twitter,
          siteMetadata.social.instagram,
          siteMetadata.social.linkedin,
          siteMetadata.social.youtube,
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteMetadata.contact.email,
          telephone: siteMetadata.contact.phone,
          contactType: 'Admissions',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      // Website Schema
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: siteMetadata.siteName,
        description: siteMetadata.description,
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: baseUrl,
        name: siteMetadata.title,
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        about: {
          '@id': `${baseUrl}/#organization`,
        },
        description: siteMetadata.description,
        inLanguage: 'en-PK',
      },
      // Educational Service Schema
      {
        '@type': 'Service',
        '@id': `${baseUrl}/#service`,
        serviceType: 'O & A Level Education',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Pakistan',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Educational Programs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'O Level Program',
                description: 'Cambridge O Level comprehensive education program',
                provider: {
                  '@id': `${baseUrl}/#organization`,
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Course',
                name: 'A Level Program',
                description: 'Cambridge A Level advanced education program',
                provider: {
                  '@id': `${baseUrl}/#organization`,
                },
              },
            },
          ],
        },
      },
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
        ],
      },
    ],
  };
}
