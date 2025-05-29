const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Build at Light Speed</h2>
          <p className="text-xl text-gray-600">Our battle-tested process delivers quality MVPs in record time.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Discovery & Architecture (Day 1)</h3>
                <p className="text-gray-600">Senior engineers from global tech firms architect your solution. We map out your vision, define the MVP scope, and design a system that scales from day one.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">AI-Powered Development (Days 2-6)</h3>
                <p className="text-gray-600">Our AI agents code at superhuman speed while senior engineers review, guide, and ensure quality. Daily progress updates keep you in the loop.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Testing & Deployment (Days 7-8)</h3>
                <p className="text-gray-600">Comprehensive testing, security review, and deployment setup. You get a production-ready MVP with documentation and support to launch immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;