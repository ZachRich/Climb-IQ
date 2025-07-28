const PainSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Does This Sound <span className="gradient-text">Familiar?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pain Point 1 */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">😰</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">The Regression Trap</h3>
            <p className="text-muted-foreground leading-relaxed">
              You're three weeks into a new training program and instead of getting stronger, you <em>"feel weaker and get fatigued fast."</em> Every session feels harder than the last, and you're starting to wonder if something's wrong with you.
            </p>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">The Overtraining Spiral</h3>
            <p className="text-muted-foreground leading-relaxed">
              You're <em>"absolutely overworking your body"</em> but don't know how to fix it. You climb 3+ hours, 3 days a week, following programs designed by pros, yet you <em>"don't feel any progress, only regression."</em>
            </p>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">😞</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-destructive">The Motivation Killer</h3>
            <p className="text-muted-foreground leading-relaxed">
              You're <em>"starting to feel more and more demotivated"</em> because your climbing seems to be getting worse despite your dedication. You question whether you should push through or quit entirely.
            </p>
          </div>
        </div>

        {/* Belief Deconstruction */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-card via-muted to-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6">Here's the truth:</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You're not weak, lazy, or lacking talent. Generic training programs can't account for your unique recovery patterns, life stress, sleep quality, or daily readiness. What works for someone else might be <strong className="text-foreground">completely wrong for your body today.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;