import React from 'react';
import { Shield, RefreshCw, Lock, Users, Check, ArrowRight } from 'lucide-react';

const RiskReversal = () => {
  const guarantees = [
    {
      icon: <Shield className="text-green-600" size={24} />,
      title: "Quality Commitment",
      description: "We stand behind our work. If we don't deliver what we promise, we'll make it right."
    },
    {
      icon: <RefreshCw className="text-blue-600" size={24} />,
      title: "Free Revisions Until You're Happy",
      description: "We'll keep refining until it's exactly what you envisioned. No additional cost."
    },
    {
      icon: <Lock className="text-purple-600" size={24} />,
      title: "You Own Everything",
      description: "Source code, designs, databases, documentation. No vendor lock-in, ever."
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Elite Team Guarantee",
      description: "Every project led by engineers from global tech firms. We'll share their LinkedIn profiles."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Our Commitments to You
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              We're confident in our process and stand behind every project we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    {React.cloneElement(guarantee.icon, { size: 20, className: `${guarantee.icon.props.className} sm:w-6 sm:h-6` })}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{guarantee.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The DevSlay Promise */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl border border-blue-200">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-blue-900 px-2">
              The DevSlay Promise
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm sm:text-base"><strong>Ship on time:</strong> Your MVP will be delivered exactly when promised. We stick to our commitments.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm sm:text-base"><strong>Production quality:</strong> Code that's ready for real users and built to scale with your business.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm sm:text-base"><strong>No surprises:</strong> Fixed price, fixed timeline, fixed scope. What you see is what you get.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm sm:text-base"><strong>Support included:</strong> 30-60 days of bug fixes and minor updates at no extra cost.</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto shadow-lg w-full sm:w-auto">
                <span>Get Started Today</span>
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 px-2">Partner with experienced engineers who've built for millions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;