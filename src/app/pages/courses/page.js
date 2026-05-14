import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Courses - Ayaz Ahmad Academy',
  description: 'Explore our comprehensive O & A Level courses',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.3)] rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse"></div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-wider uppercase">Our Courses</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O & A Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">Courses</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive curriculum designed to help you excel in Cambridge examinations
          </p>
        </div>
      </section>

      {/* Courses Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Cards */}
            {[
              { title: 'Mathematics', level: 'O & A Level', icon: '📐' },
              { title: 'Physics', level: 'O & A Level', icon: '⚛️' },
              { title: 'Chemistry', level: 'O & A Level', icon: '🧪' },
              { title: 'Biology', level: 'O & A Level', icon: '🧬' },
              { title: 'English', level: 'O & A Level', icon: '📚' },
              { title: 'Computer Science', level: 'O & A Level', icon: '💻' },
            ].map((course, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-[#F5A623]"
              >
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-[#F5A623] font-semibold mb-4">{course.level}</p>
                <p className="text-gray-600 mb-6">
                  Comprehensive curriculum with experienced faculty and modern teaching methods.
                </p>
                <button className="btn-primary w-full">
                  <span>Learn More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
