const OutcomeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Imagine Training That Actually{" "}
            <span className="gradient-text">Works With Your Body</span>
          </h2>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Outcome 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌅</span>
                </div>
                <h3 className="text-2xl font-bold">Perfect Daily Calibration</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wake up excited for training because you know today's session is perfectly calibrated to your body's readiness - challenging enough to drive progress, but never so intense that you'll need days to recover.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Optimal Training Days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold">Steady Grade Progression</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Watch your strength and technique steadily improve month after month, because your training adapts in real-time to keep you in the optimal zone for adaptation without burnout.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2+ Grades</div>
                  <div className="text-sm text-muted-foreground">Average Improvement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-2xl font-bold">Confidence & Energy</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Feel confident and energized after every session, knowing you're building strength systematically while staying completely injury-free.
              </p>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Reduce</div>
                  <div className="text-sm text-muted-foreground">Training Injuries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Paradigm */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 gradient-text">The New Paradigm</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The problem isn't your effort or genetics - it's that one-size-fits-all programs can't adapt to your individual recovery patterns. What you need is <strong className="text-foreground">intelligent training that learns from your body's responses and adjusts automatically.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;