import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#4A2805] font-sans selection:bg-[#A95C45] selection:text-[#F8F5F0]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
