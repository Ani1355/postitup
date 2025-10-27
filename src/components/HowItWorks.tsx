import { Link2, Wand2, Shield, TrendingUp, LineChart } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect Account",
    description: "Link your Twitter account securely in seconds",
  },
  {
    icon: Wand2,
    title: "Build Your Library",
    description: "Our AI learns your style and creates content ideas",
  },
  {
    icon: Shield,
    title: "Generate Posts",
    description: "Get AI-written tweets that sound exactly like you",
  },
  {
    icon: TrendingUp,
    title: "Schedule & Publish",
    description: "Auto-schedule at optimal times for max engagement",
  },
  {
    icon: LineChart,
    title: "Analyze Performance",
    description: "Track growth and optimize your content strategy",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Get started in 5 easy steps and see results in days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
