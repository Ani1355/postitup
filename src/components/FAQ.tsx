import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does AI-powered writing work?",
    answer:
      "Our AI is trained on over 100M+ successful tweets and learns your unique writing style. It analyzes what content performs best in your niche and generates authentic-sounding posts that match your voice while maximizing engagement potential.",
  },
  {
    question: "Is my Twitter data secure?",
    answer:
      "Absolutely. We use bank-level encryption and never store your Twitter password. We only request the minimum permissions needed to schedule posts and view analytics. Your data is never shared with third parties.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes! You can cancel your subscription at any time with no questions asked. If you cancel, you'll retain access until the end of your current billing period. We also offer a 14-day money-back guarantee.",
  },
  {
    question: "Do you support other social platforms?",
    answer:
      "Currently, we're focused exclusively on Twitter/X to provide the best possible experience. However, we're exploring LinkedIn and Instagram support for future releases. Join our waitlist to be notified!",
  },
  {
    question: "What are your AI writing limits?",
    answer:
      "The Creator plan includes 30 AI-generated posts per month, perfect for getting started. Pro Creator offers unlimited AI generations, and Agency plans include additional team collaboration features and multi-account management.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about PostIt
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
