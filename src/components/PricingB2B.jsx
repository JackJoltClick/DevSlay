import React from 'react';
import { Check, ArrowRight, Shield, Users, Zap } from 'lucide-react';

const PricingB2B = () => {
  const packages = [
    {
      name: "MVP Sprint",
      subtitle: "Validate fast, iterate smart",
      price: "$15,000",
      duration: "10 days",
      description: "Ship your MVP before competitors even finish their requirements docs",
      features: [
        "Production-ready full-stack application",
        "Core features built with AI acceleration",
        "Secure user authentication & data management",
        "Scalable database architecture",
        "Professional cloud deployment (AWS/Vercel)",
        "Complete source code & technical documentation",
        "45 days of iterations & improvements",
        "Basic analytics & user tracking setup"
      ],
      included: "Free technical roadmap for your next phase",
      cta: "Claim Your Sprint",
      icon: <Zap className="text-blue-600" size={24} />,
      popular: false
    },
    {
      name: "Scale Ready",
      subtitle: "Enterprise-grade from the start",
      price: "$30,000",
      duration: "14 days",
      description: "When you need to move fast but can't afford to rebuild later",
      features: [
        "Everything in MVP Sprint",
        "Advanced payment processing & subscription management",
        "Custom admin dashboard with business intelligence",
        "RESTful API & webhook infrastructure",
        "Enterprise CI/CD with automated testing",
        "Performance optimization for 100K+ users",
        "Security audit & penetration testing",
        "90 days of unlimited iterations",
        "Technical hiring & team scaling guidance"
      ],
      included: "CTO advisory session + growth playbook",
      cta: "Build to Scale",
      icon: <Users className="text-green-600" size={24} />,
      popular: true,
      badge: "FOUNDER FAVORITE"
    },
    {
      name: "Enterprise Partnership",
      subtitle: "Your complete tech department",
      price: "$100K+",
      duration: "Quarterly",
      description: "For visionary founders building category-defining products",
      features: [
        "Everything in Scale Ready",
        "Custom AI/ML model development",
        "Dedicated team of 3-5 senior engineers",
        "Weekly executive strategy sessions",
        "24/7 emergency support with 1-hour SLA",
        "Advanced integrations (ERP, CRM, legacy systems)",
        "Patent-pending technology development",
        "Board presentation support",
        "Equity participation options available"
      ],
      included: "Full CTO services + investor pitch deck",
      cta: "Schedule Strategy Call",
      icon: <Shield className="text-purple-600" size={24} />,
      popular: false
    }
  ];

  return (
    <section id="investment" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">Simple, Honest Pricing</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            No hidden fees, no surprises. You get exactly what's listed, 
            plus you own all the code forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-xl overflow-hidden border-2 transition-all hover:shadow-xl ${
              pkg.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-gray-300'
            }`}>
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  {React.cloneElement(pkg.icon, { size: 20, className: `${pkg.icon.props.className} sm:w-6 sm:h-6` })}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{pkg.subtitle}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{pkg.price}</span>
                    {pkg.duration !== "Ongoing" && (
                      <span className="text-gray-600 ml-2 text-sm sm:text-base">/ {pkg.duration}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-sm">
                      <Check className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs sm:text-sm font-medium text-blue-900">{pkg.included}</p>
                </div>

                <button className={`w-full py-4 sm:py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base min-h-[50px] ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  <span>{pkg.cta}</span>
                  <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 px-2">What You're Actually Getting</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="p-3 sm:p-0">
              <Shield className="text-blue-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">We Ship On Time</h4>
              <p className="text-gray-600 text-xs sm:text-sm">10 days means 10 days. We stick to our commitments</p>
            </div>
            <div className="p-3 sm:p-0">
              <Users className="text-green-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">You Own Everything</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Code, database, domains—it's all yours forever</p>
            </div>
            <div className="p-3 sm:p-0 sm:col-span-2 md:col-span-1">
              <Check className="text-purple-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Actually Production-Ready</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Not a prototype. Code that can handle real users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingB2B;