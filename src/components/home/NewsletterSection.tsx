import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Gift, Mail, ChefHat } from 'lucide-react';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast.success("Welcome to Flavor First! Check your inbox for your 10 free recipes.");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="section-padding bg-secondary">
      <div className="container-blog">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-secondary-foreground mb-4">
            Get 10 Free Flavor First Recipes
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            Join the Flavor First kitchen and receive 10 complimentary recipes from my <em>Flavors of the Big Easy</em> cookbook — real New Orleans dishes made for home cooks.
          </p>
          <p className="font-body text-sm text-secondary-foreground/60 mb-8 max-w-xl mx-auto">
            Featuring foolproof Creole & Cajun recipes, scratch-made sauces, and step-by-step roux techniques.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">10 Complete Recipes</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <ChefHat className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">Beginner-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">Early Access to New Releases</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background border-border font-body"
            />
            <Button 
              type="submit" 
              variant="hero" 
              size="lg"
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? 'Sending...' : 'Send My Free Recipes'}
            </Button>
          </form>

          <p className="font-body text-xs text-secondary-foreground/50 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
