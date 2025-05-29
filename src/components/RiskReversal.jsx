import { Shield, RefreshCw, Lock, Users, Check, ArrowRight } from 'lucide-react';

const RiskReversal = () => {
  const guarantees = [
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "Quality Commitment",
      description: "We stand behind our work. If we don't deliver what we promise, we'll make it right."
    },
    {
      icon: <RefreshCw className="text-blue-600" size={32} />,
      title: "Free Revisions Until You're Happy",
      description: "We'll keep refining until it's exactly what you envisioned. No additional cost."
    },
    {
      icon: <Lock className="text-purple-600" size={32} />,
      title: "You Own Everything",
      description: "Source code, designs, databases, documentation. No vendor lock-in, ever."
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Elite Team Guarantee",
      description: "Every project led by engineers from global tech firms. We'll share their LinkedIn profiles."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Commitments to You
            </h2>
            <p className="text-xl text-gray-600">
              We're confident in our process and stand behind every project we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {guarantee.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
                    <p className="text-gray-600">{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The DevSlay Promise */}
          <div className="bg-white rounded-xl p-8 shadow-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">
              The DevSlay Promise
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <p><strong>Ship on time:</strong> Your MVP will be delivered exactly when promised. We stick to our commitments.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <p><strong>Production quality:</strong> Code that's ready for real users and built to scale with your business.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <p><strong>No surprises:</strong> Fixed price, fixed timeline, fixed scope. What you see is what you get.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <p><strong>Support included:</strong> 30-60 days of bug fixes and minor updates at no extra cost.</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto shadow-lg">
                <span>Get Started Today</span>
                <ArrowRight size={20} />
              </button>
              <p className="text-gray-500 text-sm mt-3">Partner with experienced engineers who've built for millions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;