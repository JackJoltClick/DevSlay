import { Zap, Shield, Users, Code2, Brain, Lock } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why DevSlay?</h2>
          <p className="text-xl text-gray-600">
            We're not just another dev shop. We're not an AI-only tool. 
            We're the perfect blend of cutting-edge AI and battle-tested engineering expertise.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="mr-3 text-blue-600" size={28} />
                What Our AI Does
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Writes 1000s of lines per day</p>
                    <p className="text-gray-600 text-sm">Claude & GPT-4 generate production-ready code at superhuman speed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Instant bug detection & fixes</p>
                    <p className="text-gray-600 text-sm">AI catches and resolves issues before they reach production</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">24/7 development cycles</p>
                    <p className="text-gray-600 text-sm">No timezone limitations - continuous progress on your project</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="mr-3 text-green-600" size={28} />
                What Human Engineers Ensure
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Enterprise-grade architecture</p>
                    <p className="text-gray-600 text-sm">Built by engineers from global fintech & S&P 500 companies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Production-ready architecture</p>
                    <p className="text-gray-600 text-sm">Built to handle real users from day one</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Strategic technical decisions</p>
                    <p className="text-gray-600 text-sm">10+ years experience guiding architecture choices</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              The Result: AI Speed + Human Quality
            </p>
            <p className="text-blue-700">
              Your MVP built 10x faster, with the reliability and scalability of products serving millions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;