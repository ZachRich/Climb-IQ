import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the email submission here
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Get Early Access Updates
          </h3>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new features, training insights, and exclusive early access opportunities.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background border-border"
              />
              <Button type="submit" variant="cta" className="whitespace-nowrap">
                Get Updates
              </Button>
            </form>
          ) : (
            <div className="bg-card p-6 rounded-xl border border-border max-w-md mx-auto">
              <div className="text-2xl mb-2">✅</div>
              <p className="font-semibold mb-2">Thanks for subscribing!</p>
              <p className="text-sm text-muted-foreground">
                You'll be the first to know about ClimbIQ updates and early access opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;