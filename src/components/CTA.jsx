import { Calendar, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ship Your Vision?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Stop burning cash on slow development. Get your MVP to market in 8 days and start validating with real customers.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
            <Calendar size={20} />
            <span>Book Discovery Call</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
            Submit Your Idea
          </button>
        </div>
        <p className="mt-8 text-sm opacity-75">
          No commitment. 15-minute call. We'll tell you exactly what we can build.
        </p>
      </div>
    </section>
  );
};

export default CTA;