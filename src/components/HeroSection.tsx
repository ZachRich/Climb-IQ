import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ClimbIQ-app.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Stop Feeling{" "}
              <span className="gradient-text">Weaker</span>{" "}
              Despite Training Harder
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              For serious climbers who are tired of overtraining, plateaus, and wondering if their training program is actually working. ClimbIQ uses AI to create personalized training plans that automatically adjust based on your progress and recovery - so you always train at the perfect intensity.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Never overtrain again - AI analyzes your performance and adjusts automatically</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground">End the guesswork - Get science-backed training recommendations daily</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground">See consistent progress - Intelligent periodization prevents plateaus</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Prevent injuries - Early warning system spots overreaching patterns</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                <p className="text-lg text-foreground">Train smarter, not harder - Personalized programs that adapt in real-time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
                Start Your AI Training
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl transform rotate-3"></div>
              <img 
                src={heroImage} 
                alt="ClimbIQ AI Training App Interface" 
                className="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;