import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-blog">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="text-center">
            <p className="font-body text-primary uppercase tracking-widest text-sm mb-4">
              About Flavor First
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Good Food Doesn't Rush
            </h2>

            {/* Quote */}
            <div className="relative mb-8 py-6 px-8 bg-muted rounded-xl">
              <Quote className="w-8 h-8 text-primary opacity-30 mx-auto mb-4" />
              <p className="font-display text-xl md:text-2xl italic text-foreground/90">
                "Southern food deserves respect — not shortcuts — and the best meals come from understanding why they work."
              </p>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed mb-8 text-lg">
              <p>
                I grew up knowing that good food doesn't rush and flavor isn't optional. In Southern 
                kitchens, meals were built with patience — simmered, smoked, seasoned, and shared.
              </p>
              <p>
                Flavor First is where I document the recipes that matter. The ones rooted in tradition, 
                refined through experience, and written with care. I believe Southern food deserves 
                respect — not shortcuts.
              </p>
            </div>

            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Read My Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
