import { Button } from '@/components/ui/button';
import { ShoppingBag, BookOpen, Star, Check } from 'lucide-react';

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
            <span className="font-body text-sm font-medium">5.0 Rating on Amazon</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Flavor First: Homemade Rubs, Marinades & BBQ Sauces
          </h2>
          <p className="font-body text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your complete guide to flavor-forward backyard cooking. 41+ battle-tested recipes including signature dry rubs, marinades, regional BBQ sauces, and full meat recipes.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">41+</div>
              <div className="font-body text-sm text-cream/70">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">12+</div>
              <div className="font-body text-sm text-cream/70">Dry Rubs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">14</div>
              <div className="font-body text-sm text-cream/70">BBQ Sauces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-primary mb-1">96</div>
              <div className="font-body text-sm text-cream/70">Pages</div>
            </div>
          </div>

          {/* What's Inside */}
          <div className="grid md:grid-cols-2 gap-3 mb-10 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-2 text-cream/80">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm">The Flavor Trinity framework</span>
            </div>
            <div className="flex items-start gap-2 text-cream/80">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm">Regional sauces: Kansas City, Carolina Gold, Alabama White</span>
            </div>
            <div className="flex items-start gap-2 text-cream/80">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm">Smoking techniques & timing charts</span>
            </div>
            <div className="flex items-start gap-2 text-cream/80">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm">BONUS: Sides, slaws & staples</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES-ebook/dp/B0FYNB6Z3D" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5" />
                Get the Kindle — $6.99
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-5 h-5" />
                Order Paperback — $12.99
              </a>
            </Button>
          </div>

          <p className="font-body text-sm text-cream/50 mt-6">
            Available on Amazon • Fast, free shipping with Prime
          </p>
        </div>
      </div>
    </section>
  );
}
