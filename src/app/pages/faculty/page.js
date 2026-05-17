import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import FacultyHero from '@/components/faculty/FacultyHero';
import FacultyBySubject from '@/components/faculty/FacultyBySubject';

export const metadata = {
  title: 'Faculty - Ayaz Ahmad Academy',
  description: 'Meet our expert faculty members',
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FacultyHero />
      <FacultyBySubject />
      <Footer />
    </div>
  );
}
