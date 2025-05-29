import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(5000);
  const [launchDelay, setLaunchDelay] = useState(3);

  const devSlayCost = 15000; // SlayCore price
  const traditionalCost = 75000; // Traditional agency cost
  const traditionalTime = 6; // months

  const revenueGained = monthlyRevenue * (traditionalTime - 1); // 1 month with DevSlay vs 6 months traditional
  const costSavings = traditionalCost - devSlayCost;
  const totalBenefit = revenueGained + costSavings;
  const roi = ((totalBenefit - devSlayCost) / devSlayCost * 100).toFixed(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-600">
              See how much DevSlay saves you in time and money
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Inputs */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calculator className="mr-3 text-blue-600" size={28} />
                  Your Numbers
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Monthly Revenue (post-launch)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={monthlyRevenue}
                        onChange={(e) => setMonthlyRevenue(parseInt(e.target.value) || 0)}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="5000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many months would you delay launch with traditional development?
                    </label>
                    <select
                      value={launchDelay}
                      onChange={(e) => setLaunchDelay(parseInt(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={2}>2 months</option>
                      <option value={3}>3 months</option>
                      <option value={4}>4 months</option>
                      <option value={5}>5 months</option>
                      <option value={6}>6 months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="mr-3 text-green-600" size={28} />
                  Your Savings
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Revenue gained by launching {launchDelay - 1} months earlier:</span>
                      <span className="font-bold text-green-600">${revenueGained.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Development cost savings:</span>
                      <span className="font-bold text-blue-600">${costSavings.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total benefit:</span>
                      <span className="font-bold text-purple-600">${totalBenefit.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">Your ROI:</span>
                      <span className="font-bold text-2xl text-yellow-600">{roi}%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Bottom line:</strong> For every $1 you invest in DevSlay, you get ${(totalBenefit / devSlayCost).toFixed(2)} in return through faster launch and cost savings.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto shadow-lg">
                <DollarSign size={20} />
                <span>Start Saving Today</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;