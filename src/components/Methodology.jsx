import { Shield, Code, Users, CheckCircle, ArrowDown, Zap } from 'lucide-react';

const Methodology = () => {
  const phases = [
    {
      phase: "01",
      title: "Strategic Discovery",
      duration: "Day 1",
      description: "Comprehensive technical and business requirements analysis",
      activities: [
        "Market positioning & competitive analysis",
        "Technical architecture planning",
        "User experience design review",
        "Performance requirements analysis",
        "Success metrics definition"
      ],
      deliverables: [
        "Technical specification document",
        "Project roadmap & timeline",
        "Risk assessment & mitigation plan"
      ],
      team: "Lead architect + Business strategist",
      icon: <Shield className="text-blue-600" size={32} />
    },
    {
      phase: "02",
      title: "Accelerated Development",
      duration: "Days 2-6",
      description: "AI-powered development with continuous senior oversight",
      activities: [
        "Core feature development",
        "Database design & implementation",
        "API development & integration",
        "Performance optimization",
        "Testing framework setup"
      ],
      deliverables: [
        "Functional MVP application",
        "Comprehensive test suite",
        "Security audit report"
      ],
      team: "Senior engineers + AI development agents",
      icon: <Code className="text-green-600" size={32} />
    },
    {
      phase: "03",
      title: "Quality Assurance",
      duration: "Day 7",
      description: "Rigorous testing and production readiness validation",
      activities: [
        "End-to-end testing",
        "Performance benchmarking",
        "Load testing & optimization",
        "Code review & refactoring",
        "Documentation completion"
      ],
      deliverables: [
        "Test results & performance metrics",
        "Load testing analysis",
        "Complete technical documentation"
      ],
      team: "QA specialists + Performance engineers",
      icon: <CheckCircle className="text-purple-600" size={32} />
    },
    {
      phase: "04",
      title: "Deployment & Transfer",
      duration: "Day 8",
      description: "Production deployment and complete knowledge transfer",
      activities: [
        "Production environment setup",
        "CI/CD pipeline configuration",
        "Monitoring & alerting setup",
        "Team knowledge transfer",
        "Launch readiness verification"
      ],
      deliverables: [
        "Live production application",
        "Complete source code repository",
        "Operations & maintenance guide"
      ],
      team: "DevOps engineers + Technical leads",
      icon: <Zap className="text-orange-600" size={32} />
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach combining AI acceleration with human expertise 
              to deliver enterprise-grade results in 8 days.
            </p>
          </div>

          {/* Process Overview */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-xl p-8">
              <div className="text-center mb-6 md:mb-0">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">Phase Process</div>
              </div>
              <div className="text-center mb-6 md:mb-0">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600">Day Delivery</div>
              </div>
              <div className="text-center mb-6 md:mb-0">
                <div className="text-3xl font-bold text-purple-600 mb-2">AI+Human</div>
                <div className="text-gray-600">Hybrid Approach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Enterprise</div>
                <div className="text-gray-600">Grade Quality</div>
              </div>
            </div>
          </div>

          {/* Detailed Process */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Phase Header */}
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                        {phase.icon}
                        <div>
                          <div className="text-2xl font-bold text-gray-400">{phase.phase}</div>
                          <div className="text-sm text-blue-600 font-medium">{phase.duration}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                      <p className="text-gray-600 text-sm">{phase.description}</p>
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Key Activities</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Deliverables</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={14} />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Team */}
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-900">Team Composition</h4>
                      <div className="flex items-start space-x-2">
                        <Users className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                        <p className="text-sm text-gray-600">{phase.team}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="text-gray-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quality Assurance */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Quality Assurance Standards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="text-blue-600 mx-auto mb-4" size={32} />
                <h4 className="font-semibold mb-2">Performance First</h4>
                <p className="text-gray-600 text-sm">Load testing, optimization, and scalable architecture patterns</p>
              </div>
              <div className="text-center">
                <Code className="text-green-600 mx-auto mb-4" size={32} />
                <h4 className="font-semibold mb-2">Code Excellence</h4>
                <p className="text-gray-600 text-sm">Automated testing, code reviews, and clean architecture</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-purple-600 mx-auto mb-4" size={32} />
                <h4 className="font-semibold mb-2">Production Ready</h4>
                <p className="text-gray-600 text-sm">Scalable systems, monitoring, and deployment automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;