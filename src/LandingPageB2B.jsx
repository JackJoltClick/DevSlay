import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroB2B from './components/HeroB2B';
import BusinessCase from './components/BusinessCase';
import WhyUs from './components/WhyUs';
import TeamCredibility from './components/TeamCredibility';
import PricingB2B from './components/PricingB2B';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactForm from './ContactForm';

const LandingPageB2B = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrollToSection={scrollToSection} />
      
      {/* B2B Service-Focused Funnel */}
      <HeroB2B scrollToSection={scrollToSection} />
      <BusinessCase />
      <WhyUs />
      <TeamCredibility />
      <PricingB2B />
      <Methodology />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Overthinking. Start Building.
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            You've read this far, which means you're serious about shipping. 
            Let's turn your idea into something people can actually use—in 10 days, not 10 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Let's Build This Thing</span>
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Still Have Questions?
            </button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Free consultation • We'll scope your project and give you an honest timeline
          </p>
        </div>
      </section>

      <Footer />

      {/* Professional Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Schedule Technical Consultation</h3>
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
    </div>
  );
};

export default LandingPageB2B;