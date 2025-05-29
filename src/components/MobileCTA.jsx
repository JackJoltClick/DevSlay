import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

const MobileCTA = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past hero section (roughly 500px)
      setIsVisible(scrollPosition > 500 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-600 shadow-2xl md:hidden">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm font-semibold text-gray-900">Ready to launch?</p>
            <p className="text-xs text-gray-600">2 spots left this month</p>
          </div>
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={onContactClick}
            className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg"
            style={{ minHeight: '48px' }} // Thumb-friendly minimum
          >
            <Calendar size={20} />
            <span>Claim Your Spot</span>
          </button>
          <button 
            onClick={() => window.open('tel:+1234567890', '_self')}
            className="px-4 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
            style={{ minHeight: '48px' }}
          >
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCTA;