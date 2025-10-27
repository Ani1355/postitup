import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            AI-Powered Growth Platform
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            AI-Powered{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Twitter Growth
            </span>
            <br />
            for Creators & Agencies
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Realistic, works-on-autopilot Twitter growth powered by an AI trained
            over 100M+ tweets that mimic the world's most influential accounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="gradient" size="lg" className="gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Trusted by 100,000+ creators • Used to craft 2M+ tweets
          </p>
        </div>
        
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap opacity-60">
          <span className="text-sm font-medium">TrendCrunch</span>
          <span className="text-sm font-medium">Forbes</span>
          <span className="text-sm font-medium">Buffer</span>
          <span className="text-sm font-medium">Mashable</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
