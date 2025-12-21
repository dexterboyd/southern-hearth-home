import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag, Star, Check, Flame } from 'lucide-react';

const cookbookFeatures = [
  'Over 50 homemade rubs, marinades & BBQ sauces',
  'Step-by-step instructions for every recipe',
  'Pro tips for building bold, layered flavor',
  'Perfect for grilling, smoking, and everyday cooking',
  'Designed for home cooks and pitmasters alike',
  'Recipes that elevate any cut of meat',
];

const testimonials = [
  {
    quote: "One of the best cooking guides I've bought in a long time. The recipes are straightforward, the flavors are big. 100% worth it.",
    author: "Dave",
    location: "Verified Purchase",
  },
  {
    quote: "Hands down one of the best BBQ guides I've ever picked up. The recipes, rubs, and sauces are bursting with bold flavor and easy enough for anyone to master.",
    author: "LStalli1",
    location: "Verified Purchase",
  },
  {
    quote: "Boyd does a great job breaking it down into simple steps and fun. I'm inspired.",
    author: "Tee",
    location: "Verified Purchase",
  },
];

const Cookbooks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-charcoal via-secondary to-charcoal text-cream">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                  <Flame className="w-4 h-4 fill-current" />
                  <span className="font-body text-sm font-medium">Flavor First Cookbook</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                  Flavor First: Homemade Rubs, Marinades & BBQ Sauces
                </h1>
                <p className="font-body text-xl text-cream/80 mb-8 leading-relaxed">
                  Master the art of bold, Southern-inspired flavor with over 50 recipes for homemade rubs, 
                  marinades, and BBQ sauces. From smoky dry rubs to tangy glazes, this cookbook gives you 
                  everything you need to elevate your grilling and cooking.
                </p>

                {/* Pricing */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES-ebook/dp/B0FYNB6Z3D/ref=tmm_kin_swatch_0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="xl">
                      <BookOpen className="w-5 h-5" />
                      Kindle eBook — $6.99
                    </Button>
                  </a>
                  <a 
                    href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB/ref=tmm_pap_swatch_0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero-outline" size="xl">
                      <ShoppingBag className="w-5 h-5" />
                      Paperback — $12.99
                    </Button>
                  </a>
                </div>

                <p className="font-body text-sm text-cream/60">
                  Available on Amazon • Instant Kindle download • Paperback ships worldwide
                </p>
              </div>

              {/* Book Cover Placeholder */}
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-br from-primary/30 to-burgundy/30 p-8 rounded-2xl">
                  <div className="bg-charcoal border-4 border-primary/40 rounded-xl p-8 text-center max-w-sm">
                    <Flame className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2">
                      FLAVOR FIRST
                    </h3>
                    <p className="font-body text-cream/80 text-sm uppercase tracking-wider mb-4">
                      Homemade Rubs, Marinades & BBQ Sauces
                    </p>
                    <div className="w-16 h-1 bg-primary mx-auto" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                What's Inside
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                More than just recipes — a complete guide to mastering bold, homemade flavor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {cookbookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                What Readers Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl card-elevated">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="font-body text-foreground/80 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-body text-sm">
                    <span className="text-foreground font-medium">{testimonial.author}</span>
                    <span className="text-muted-foreground"> • {testimonial.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-charcoal to-secondary p-8 md:p-12 rounded-2xl">
              <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-4">
                Ready to Elevate Your Flavor?
              </h2>
              <p className="font-body text-cream/80 mb-6">
                Get Flavor First today and start creating bold, homemade rubs, marinades, and BBQ sauces 
                that will transform your cooking.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB/ref=tmm_pap_swatch_0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg">
                    Get the Cookbook on Amazon
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookbooks;
