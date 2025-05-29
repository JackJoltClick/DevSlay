import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How can you build an MVP in just 8 days?",
      a: "We combine cutting-edge AI agents (Claude, GPT-4) with senior engineers who've built systems for millions of users at Fortune 500 companies. AI handles the heavy lifting while humans ensure quality, performance, and scalability."
    },
    {
      q: "Is this just another no-code tool?",
      a: "Absolutely not. We write production-grade code using React, Node.js, Python, and modern frameworks. You get the full source code, properly architected and deployment-ready. The AI accelerates development, but senior engineers with 10+ years experience control the outcome."
    },
    {
      q: "Who owns the code?",
      a: "You do. 100%. We deliver the complete source code, documentation, and deployment scripts. You can continue development with your own team, hire us for ongoing work, or take it to any other developer. No vendor lock-in."
    },
    {
      q: "What if I need changes after delivery?",
      a: "All packages include post-launch support (30-60 days). We also offer ongoing development partnerships. Since you own the code, you have complete flexibility in how you proceed after launch."
    },
    {
      q: "Can I launch with this? Is it production-ready?",
      a: "Yes. Our engineers have deployed systems serving millions of users at major financial and tech companies. Your MVP will have scalable architecture, monitoring, and everything needed for a successful launch."
    },
    {
      q: "Can you build complex SaaS products?",
      a: "Yes. We've built AI-powered analytics platforms, B2B marketplaces, workflow automation tools, and more. Our engineers have experience with enterprise integrations, complex business logic, and high-scale systems from their work at global tech companies."
    },
    {
      q: "What's your tech stack?",
      a: "We're stack-agnostic but specialize in React/Next.js, Node.js, Python/Django, PostgreSQL, and cloud platforms (AWS, Vercel). We match the stack to your needs and can integrate with any existing systems."
    },
    {
      q: "What about performance and scalability?",
      a: "Our senior engineers have built high-scale systems for major financial and tech companies. We implement performance best practices, conduct thorough code reviews, and architect systems that can grow with your business."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-lg">{faq.q}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;