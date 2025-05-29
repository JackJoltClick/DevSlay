const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, DataPulse",
      content: "DevSlay built our analytics MVP in 10 days. What would've taken 3 months and $80k with traditional dev shops. The code quality matches what I've seen at publicly listed tech companies.",
      image: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "CEO, WorkflowAI",
      content: "The AI + human combo is unbeatable. They delivered a complex workflow automation platform that's now processing millions in transactions for our enterprise clients.",
      image: "MJ"
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, LegalTech Pro",
      content: "As a non-technical founder, DevSlay was a game-changer. Their team has experience from top-tier institutions, and it shows in the quality of work delivered.",
      image: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Founders Love Working With Us</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;