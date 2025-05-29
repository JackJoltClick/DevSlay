import { TrendingUp, Clock, DollarSign, Users, BarChart3, Target } from 'lucide-react';

const BusinessCase = () => {
  const businessImpacts = [
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: "Ship Before Competition",
      description: "While they're still in planning meetings, you're already talking to customers and iterating.",
      metric: "5-month head start advantage"
    },
    {
      icon: <DollarSign className="text-green-600" size={32} />,
      title: "Keep Your Runway",
      description: "Spend $15K instead of $75K+ on development. Use the savings for marketing and growth.",
      metric: "Save $60K+ vs agencies"
    },
    {
      icon: <Target className="text-purple-600" size={32} />,
      title: "Learn Fast, Pivot Faster",
      description: "Get real user feedback in weeks. Discover what actually works before burning months building the wrong thing.",
      metric: "Validate in weeks, not months"
    }
  ];

  const riskFactors = [
    {
      title: "Competitive Window",
      description: "Every month delayed is market share lost to faster-moving competitors",
      urgency: "High"
    },
    {
      title: "Runway Burn",
      description: "Extended development consumes capital needed for customer acquisition",
      urgency: "Critical"
    },
    {
      title: "Team Opportunity Cost",
      description: "Internal resources tied up in development vs. business growth activities",
      urgency: "Medium"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Speed = Survival
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While your competitors spend 6 months building, you'll be 5 months ahead collecting revenue and user feedback. 
              Speed isn't a luxury—it's your biggest competitive advantage.
            </p>
          </div>

          {/* Business Impact Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {businessImpacts.map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center mb-6">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{impact.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{impact.description}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-900 text-center">{impact.metric}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Analysis */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <BarChart3 className="mr-3 text-green-600" size={28} />
                  Investment Analysis
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">DevSlay Partnership</span>
                    <span className="text-xl font-bold text-green-600">$15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="font-medium">Traditional Agency</span>
                    <span className="text-xl font-bold text-red-600">$75,000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Internal Development</span>
                    <span className="text-xl font-bold text-yellow-600">$120,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="mr-3 text-blue-600" size={28} />
                  Revenue Opportunity
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Monthly Revenue Potential (post-launch):</p>
                    <p className="text-3xl font-bold text-blue-600">$10,000 - $50,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">5-month head start value:</p>
                    <p className="text-2xl font-bold text-green-600">$50,000 - $250,000</p>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">
                      ROI Range: 300% - 1,600% in first year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Mitigation */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
            <h3 className="text-2xl font-semibold mb-6 text-center text-red-900">
              The Hidden Cost of "Waiting Until Later"
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {riskFactors.map((risk, index) => (
                <div key={index} className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{risk.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      risk.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                      risk.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {risk.urgency}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{risk.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-red-800 font-semibold">
                The "perfect" moment to launch never comes. But the perfect moment to start building? That's right now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCase;