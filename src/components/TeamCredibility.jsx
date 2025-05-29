import { Users, Award, Shield, Code, TrendingUp, Globe } from 'lucide-react';

const TeamCredibility = () => {
  const expertise = [
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Financial Services Experience", 
      description: "Built trading platforms and data systems processing billions in transactions",
      details: "High-scale, low-latency distributed systems"
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Enterprise Software Background",
      description: "Architected systems serving millions of users for Fortune 500 companies",
      details: "Scalable architecture, high availability, global deployment"
    },
    {
      icon: <Award className="text-purple-600" size={32} />,
      title: "Technical Leadership",
      description: "Led engineering teams building mission-critical software",
      details: "Performance engineering, system optimization, team scaling"
    },
    {
      icon: <TrendingUp className="text-orange-600" size={32} />,
      title: "Startup Expertise", 
      description: "Built 0→1 products for high-growth companies from idea to IPO",
      details: "Rapid iteration, product-market fit, scaling challenges"
    }
  ];

  const capabilities = [
    {
      category: "AI & Automation",
      skills: ["GPT-4 & Anthropic-powered AI agent development", "AI automation systems", "Automated code generation", "Intelligent testing agents"]
    },
    {
      category: "Enterprise Architecture", 
      skills: ["Microservices design", "Cloud-native development", "Scalable databases", "Performance optimization"]
    },
    {
      category: "Modern Tech Stack",
      skills: ["React/Next.js expertise", "Node.js & Python", "PostgreSQL & Redis", "AWS & container orchestration"]
    },
    {
      category: "Product Development",
      skills: ["MVP methodology", "User experience design", "Performance optimization", "Deployment automation"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Senior Engineers Who've Built at Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings experience from building systems that serve millions of users, 
              using the same architecture patterns and engineering practices as Fortune 500 companies.
            </p>
          </div>

          {/* Team Background */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {expertise.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{exp.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-center mb-12">Core Technical Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold mb-4 text-gray-900">{capability.category}</h4>
                  <ul className="space-y-2">
                    {capability.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <Code className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={14} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-16 text-center">
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Development Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Users className="text-blue-400 mx-auto mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Human-Centered AI</h4>
                  <p className="text-gray-300 text-sm">AI accelerates development, but human expertise ensures quality, performance, and scalability</p>
                </div>
                <div>
                  <Shield className="text-green-400 mx-auto mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Enterprise Standards</h4>
                  <p className="text-gray-300 text-sm">Every line of code meets the same standards we applied at Fortune 500 companies</p>
                </div>
                <div>
                  <TrendingUp className="text-purple-400 mx-auto mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Speed Without Compromise</h4>
                  <p className="text-gray-300 text-sm">8-day delivery doesn't mean cutting corners—it means eliminating inefficiencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCredibility;