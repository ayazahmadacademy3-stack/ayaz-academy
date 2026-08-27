import { Poppins } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: '%s | Ayaz Ahmad Academy',
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: siteMetadata.authors,
  creator: siteMetadata.creator,
  publisher: siteMetadata.publisher,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: `${siteMetadata.siteUrl}/academy-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Ayaz Ahmad Academy - O & A Level Institute',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: '@ayazacademy',
    images: [`${siteMetadata.siteUrl}/academy-logo.png`],
  },
  
  // Verification (add your verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  
  // Alternate Languages
  alternates: {
    canonical: siteMetadata.siteUrl,
    languages: {
      'en-PK': siteMetadata.siteUrl,
    },
  },
  
  // Category
  category: 'Education',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Additional Meta Tags
  other: {
    'application-name': 'Ayaz Ahmad Academy',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Ayaz Ahmad Academy',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2B4C9F',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#2B4C9F',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK" className={`${poppins.variable} h-full antialiased`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
