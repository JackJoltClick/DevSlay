import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TalentMatch AI",
      industry: "B2B Recruiting SaaS",
      challenge: "Needed to launch before Series A to prove market traction",
      timeline: "10 days",
      outcomes: [
        { metric: "2,000+", label: "Enterprise users acquired", icon: <Users size={16} /> },
        { metric: "$2.5M", label: "Series A raised", icon: <DollarSign size={16} /> },
        { metric: "15%", label: "Monthly user growth", icon: <TrendingUp size={16} /> }
      ],
      testimonial: "DevSlay delivered exactly what we needed to prove traction to investors. The code quality was production-ready from day one.",
      author: "Sarah Chen, Founder",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      company: "FinFlow Analytics",
      industry: "Financial Technology",
      challenge: "Complex compliance requirements with tight market window",
      timeline: "12 days",
      outcomes: [
        { metric: "$10M+", label: "Monthly transaction volume", icon: <DollarSign size={16} /> },
        { metric: "50+", label: "Financial institutions", icon: <Users size={16} /> },
        { metric: "99.9%", label: "System uptime", icon: <TrendingUp size={16} /> }
      ],
      testimonial: "The team understood our regulatory requirements and built a platform that passed SOC 2 audit on first try.",
      author: "Marcus Johnson, CTO",
      tech: ["Next.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      company: "WorkflowAI",
      industry: "Enterprise Automation",
      challenge: "Scale from prototype to enterprise-ready platform",
      timeline: "16 days",
      outcomes: [
        { metric: "Fortune 500", label: "Clients acquired", icon: <Users size={16} /> },
        { metric: "$5M", label: "ARR achieved", icon: <DollarSign size={16} /> },
        { metric: "10x", label: "Performance improvement", icon: <TrendingUp size={16} /> }
      ],
      testimonial: "They transformed our MVP into an enterprise platform that Fortune 500 companies trust with mission-critical workflows.",
      author: "Emma Rodriguez, CEO",
      tech: ["React", "Django", "Redis", "Kubernetes"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real partnerships, measurable outcomes, and long-term success.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Company Info */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8">
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <p className="text-blue-100 mb-4">{study.industry}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-blue-100">Challenge:</h4>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-blue-100">
                      <Clock size={16} />
                      <span className="text-sm">Delivered in {study.timeline}</span>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="p-8">
                    <h4 className="font-semibold mb-6 text-gray-900">Key Outcomes</h4>
                    <div className="space-y-4">
                      {study.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="text-green-600">{outcome.icon}</div>
                          <div>
                            <div className="font-bold text-2xl text-gray-900">{outcome.metric}</div>
                            <div className="text-gray-600 text-sm">{outcome.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h5 className="font-medium mb-2 text-gray-700">Technology Stack:</h5>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-8 flex flex-col justify-between">
                    <div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{study.author}</div>
                      </div>
                    </div>
                    
                    <button className="mt-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      <span>View detailed case study</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                See how we can accelerate your development timeline and help you achieve similar results.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 mx-auto">
                <span>Schedule Technical Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;