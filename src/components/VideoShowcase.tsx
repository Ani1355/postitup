import { Play } from "lucide-react";

const VideoShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See PostIt in Action</h2>
          <p className="text-muted-foreground text-lg">
            Watch this video to see how easy it is to create a viral post.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-primary aspect-video flex items-center justify-center group cursor-pointer hover:shadow-3xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80"></div>
            <button className="relative z-10 h-20 w-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="h-8 w-8 text-primary ml-1" />
            </button>
            <div className="absolute bottom-6 left-6 text-white z-10">
              <p className="font-semibold text-lg">2-Minute Product Walkthrough</p>
              <p className="text-white/90 text-sm">Learn how easy it is to grow on Twitter with PostIt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
