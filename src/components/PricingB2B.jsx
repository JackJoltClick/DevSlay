import React from 'react';
import { Check, ArrowRight, Shield, Users, Zap } from 'lucide-react';

const PricingB2B = () => {
  const packages = [
    {
      name: "Validation MVP",
      subtitle: "Start collecting revenue Day 1",
      price: "$15,000",
      duration: "10 days",
      description: "Everything needed to validate your idea AND start monetizing immediately.",
      features: [
        "Custom-coded full-stack application",
        "Payment processing (Stripe) - start charging customers",
        "User authentication & account management",
        "Basic admin dashboard - manage your users",
        "Latest tech stack (React, Node.js, PostgreSQL)",
        "Professional cloud deployment",
        "Complete source code & documentation",
        "30 days of support"
      ],
      included: "Business model consultation - how to monetize",
      cta: "Start Monetizing",
      icon: <Zap className="text-blue-600" size={24} />,
      popular: false
    },
    {
      name: "Investor Ready",
      subtitle: "Show traction to raise capital",
      price: "$30,000",
      duration: "14 days",
      description: "Professional platform that demonstrates growth potential to investors.",
      features: [
        "Everything in Validation MVP",
        "Advanced analytics dashboard - track key metrics",
        "User onboarding flows - improve conversion",
        "Email automation & notifications",
        "RESTful API for future integrations",
        "Performance optimization for scale",
        "Professional CI/CD pipeline",
        "60 days of support & feature additions"
      ],
      included: "Investor deck technical slides + metrics setup",
      cta: "Build for Scale",
      icon: <Users className="text-green-600" size={24} />,
      popular: true,
      badge: "MOST CHOSEN"
    },
    {
      name: "Enterprise Platform",
      subtitle: "Category-defining product",
      price: "$75,000",
      duration: "6-8 weeks",
      description: "Sophisticated platform built for enterprise customers and complex workflows.",
      features: [
        "Everything in Investor Ready",
        "Multi-tenant architecture for enterprise sales",
        "Advanced integrations (CRM, ERP, SSO)",
        "Custom reporting & business intelligence",
        "White-label capabilities",
        "Dedicated senior development team",
        "Weekly strategy & planning sessions",
        "90 days of unlimited iterations",
        "Technical due diligence preparation"
      ],
      included: "CTO advisory services + enterprise sales enablement",
      cta: "Build Enterprise",
      icon: <Shield className="text-purple-600" size={24} />,
      popular: false
    }
  ];

  return (
    <section id="investment" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">From Idea to Revenue in Days, Not Months</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            Each package builds your business, not just your product. Start monetizing immediately, scale when ready.
            <span className="font-semibold text-gray-900"> Every tier includes revenue capability.</span>
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

        {/* Value Props */}
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 px-2">Why Smart Founders Choose DevSlay</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">Revenue Ready</p>
              <p className="text-sm text-gray-700">Every package includes monetization</p>
              <p className="text-xs text-gray-500 mt-1">Start charging customers immediately</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">Investor Approved</p>
              <p className="text-sm text-gray-700">Professional code & architecture</p>
              <p className="text-xs text-gray-500 mt-1">Pass technical due diligence</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">Scale Without Rebuild</p>
              <p className="text-sm text-gray-700">Built for growth from day one</p>
              <p className="text-xs text-gray-500 mt-1">Add features, don't start over</p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6 px-2">Our Commitment to You</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="p-3 sm:p-0">
              <Shield className="text-blue-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Quality Guaranteed</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Production-ready code, always</p>
            </div>
            <div className="p-3 sm:p-0">
              <Users className="text-green-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Your Code, Your IP</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Full ownership and documentation</p>
            </div>
            <div className="p-3 sm:p-0 sm:col-span-2 md:col-span-1">
              <Check className="text-purple-600 mx-auto mb-2 sm:mb-3" size={20} />
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Ongoing Support</h4>
              <p className="text-gray-600 text-xs sm:text-sm">We're here after launch too</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingB2B;