import { Check, ArrowRight, Shield, Users, Zap } from 'lucide-react';

const PricingB2B = () => {
  const packages = [
    {
      name: "MVP Sprint",
      subtitle: "Get to market fast",
      price: "$12,000",
      duration: "8 days",
      description: "Perfect for testing your idea with real users and getting early feedback",
      features: [
        "Full-stack web application",
        "Core features that matter most",
        "User authentication & accounts",
        "Database design & setup",
        "Deployed and ready to use",
        "All source code + documentation",
        "30 days of bug fixes"
      ],
      included: "Free consultation to scope your project",
      cta: "Start Building",
      icon: <Zap className="text-blue-600" size={24} />,
      popular: false
    },
    {
      name: "Launch Ready",
      subtitle: "Built to scale from day one",
      price: "$18,000",
      duration: "12 days",
      description: "Everything you need to start charging customers and growing your business",
      features: [
        "Everything in MVP Sprint",
        "Payment processing (Stripe integration)",
        "Admin dashboard & user analytics",
        "API for future integrations",
        "Professional deployment pipeline",
        "Performance optimization",
        "60 days of support & improvements"
      ],
      included: "Growth strategy session included",
      cta: "Let's Go",
      icon: <Users className="text-green-600" size={24} />,
      popular: true,
      badge: "MOST POPULAR"
    },
    {
      name: "Full Partnership",
      subtitle: "We become your tech team",
      price: "Custom",
      duration: "Ongoing",
      description: "For complex products that need ongoing development and strategic guidance",
      features: [
        "Everything in Launch Ready",
        "Custom integrations & advanced features",
        "Dedicated engineering team",
        "Weekly strategy & planning sessions",
        "Priority support & rapid iterations",
        "Technical roadmap planning",
        "Ongoing partnership & consultation"
      ],
      included: "Complete technical strategy & roadmap",
      cta: "Let's Talk",
      icon: <Shield className="text-purple-600" size={24} />,
      popular: false
    }
  ];

  return (
    <section id="investment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Honest Pricing</h2>
          <p className="text-xl text-gray-600">
            No hidden fees, no surprises. You get exactly what's listed, 
            plus you own all the code forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white rounded-xl overflow-hidden border-2 transition-all hover:shadow-xl ${
              pkg.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-gray-300'
            }`}>
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                  {pkg.badge}
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  {pkg.icon}
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.subtitle}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    {pkg.duration !== "Ongoing" && (
                      <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <Check className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">{pkg.included}</p>
                </div>

                <button className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  <span>{pkg.cta}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">What You're Actually Getting</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Shield className="text-blue-600 mx-auto mb-3" size={24} />
              <h4 className="font-semibold mb-2">We Ship On Time</h4>
              <p className="text-gray-600 text-sm">8 days means 8 days. We stick to our commitments</p>
            </div>
            <div>
              <Users className="text-green-600 mx-auto mb-3" size={24} />
              <h4 className="font-semibold mb-2">You Own Everything</h4>
              <p className="text-gray-600 text-sm">Code, database, domains—it's all yours forever</p>
            </div>
            <div>
              <Check className="text-purple-600 mx-auto mb-3" size={24} />
              <h4 className="font-semibold mb-2">Actually Production-Ready</h4>
              <p className="text-gray-600 text-sm">Not a prototype. Code that can handle real users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingB2B;