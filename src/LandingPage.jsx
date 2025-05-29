import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactForm from './ContactForm';

const LandingPage = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrollToSection={scrollToSection} />
      
      {/* Floating CTA */}
      {showFloatingCTA && (
        <button 
          onClick={() => setShowContactModal(true)}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2"
        >
          <Calendar size={20} />
          <span>Book Call</span>
        </button>
      )}

      <Hero scrollToSection={scrollToSection} />
      <WhyUs />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Submit Your Project</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <ContactForm onClose={() => setShowContactModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;