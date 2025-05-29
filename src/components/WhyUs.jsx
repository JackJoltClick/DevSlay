import { Zap, Shield, Users, Code2, Brain, Lock } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">Why DevSlay?</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            We're not just another dev shop. We're not an AI-only tool. 
            We're the perfect blend of cutting-edge AI and battle-tested engineering expertise.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-12 sm:mb-16">
            <div className="px-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                <Brain className="mr-2 sm:mr-3 text-blue-600" size={24} />
                What Our AI Does
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Writes 1000s of lines per day</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Claude & GPT-4 generate production-ready code at superhuman speed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Instant bug detection & fixes</p>
                    <p className="text-gray-600 text-xs sm:text-sm">AI catches and resolves issues before they reach production</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="text-blue-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">24/7 development cycles</p>
                    <p className="text-gray-600 text-xs sm:text-sm">No timezone limitations - continuous progress on your project</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="px-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                <Shield className="mr-2 sm:mr-3 text-green-600" size={24} />
                What Human Engineers Ensure
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Enterprise-grade architecture</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Built by engineers from global fintech & S&P 500 companies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Production-ready architecture</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Built to handle real users from day one</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lock className="text-green-600 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Strategic technical decisions</p>
                    <p className="text-gray-600 text-xs sm:text-sm">10+ years experience guiding architecture choices</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 sm:p-8 text-center mx-2">
            <p className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
              The Result: AI Speed + Human Quality
            </p>
            <p className="text-blue-700 text-sm sm:text-base">
              Your MVP built 10x faster, with the reliability and scalability of products serving millions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;