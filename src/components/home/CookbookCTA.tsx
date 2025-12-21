import { Button } from '@/components/ui/button';
import { ShoppingBag, BookOpen, Star } from 'lucide-react';

export function CookbookCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-charcoal via-secondary to-charcoal text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-blog relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-body text-sm font-medium">New Cookbook Available</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            The Smoke & Honey Cookbook
          </h2>
          <p className="font-body text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            100+ recipes celebrating the art of Southern cooking. From my kitchen to yours, 
            now available in ebook and beautiful hardcover editions.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">100+</div>
              <div className="font-body text-sm text-cream/70">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">7</div>
              <div className="font-body text-sm text-cream/70">Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-1">50+</div>
              <div className="font-body text-sm text-cream/70">Pro Tips</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <BookOpen className="w-5 h-5" />
              Get the eBook — $14.99
            </Button>
            <Button variant="hero-outline" size="xl">
              <ShoppingBag className="w-5 h-5" />
              Order Hardcover — $34.99
            </Button>
          </div>

          <p className="font-body text-sm text-cream/50 mt-6">
            Free shipping on hardcover orders over $50
          </p>
        </div>
      </div>
    </section>
  );
}
