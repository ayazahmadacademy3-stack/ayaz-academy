import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Faculty - Ayaz Ahmad Academy',
  description: 'Meet our expert faculty members',
};

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.3)] rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse"></div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-wider uppercase">Our Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">Faculty</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Highly qualified and experienced teachers dedicated to your success
          </p>
        </div>
      </section>

      {/* Faculty Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. Ayaz Ahmad', role: 'Founder & Principal', subject: 'Mathematics', emoji: '👨‍🏫' },
              { name: 'Sarah Khan', role: 'Head of Sciences', subject: 'Physics & Chemistry', emoji: '👩‍🔬' },
              { name: 'Ahmed Ali', role: 'Senior Teacher', subject: 'Mathematics', emoji: '👨‍💼' },
              { name: 'Fatima Malik', role: 'Head of Languages', subject: 'English', emoji: '👩‍🏫' },
              { name: 'Hassan Raza', role: 'Senior Teacher', subject: 'Biology', emoji: '👨‍🔬' },
              { name: 'Ayesha Siddiqui', role: 'Senior Teacher', subject: 'Computer Science', emoji: '👩‍💻' },
              { name: 'Usman Khan', role: 'Senior Teacher', subject: 'Chemistry', emoji: '👨‍🔬' },
              { name: 'Zainab Ali', role: 'Senior Teacher', subject: 'Physics', emoji: '👩‍🏫' },
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center border-2 border-gray-100 hover:border-[#F5A623]"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#F5A623] to-[#ff8c00] rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#F5A623] font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
