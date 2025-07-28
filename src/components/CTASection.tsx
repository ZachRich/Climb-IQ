import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof */}
          <div className="mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl text-secondary">⭐</span>
              ))}
              <span className="text-lg text-muted-foreground ml-2">4.9/5 from 500+ climbers</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join <span className="gradient-text">500+ Climbers</span> Who Never Overtrain Again
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Limited early access - only 100 units available this quarter
          </p>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground mb-4 italic">
                "I've gained 2 full grades in 3 months without a single injury. ClimbIQ knew when to push me and when to back off."
              </p>
              <div className="text-sm font-semibold">Sarah M. - V8 Climber</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground mb-4 italic">
                "Finally, training that works WITH my body instead of against it. No more mysterious plateaus or burnout phases."
              </p>
              <div className="text-sm font-semibold">Mike R. - Professional Coach</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground mb-4 italic">
                "The AI caught early signs of overreaching that I completely missed. Probably saved me months of recovery."
              </p>
              <div className="text-sm font-semibold">Tom K. - Competition Climber</div>
            </div>
          </div>

          {/* Pricing and CTA */}
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-8 rounded-2xl border border-border mb-8">
            <div className="mb-6">
              <div className="text-lg text-muted-foreground mb-2">ClimbIQ Pro Training Program</div>
              <div className="text-5xl font-bold mb-2">
                <span className="text-muted-foreground line-through text-3xl mr-4">$197</span>
                <span className="gradient-text">$97</span>
              </div>
              <div className="text-sm text-muted-foreground">Launch Price - Save $100</div>
            </div>
            
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-sm">AI-powered personalized training program</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-sm">Mobile app with guided workouts</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-sm">Daily readiness assessments</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-sm">Progress analytics and insights</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-sm">30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-xl px-12 py-6 h-auto">
              Start Training Now
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-6 h-auto">
              See How It Works
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>🔒 Secure checkout • 💳 30-day money back • 📱 Instant access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;