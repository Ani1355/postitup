import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { value: "135K+", label: "CREATORS" },
  { value: "50+", label: "COUNTRIES" },
  { value: "73%", label: "REPORT GROWTH" },
];

const testimonials = [
  {
    name: "Sara Chen",
    handle: "@saradigital",
    text: "PostIt has completely transformed how I approach Twitter. The AI suggestions are incredibly on-point, and I've grown my following by 300% in just 3 months!",
    initials: "SC",
  },
  {
    name: "Marcus Ortega",
    handle: "@marcustech",
    text: "The scheduling feature is a game changer. I can plan my entire week in one sitting. My engagement has never been higher. 10/10 would recommend!",
    initials: "MO",
  },
  {
    name: "Laura Martinez",
    handle: "@lauraventures",
    text: "As a content creator working with brands, PostIt has been essential. The analytics help me prove ROI to clients. Worth every penny!",
    initials: "LM",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Loved by creators worldwide
          </h2>
          
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.text}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
