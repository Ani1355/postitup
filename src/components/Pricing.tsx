import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Creator",
    price: "$0",
    period: "Free",
    description: "For individuals just getting started with Twitter growth",
    features: [
      "Up to 30 AI-generated posts",
      "Basic analytics",
      "Weekly scheduling",
      "Content library",
    ],
    cta: "Start Free",
    variant: "outline" as const,
  },
  {
    name: "Pro Creator",
    price: "$29",
    period: "per month",
    description: "For serious creators scaling their influence",
    features: [
      "Unlimited AI posts",
      "Advanced analytics",
      "Optimal scheduling",
      "Priority support",
      "Custom training",
      "Thread generator",
    ],
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    period: "per month",
    description: "For agencies managing multiple client accounts",
    features: [
      "Everything in Pro",
      "Up to 10 accounts",
      "Team collaboration",
      "White label reports",
      "API access",
      "Dedicated manager",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Level up your Twitter game. 14-day money-back guarantee.
          </p>
          <Badge variant="secondary" className="text-sm">
            💰 All Plans 30% OFF Until April 30th
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border/50 ${
                plan.popular ? "shadow-2xl scale-105 border-primary" : "shadow-lg"
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground border-0">
                    POPULAR
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.variant} className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
