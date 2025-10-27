import { Sparkles, BarChart3, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Post Ideation",
    description: "Generate viral content ideas using AI trained on 100M+ successful tweets",
  },
  {
    icon: BarChart3,
    title: "Viral Post Analytics",
    description: "Get deep insights on what posts perform best and why they go viral",
  },
  {
    icon: Clock,
    title: "One-Click Scheduling",
    description: "Schedule content at perfect times when your audience is most engaged",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to dominate Twitter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Packed with every imaginable feature to help you manage and
            accelerate your Twitter growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
