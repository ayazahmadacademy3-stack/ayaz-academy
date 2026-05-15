import Navbar from '@/components/navbar/Navbar';
import AboutHero from '@/components/about-page/AboutHero';
import OurStory from '@/components/about-page/OurStory';
import OurMission from '@/components/about-page/OurMission';
import OurValues from '@/components/about-page/OurValues';
import CEOMessage from '@/components/about-page/CEOMessage';
import Achievements from '@/components/about-page/Achievements';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'About Us - Ayaz Ahmad Academy',
  description: 'Learn about Ayaz Ahmad Academy - 15+ years of excellence in O & A Level education',
};

export default function AboutPage() {
  return (
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
  );
}
