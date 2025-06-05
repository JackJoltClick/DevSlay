import { Check, X, Flame, Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const PricingOptimized = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 58, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const packages = [
    {
      name: "SlayLite",
      tagline: "MVP essentials",
      price: "$14,997",
      originalPrice: "$24,999",
      duration: "10 days",
      spots: "5 spots left",
      features: [
        "Custom-coded SaaS MVP",
        "Modern tech stack (React, Node.js)",
        "AI-accelerated development",
        "Core features only",
        "Professional deployment",
        "Complete source code ownership",
        "30-day bug support"
      ],
      notIncluded: ["Payment processing", "Admin panel"],
      cta: "Claim Your Spot",
      savings: "vs. UK agencies",
      popular: false
    },
    {
      name: "SlayCore",
      tagline: "Launch ready",
      price: "$29,997",
      originalPrice: "$49,999",
      duration: "14 days",
      spots: "3 spots left",
      features: [
        "Everything in SlayLite",
        "Custom payment processing setup",
        "Secure user authentication",
        "Tailored admin dashboard",
        "Professional CI/CD pipeline",
        "RESTful API endpoints",
        "Performance optimization",
        "60-day support"
      ],
      notIncluded: ["Complex features"],
      cta: "Start Building Today",
      savings: "vs. US agencies",
      popular: true,
      badge: "RECOMMENDED"
    },
    {
      name: "SlayElite",
      tagline: "Custom enterprise",
      price: "$100K+",
      originalPrice: null,
      duration: "3+ months",
      spots: "By application",
      features: [
        "Everything in SlayCore",
        "Bespoke development",
        "Enterprise integrations",
        "Dedicated team",
        "Weekly meetings",
        "Priority support",
        "Custom architecture & stack",
        "Flexible terms"
      ],
      notIncluded: [],
      cta: "Get Quote",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Urgency Banner */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-2 text-yellow-800">
              <Flame className="text-orange-500" size={20} />
              <span className="font-semibold">Limited Spots at Agency-Beating Prices:</span>
              <div className="flex space-x-2 font-mono text-lg">
                <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Development at Fair Prices</h2>
          <p className="text-xl text-gray-600">
            Quality code delivered fast by experienced engineers.
            <span className="font-semibold text-gray-900"> Custom code, not templates.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-xl overflow-hidden transform transition-all hover:scale-105 ${
              pkg.popular ? 'shadow-2xl ring-2 ring-blue-600' : 'shadow-lg'
            }`}>
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.tagline}</p>
                
                <div className="mb-4">
                  {pkg.originalPrice && (
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-gray-400 line-through text-lg">{pkg.originalPrice}</span>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                        {pkg.savings}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                  </div>
                </div>

                {pkg.spots && (
                  <div className="flex items-center space-x-2 mb-6 text-sm">
                    <Clock size={16} className="text-orange-500" />
                    <span className="text-orange-600 font-medium">{pkg.spots}</span>
                  </div>
                )}

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <X className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  <span>{pkg.cta}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span>30-day money back</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-green-500" size={20} />
              <span>Own your code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOptimized;