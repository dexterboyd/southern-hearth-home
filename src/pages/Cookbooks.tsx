import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag, Star, Check, Gift } from 'lucide-react';
import pecanPie from '@/assets/recipe-pecan-pie.jpg';

const cookbookFeatures = [
  '100+ tested recipes with step-by-step instructions',
  'Pro tips and techniques from a Southern kitchen',
  'Beautiful food photography for every recipe',
  'Seasonal meal planning guides',
  'Equipment recommendations and substitutions',
  'Stories and traditions behind each dish',
];

const testimonials = [
  {
    quote: "This cookbook has become my go-to for every Sunday dinner. The recipes are foolproof and absolutely delicious.",
    author: "Martha L.",
    location: "Atlanta, GA",
  },
  {
    quote: "Finally, a cookbook that gets Southern cooking right. Every recipe tastes like it came from my grandmother's kitchen.",
    author: "James T.",
    location: "Nashville, TN",
  },
  {
    quote: "The BBQ section alone is worth the price. My brisket has never been better!",
    author: "David R.",
    location: "Austin, TX",
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
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-body text-sm font-medium">Bestselling Cookbook</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                  The Smoke & Honey Cookbook
                </h1>
                <p className="font-body text-xl text-cream/80 mb-8 leading-relaxed">
                  100+ recipes celebrating the art of Southern cooking. From slow-smoked BBQ to soulful 
                  Sunday suppers, bring the taste of the South into your home.
                </p>

                {/* Pricing */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button variant="hero" size="xl">
                    <BookOpen className="w-5 h-5" />
                    eBook — $14.99
                  </Button>
                  <Button variant="hero-outline" size="xl">
                    <ShoppingBag className="w-5 h-5" />
                    Hardcover — $34.99
                  </Button>
                </div>

                <p className="font-body text-sm text-cream/60">
                  Free shipping on hardcover orders over $50 • Instant download for eBook
                </p>
              </div>

              {/* Book Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated bg-card">
                  <img
                    src={pecanPie}
                    alt="The Smoke & Honey Cookbook cover"
                    className="w-full h-full object-cover"
                  />
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
                More than just recipes—a complete guide to mastering Southern cooking.
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

        {/* Free Sample CTA */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="max-w-2xl mx-auto text-center bg-muted p-8 md:p-12 rounded-2xl">
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Try Before You Buy
              </h2>
              <p className="font-body text-muted-foreground mb-6">
                Download a free sample chapter with 5 signature recipes. No credit card required.
              </p>
              <Button variant="hero" size="lg">
                Download Free Sample
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookbooks;
