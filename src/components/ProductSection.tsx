import { Button } from "@/components/ui/button";

const ProductSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Product Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Introducing <span className="gradient-text">ClimbIQ Pro</span>
          </h2>
          <h3 className="text-xl lg:text-2xl text-muted-foreground mb-8">
            AI-Powered Personalized Training Program
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The first climbing training program that uses artificial intelligence to create completely personalized workouts that adapt to your recovery, progress, and individual response patterns - preventing overtraining while maximizing strength gains.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Assess</h3>
            <p className="text-muted-foreground leading-relaxed">
              Answer quick daily questions about sleep, energy, and how previous workouts felt. ClimbIQ analyzes your responses to gauge recovery status.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-secondary-foreground">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Generate</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI creates your personalized workout for today, adjusting intensity, volume, and exercise selection based on your current state and training history.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Train</h3>
            <p className="text-muted-foreground leading-relaxed">
              Complete your optimized workout with guided instructions, rest timers, and progress tracking - knowing it's perfectly calibrated for gains without overtraining.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { icon: "🧠", title: "AI-Powered Adaptation", desc: "Machine learning algorithms personalize every workout" },
            { icon: "📱", title: "Mobile App Training", desc: "Complete guided workouts anywhere with detailed instructions" },
            { icon: "⚡", title: "Daily Readiness Check", desc: "Quick assessment determines your optimal training intensity" },
            { icon: "🎯", title: "Personalized Programs", desc: "Training plans that evolve based on your unique response patterns" },
            { icon: "🚫", title: "Overtraining Prevention", desc: "Intelligent load management prevents burnout and plateaus" },
            { icon: "📈", title: "Progress Analytics", desc: "Detailed insights into your strength development and trends" },
          ].map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Founder Message */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-card via-muted to-card p-8 rounded-2xl border border-border">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold">Message from Founder</h3>
            </div>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed text-center">
              "After 3 years of climbing and watching talented athletes burn out from overtraining, I knew there had to be a better way. ClimbIQ eliminates the guesswork that destroys so many climbers' progress. Your body is unique - your training should be too."
            </blockquote>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">- Zachary Rich, Founder & Lead Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;