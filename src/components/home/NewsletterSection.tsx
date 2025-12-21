import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Gift, Mail } from 'lucide-react';
import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      toast.success("Welcome to Flavor First! Check your inbox for your free recipe.");
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-blog">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Gift className="w-8 h-8 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-secondary-foreground mb-4">
            Get a Free Flavor First Recipe
          </h2>
          <p className="font-body text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the Flavor First kitchen and receive a complimentary cookbook-quality recipe plus early access to new releases.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">Cookbook-Quality Recipe</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">Early Access to New Releases</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/70">
              <Gift className="w-5 h-5 text-primary" />
              <span className="font-body text-sm">Exclusive Cooking Tips</span>
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
              {isLoading ? 'Sending...' : 'Send My Free Recipe'}
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
