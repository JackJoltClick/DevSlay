import { ArrowRight, Check, Zap } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Zap size={16} />
          <span className="text-sm font-medium">AI + Elite Engineering Teams</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your MVP. Delivered in <span className="text-blue-600">10 Days.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Powered by AI + Engineers who've built at global fintech firms, high-growth startups, and top-tier institutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <span>Book Free Discovery Call</span>
            <ArrowRight size={20} />
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="border-2 border-gray-300 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 transition-colors">
            See How It Works
          </button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Check className="text-green-500" size={20} />
            <span>50+ Production MVPs Shipped</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="text-green-500" size={20} />
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="text-green-500" size={20} />
            <span>Full Code Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;