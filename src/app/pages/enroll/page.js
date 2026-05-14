import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Enroll Now - Ayaz Ahmad Academy',
  description: 'Register for admission at Ayaz Ahmad Academy',
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.3)] rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse"></div>
            <span className="text-[#F5A623] text-sm font-semibold tracking-wider uppercase">Admissions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Register <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#ff8c00]">Now</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#F5A623] to-[#ff8c00] mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start your journey to academic excellence with us
          </p>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Enrollment Form</h2>
            
            <form className="space-y-6">
              {/* Student Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#F5A623] pb-2">Student Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Program *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                  >
                    <option value="">Select Program</option>
                    <option value="o-level">O Level</option>
                    <option value="a-level">A Level</option>
                  </select>
                </div>
              </div>

              {/* Parent Information */}
              <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-gray-900 border-b-2 border-[#F5A623] pb-2">Parent/Guardian Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Phone *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#F5A623] focus:outline-none transition-colors resize-none"
                  placeholder="Any additional information you'd like to share..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
