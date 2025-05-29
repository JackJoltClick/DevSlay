import { ArrowRight, CheckCircle2, Users, Shield } from 'lucide-react';

const HeroB2B = ({ scrollToSection }) => {
  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gray-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>Senior & Lead Engineers</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-blue-400" />
              <span>AI Speed + Human Quality</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" />
              <span>Launch-Ready in 8 Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Value Proposition Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full border border-blue-200">
              <Shield size={20} />
              <span className="font-medium">Ship Faster Than Your Competition</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              From Idea to Launch
              <span className="block text-blue-600">in 8 Days</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stop waiting months for dev teams. We combine GPT-4 + Claude with senior engineers who've built for millions of users 
              to ship your MVP <span className="font-semibold text-gray-900">10x faster</span> than traditional development.
            </p>

            {/* Key Differentiators */}
            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6">
                <CheckCircle2 className="text-green-500 mx-auto mb-3" size={24} />
                <h3 className="font-semibold mb-2">You Own Everything</h3>
                <p className="text-gray-600 text-sm">Full source code, GitHub repo, and zero vendor lock-in</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <CheckCircle2 className="text-green-500 mx-auto mb-3" size={24} />
                <h3 className="font-semibold mb-2">Actually Production-Ready</h3>
                <p className="text-gray-600 text-sm">Not a prototype. Code that scales to thousands of users</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <CheckCircle2 className="text-green-500 mx-auto mb-3" size={24} />
                <h3 className="font-semibold mb-2">Expert Guidance Included</h3>
                <p className="text-gray-600 text-sm">Strategic tech advice so you make the right decisions</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg">
                <span>Get Your MVP Built</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('methodology')} 
                className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 transition-colors"
              >
                See How It Works
              </button>
            </div>

            {/* Note */}
            <p className="text-gray-500 text-sm">
              Free consultation • No commitment • We'll scope your project in 15 minutes
            </p>
          </div>

          {/* Team Expertise */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-8 font-medium">Our team has built systems for:</p>
            <div className="grid md:grid-cols-4 gap-8 items-center text-center opacity-70">
              <div>
                <div className="font-semibold text-lg text-gray-700">Global Travel Platforms</div>
                <div className="text-sm text-gray-500">High-traffic booking systems</div>
                <div className="text-xs text-blue-600 mt-1">Millions of users</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-700">Financial Services</div>
                <div className="text-sm text-gray-500">Trading & data platforms</div>
                <div className="text-xs text-blue-600 mt-1">Enterprise scale</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-700">Fortune 500 Tech</div>
                <div className="text-sm text-gray-500">Infrastructure & APIs</div>
                <div className="text-xs text-blue-600 mt-1">Mission-critical systems</div>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-700">High-Growth Startups</div>
                <div className="text-sm text-gray-500">0→1 product building</div>
                <div className="text-xs text-blue-600 mt-1">Rapid scaling</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroB2B;