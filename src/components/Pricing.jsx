import { Check, X } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "SlayLite",
      price: "$15,000",
      duration: "10 days",
      features: [
        "Full-stack web application",
        "AI-accelerated development",
        "Core features implementation",
        "Basic deployment setup",
        "Source code ownership",
        "30-day bug support"
      ],
      notIncluded: ["Payment processing", "Admin dashboard"],
      cta: "Start Your MVP",
      popular: false
    },
    {
      name: "SlayCore",
      price: "$30,000",
      duration: "14 days",
      features: [
        "Everything in SlayLite",
        "Payment processing integration",
        "User authentication system",
        "Admin dashboard",
        "Basic CI/CD setup",
        "API endpoints",
        "60-day support period"
      ],
      notIncluded: ["Custom integrations", "Ongoing maintenance"],
      cta: "Build Complete MVP",
      popular: true
    },
    {
      name: "SlayElite",
      price: "$100K+",
      duration: "Custom",
      features: [
        "Everything in SlayCore",
        "Complex feature development",
        "Multiple integrations",
        "Dedicated project team",
        "Weekly progress meetings",
        "Priority support",
        "Custom architecture design",
        "Flexible payment terms"
      ],
      notIncluded: [],
      cta: "Let's Talk",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Launch Speed</h2>
          <p className="text-xl text-gray-600">Transparent pricing. No hidden fees. Just exceptional value.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-sm overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {pkg.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-400">
                      <X className="mr-2 flex-shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;