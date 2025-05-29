const Portfolio = () => {
  const projects = [
    {
      name: "TalentMatch AI",
      description: "B2B recruiting platform with AI matching",
      stats: "2,000+ users, Series A funded"
    },
    {
      name: "FinFlow Analytics",
      description: "Real-time financial dashboard for SMBs",
      stats: "Processing $10M+ monthly"
    },
    {
      name: "EduPath Pro",
      description: "Learning management system with AI tutors",
      stats: "15,000+ students onboarded"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Production-Ready MVPs We've Shipped</h2>
          <p className="text-xl text-gray-600">Built by engineers from global tech firms. Used by thousands.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm font-medium text-blue-600">{project.stats}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;