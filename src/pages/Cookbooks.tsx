import { useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag, Star, Check, Flame, Clock, ChefHat } from 'lucide-react';
import flavorFirstCover from '@/assets/flavor-first-ebook-cover.jpg';
import bigEasyCover from '@/assets/big-easy-ebook-cover.png';
import comfortFoodCover from '@/assets/southern-comfort-food-cover.png';

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

// Best recipes from the Flavor First cookbook
const flavorFirstRecipes = [
  {
    title: 'Sweet Heat Rib Rub',
    description: 'Brown sugar, cayenne, and cinnamon for perfect ribs or pork shoulder.',
    yield: '1 cup',
    time: '5 min',
  },
  {
    title: 'Kickin\' Cajun Rub',
    description: 'Bold paprika, garlic, and cayenne blend for chicken, shrimp, or fish.',
    yield: '1 cup',
    time: '5 min',
  },
  {
    title: 'Caribbean Jerk Dry Rub',
    description: 'Allspice, cinnamon, and heat for authentic island flavor.',
    yield: '1 cup',
    time: '5 min',
  },
];

const Cookbooks = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Flavor First */}
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

              {/* Book Cover with Recipe Cards */}
              <div className="relative flex flex-col items-center gap-6">
                {/* Ebook Cover */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/30 to-burgundy/30 p-4 rounded-2xl">
                    <img 
                      src={flavorFirstCover} 
                      alt="Flavor First: Homemade Rubs, Marinades & BBQ Sauces Cookbook Cover" 
                      className="rounded-xl shadow-2xl max-w-xs md:max-w-sm"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                </div>

                {/* Scrolling Recipe Cards */}
                <div className="w-full max-w-sm">
                  <p className="font-body text-xs text-cream/60 mb-2 text-center uppercase tracking-wider">
                    Featured Recipes Inside
                  </p>
                  <div 
                    ref={scrollContainerRef}
                    className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {flavorFirstRecipes.map((recipe, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 w-48 bg-charcoal/80 border border-primary/30 rounded-lg p-4 snap-center"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <ChefHat className="w-3 h-3 text-primary" />
                          <span className="font-body text-xs text-primary">{recipe.yield}</span>
                        </div>
                        <h4 className="font-display text-sm font-semibold text-cream mb-1">
                          {recipe.title}
                        </h4>
                        <p className="font-body text-xs text-cream/70 mb-2 line-clamp-2">
                          {recipe.description}
                        </p>
                        <div className="flex items-center gap-1 text-cream/50">
                          <Clock className="w-3 h-3" />
                          <span className="font-body text-xs">{recipe.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

        {/* Second Cookbook - Flavors of the Big Easy */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="relative flex justify-center order-2 lg:order-1">
                <div className="bg-gradient-to-br from-amber-600/30 to-orange-700/30 p-4 rounded-2xl">
                  <img 
                    src={bigEasyCover} 
                    alt="Flavors of the Big Easy Cookbook Cover" 
                    className="rounded-xl shadow-2xl max-w-xs md:max-w-sm"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber-500/20 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-500 mb-6">
                  <BookOpen className="w-4 h-4 fill-current" />
                  <span className="font-body text-sm font-medium">Southern Cookbook</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Flavors of the Big Easy
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  Bring the bold, soulful flavors of Louisiana into your kitchen. From Cajun & Creole classics 
                  to elevated Southern favorites and backyard BBQ, this cookbook is your guide to cooking up 
                  authentic Southern dishes at home.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Cajun & Creole classics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Elevated Southern favorites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Comfort food & family recipes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Backyard BBQ & smokehouse</span>
                  </div>
                </div>

                {/* Pricing */}
                <a 
                  href="https://www.amazon.com/dp/B0G8VZ7CMV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-charcoal font-semibold" size="xl">
                    <BookOpen className="w-5 h-5" />
                    Kindle eBook — $8.99
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Third Cookbook - Southern Comfort Food */}
        <section className="section-padding bg-muted">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-700/20 text-orange-600 mb-6">
                  <BookOpen className="w-4 h-4 fill-current" />
                  <span className="font-body text-sm font-medium">Comfort Food Cookbook</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Flavor First: Southern Comfort Food Recipes
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  Stop chasing shortcuts. Start cooking real Southern comfort food the right way. This heartfelt 
                  collection of classic Southern dishes — the kind passed down through generations, cooked with 
                  patience, and served with love.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">40+ time-tested Southern recipes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Comfort food staples & sides</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Iconic Southern desserts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Home-cook friendly instructions</span>
                  </div>
                </div>

                {/* Pricing */}
                <a 
                  href="https://www.amazon.com/dp/B0GB6RB2B9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold" size="xl">
                    <BookOpen className="w-5 h-5" />
                    Kindle eBook — $3.99
                  </Button>
                </a>
              </div>

              {/* Book Cover */}
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-br from-orange-700/30 to-orange-900/30 p-4 rounded-2xl">
                  <img 
                    src={comfortFoodCover} 
                    alt="Flavor First: Southern Comfort Food Recipes Cookbook Cover" 
                    className="rounded-xl shadow-2xl max-w-xs md:max-w-sm"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-700/20 rounded-2xl -z-10" />
              </div>
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
                Get all three cookbooks today and master bold Southern flavor — from homemade rubs and sauces 
                to authentic Louisiana favorites and soul-warming comfort food.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB/ref=tmm_pap_swatch_0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg">
                    Get Rubs & Sauces
                  </Button>
                </a>
                <a 
                  href="https://www.amazon.com/dp/B0G8VZ7CMV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-charcoal font-semibold" size="lg">
                    Get Big Easy
                  </Button>
                </a>
                <a 
                  href="https://www.amazon.com/dp/B0GB6RB2B9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold" size="lg">
                    Get Comfort Food
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