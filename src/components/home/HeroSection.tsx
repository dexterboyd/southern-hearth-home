import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-southern-feast.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Southern feast with smoked brisket, collard greens, and cornbread on a rustic table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-blog px-4 py-20">
        <div className="max-w-2xl">
          <p className="font-body text-primary uppercase tracking-widest text-sm mb-4 animate-fade-up opacity-0 stagger-1">
            Welcome to the Kitchen
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
            Luxury Southern Cooking with a{' '}
            <span className="text-primary italic">Homestyle Heart</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/80 mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
            Discover cookbook-quality recipes rooted in Southern tradition, from slow-smoked BBQ 
            to soulful Sunday suppers. Every dish made from scratch with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" size="xl">
              Explore Recipes
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Get Free Cookbook Sample
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
