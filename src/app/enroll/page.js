import Navbar from '@/components/navbar/Navbar';
import RegisterForm from '@/components/register/RegisterForm';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Register Now - Ayaz Ahmad Academy',
  description: 'Register as a student or teacher at Ayaz Ahmad Academy',
};

export default function EnrollPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a1628 100%)' }}>
      <Navbar />
      <RegisterForm />
      <Footer />
    </div>
  );
}
