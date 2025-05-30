import { ArrowRight, CheckCircle2, Star, Users, Zap } from 'lucide-react';

const HeroOptimized = ({ scrollToSection }) => {
  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>52 MVPs Shipped</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span>$14M+ Raised by Clients</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-400" />
              <span>100% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full animate-pulse">
              <Zap size={16} />
              <span className="text-sm font-medium">Only 2 MVP slots left for February</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Launch Your SaaS in 10 Days
              <span className="block text-blue-600">Or Your Money Back</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We use AI to code 90% faster, but senior engineers from global tech companies ensure it's 
              <span className="font-semibold"> production-ready, scalable, and secure.</span> Not another no-code tool.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Full Source Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>Production-Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={20} />
                <span>30-Day Guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Claim Your MVP Slot</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 transition-colors"
              >
                View Pricing & Timeline
              </button>
            </div>

            {/* Micro-commitment */}
            <p className="text-gray-500 text-sm">
              No credit card required • 15-minute discovery call • Get a free MVP roadmap
            </p>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6">Trusted by founders who've built:</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-gray-400">
                <div className="font-semibold">TalentMatch</div>
                <div className="text-sm">2,000+ users</div>
              </div>
              <div className="text-gray-400">
                <div className="font-semibold">FinFlow</div>
                <div className="text-sm">$10M processed</div>
              </div>
              <div className="text-gray-400">
                <div className="font-semibold">EduPath Pro</div>
                <div className="text-sm">Series A funded</div>
              </div>
              <div className="text-gray-400">
                <div className="font-semibold">WorkflowAI</div>
                <div className="text-sm">Enterprise SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOptimized;