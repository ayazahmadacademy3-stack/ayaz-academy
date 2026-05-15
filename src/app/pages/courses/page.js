import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CoursesHero from '@/components/courses/CoursesHero';
import CoursesGrid from '@/components/courses/CoursesGrid';
import WhyChooseCourses from '@/components/courses/WhyChooseCourses';

export const metadata = {
  title: 'Courses - Ayaz Ahmad Academy',
  description: 'Explore our comprehensive O & A Level courses',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CoursesHero />
      <CoursesGrid />
      <WhyChooseCourses />
      <Footer />
    </div>
  );
}
