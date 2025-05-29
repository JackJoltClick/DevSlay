import { X, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <DollarSign className="text-red-500" size={24} />,
      title: "$50K-$150K",
      description: "What traditional agencies charge for an MVP"
    },
    {
      icon: <Clock className="text-red-500" size={24} />,
      title: "3-6 Months",
      description: "Time to launch with typical dev shops"
    },
    {
      icon: <TrendingDown className="text-red-500" size={24} />,
      title: "70% Fail",
      description: "MVPs that never ship or run out of budget"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Most Founders Never Ship
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            You've got the vision. But the traditional path to launch is broken.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-center text-sm">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-red-900 mb-1">The Real Cost of Waiting</p>
                <p className="text-red-800 text-sm">
                  Every week you delay is a week your competitors gain market share. 
                  Every month of development burns through runway you need for growth. 
                  <span className="font-semibold"> Speed isn't just nice to have—it's survival.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;