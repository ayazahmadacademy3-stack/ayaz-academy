import Navbar from '@/components/navbar/Navbar';
import HeroSlider from '@/components/hero-slider/HeroSlider';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSlider />
      <WhyChooseUs />
      
      {/* Welcome Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2B4C9F] mb-4">
              Welcome to Ayaz Ahmad Academy
            </h2>
            <div className="w-24 h-1 bg-[#F5A623] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional O & A Level education that prepares students 
              for academic excellence and future success. Our experienced faculty and modern facilities 
              create the perfect environment for learning and growth.
            </p>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2B4C9F] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2B4C9F] mb-4">Quality Education</h3>
              <p className="text-gray-600">
                Comprehensive O & A Level curriculum designed to help students achieve top grades 
                and develop critical thinking skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2B4C9F] mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from highly qualified and experienced teachers who are passionate about 
                student success and academic excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2B4C9F] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2B4C9F] mb-4">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms and learning resources that provide students with 
                the best environment for academic growth.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#2B4C9F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#F5A623] mb-2">15+</div>
              <div className="text-xl">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#F5A623] mb-2">500+</div>
              <div className="text-xl">Students Enrolled</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#F5A623] mb-2">95%</div>
              <div className="text-xl">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#F5A623] mb-2">20+</div>
              <div className="text-xl">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#2B4C9F] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Ayaz Ahmad Academy today and take the first step towards academic excellence 
            and a bright future.
          </p>
          <button className="bg-[#F5A623] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2B4C9F] transition-all transform hover:scale-105 shadow-lg">
            Enroll Now
          </button>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#F5A623]">Ayaz Ahmad Academy</h3>
              <p className="text-gray-400">
                Institute of O & A Level - Providing quality education and shaping future leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#F5A623]">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="/courses" className="hover:text-white">Courses</a></li>
                <li><a href="/faculty" className="hover:text-white">Faculty</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#F5A623]">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 Phone: +92 XXX XXXXXXX</li>
                <li>📧 Email: info@ayazacademy.edu</li>
                <li>📍 Location: Your City, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Ayaz Ahmad Academy. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
      
      {/* Simple Footer for Testing */}
     <Footer/>
    </div>
  );
}
