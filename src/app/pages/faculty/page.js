import Navbar from '@/components/navbar/Navbar';
import TeamSection from '@/components/about-page/TeamSection';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Faculty - Ayaz Ahmad Academy',
  description: 'Meet our expert faculty members',
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <TeamSection/>
      <Footer />
    </div>
  );
}
