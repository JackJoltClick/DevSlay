import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroOptimized from './components/HeroOptimized';
import Problem from './components/Problem';
import WhyUs from './components/WhyUs';
import PricingOptimized from './components/PricingOptimized';
import RiskReversal from './components/RiskReversal';
import ROICalculator from './components/ROICalculator';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactForm from './ContactForm';
import MobileCTA from './components/MobileCTA';

const LandingPageOptimized = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Exit intent detection
  useEffect(() => {
    let exitIntentTriggered = false;
    
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !exitIntentTriggered && !showContactModal) {
        exitIntentTriggered = true;
        setShowExitIntent(true);
        setTimeout(() => setShowExitIntent(false), 10000); // Auto-close after 10s
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showContactModal]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrollToSection={scrollToSection} />
      
      {/* Optimized Funnel Flow */}
      <HeroOptimized scrollToSection={scrollToSection} />
      <Problem />
      <WhyUs />
      <PricingOptimized />
      <RiskReversal />
      <ROICalculator />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileCTA onContactClick={() => setShowContactModal(true)} />

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Claim Your MVP Slot</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            <ContactForm onClose={() => setShowContactModal(false)} />
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Wait! Don't Leave Empty-Handed</h3>
              <p className="text-gray-700 mb-6">
                Get our free "MVP Success Blueprint" - the exact framework we use to ship production-ready MVPs in 8 days.
              </p>
              
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Send Me The Blueprint
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                No spam. Unsubscribe anytime. Used by 1,000+ founders.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageOptimized;