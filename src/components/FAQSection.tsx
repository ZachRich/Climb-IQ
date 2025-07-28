import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the AI actually create my training program?",
      answer: "ClimbIQ analyzes your daily readiness responses, training history, and performance patterns to identify your optimal training zone. The AI model learns your unique recovery patterns and automatically adjusts workout intensity, volume, and exercise selection to keep you progressing without overreaching."
    },
    {
      question: "What if I don't have experience with structured training?",
      answer: "ClimbIQ is designed for all levels. The AI starts with conservative workouts and gradually increases intensity as it learns your responses. Each exercise includes detailed instructions, form cues, and video demonstrations to ensure you develop proper technique from day one."
    },
    {
      question: "Can I use this with my existing equipment?",
      answer: "Absolutely! ClimbIQ works with any hangboard, campus board, or basic training setup. The program focuses on intelligent progression and periodization rather than specific equipment. We provide equipment recommendations, but you can adapt workouts to what you have available."
    },
    {
      question: "How long before I see results?",
      answer: "Most climbers notice improved recovery and training consistency within the first week. Measurable strength gains typically appear within 3-4 weeks, with significant grade progression visible by month 3. The AI becomes more accurate at personalizing your training as it collects more data about your responses."
    },
    {
      question: "What's included in the mobile app?",
      answer: "The ClimbIQ app provides daily readiness assessments, AI-generated workouts with video guidance, rest timers, progress tracking, and detailed analytics. You'll also get access to our exercise library, form tutorials, and integration with popular climbing apps."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day satisfaction guarantee. If ClimbIQ doesn't improve your training quality and prevent overtraining symptoms within 30 days, we'll provide a full refund. We're confident in our AI-powered approach and want you to train with complete peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ClimbIQ Pro
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className={`text-2xl transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="mailto:support@ClimbIQ.com" className="text-primary hover:text-primary/80 font-semibold">
              Get in touch with our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;