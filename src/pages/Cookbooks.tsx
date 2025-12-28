import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag, Star, Check, Flame } from 'lucide-react';
import flavorFirstCover from '@/assets/flavor-first-ebook-cover.jpg';
import bigEasyCover from '@/assets/big-easy-ebook-cover.png';
import comfortFoodCover from '@/assets/southern-comfort-food-cover.png';
import culinaryChroniclesCover from '@/assets/culinary-chronicles-cover.png';

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

                {/* Featured Recipes Description */}
                <div className="w-full max-w-md mt-4">
                  <p className="font-display text-base text-cream/80 mb-3 text-center uppercase tracking-wider">
                    Featured Recipes Inside:
                  </p>
                  <div className="bg-charcoal/60 border border-primary/20 rounded-xl p-5 text-left">
                    <p className="font-body text-sm text-cream/90 leading-relaxed mb-4">
                      <strong className="text-primary">Stop guessing. Start grilling with confidence.</strong>
                    </p>
                    <p className="font-body text-sm text-cream/80 leading-relaxed mb-4">
                      Inside this complete BBQ guide, you'll discover:
                    </p>
                    <ul className="font-body text-sm text-cream/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>41 battle-tested recipes</strong> including signature dry rubs, marinades, regional BBQ sauces, and full meat recipes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>The Flavor Trinity</strong> — the 3-part framework behind every great BBQ dish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>12 signature dry rubs</strong> — Sweet Heat Rib Rub, Coffee & Brown Sugar Brisket, Caribbean Jerk, Memphis Dry Rub & more</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>9 bold marinades</strong> — Garlic Mojo Citrus, Spicy Jerk, Soy-Ginger Teriyaki</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>14 regional BBQ sauces</strong> — Mississippi Delta, Carolina Gold, Alabama White, Tennessee Whiskey, Texas Bold</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span><strong>Smoking techniques & timing charts</strong> — wood selection, temperature guides, and pro tips</span>
                      </li>
                    </ul>
                    <p className="font-body text-xs text-cream/60 mt-4 italic">
                      Perfect for backyard grillers, smoker enthusiasts, and anyone ready to take their BBQ from good to unforgettable.
                    </p>
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
        {/* eBook Bundle Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-amber-500/10 border-y border-primary/20">
          <div className="container-blog">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="font-body text-sm font-medium uppercase tracking-wider">Complete Collection</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Get All 4 eBooks
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Build your complete Southern cooking library. Each eBook delivers bold, authentic flavor — 
                from BBQ rubs and sauces to Cajun classics and comfort food favorites.
              </p>
            </div>

            {/* eBook Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {/* Flavor First - Rubs */}
              <div className="group">
                <div className="bg-card rounded-xl p-3 card-elevated transition-transform hover:scale-105 h-full flex flex-col">
                  <img 
                    src={flavorFirstCover} 
                    alt="Flavor First: Homemade Rubs, Marinades & BBQ Sauces" 
                    className="rounded-lg w-full mb-3"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="font-body text-xs md:text-sm font-medium text-foreground text-center line-clamp-2">
                      Rubs, Marinades & Sauces
                    </p>
                    <p className="font-body text-xs text-primary text-center font-semibold mb-2">$6.99</p>
                  </div>
                  <a 
                    href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES-ebook/dp/B0FYNB6Z3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="ghost" size="sm" className="w-full text-xs bg-primary/10 hover:bg-primary/20 text-primary border-0">
                      Purchase Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Big Easy */}
              <div className="group">
                <div className="bg-card rounded-xl p-3 card-elevated transition-transform hover:scale-105 h-full flex flex-col">
                  <img 
                    src={bigEasyCover} 
                    alt="Flavors of the Big Easy" 
                    className="rounded-lg w-full mb-3"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="font-body text-xs md:text-sm font-medium text-foreground text-center line-clamp-2">
                      Flavors of the Big Easy
                    </p>
                    <p className="font-body text-xs text-amber-500 text-center font-semibold mb-2">$8.99</p>
                  </div>
                  <a 
                    href="https://www.amazon.com/dp/B0G8VZ7CMV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="ghost" size="sm" className="w-full text-xs bg-primary/10 hover:bg-primary/20 text-primary border-0">
                      Purchase Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Southern Comfort Food */}
              <div className="group">
                <div className="bg-card rounded-xl p-3 card-elevated transition-transform hover:scale-105 h-full flex flex-col">
                  <img 
                    src={comfortFoodCover} 
                    alt="Flavor First: Southern Comfort Food Recipes" 
                    className="rounded-lg w-full mb-3"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="font-body text-xs md:text-sm font-medium text-foreground text-center line-clamp-2">
                      Southern Comfort Food
                    </p>
                    <p className="font-body text-xs text-orange-600 text-center font-semibold mb-2">$3.99</p>
                  </div>
                  <a 
                    href="https://www.amazon.com/dp/B0GB6RB2B9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="ghost" size="sm" className="w-full text-xs bg-primary/10 hover:bg-primary/20 text-primary border-0">
                      Purchase Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Culinary Chronicles */}
              <div className="group">
                <div className="bg-card rounded-xl p-3 card-elevated transition-transform hover:scale-105 h-full flex flex-col">
                  <img 
                    src={culinaryChroniclesCover} 
                    alt="Culinary Chronicles: Easy Southern American Comfort Food" 
                    className="rounded-lg w-full mb-3"
                  />
                  <div className="flex-1 flex flex-col">
                    <p className="font-body text-xs md:text-sm font-medium text-foreground text-center line-clamp-2">
                      Culinary Chronicles
                    </p>
                    <p className="font-body text-xs text-slate-500 text-center font-semibold mb-2">$6.99</p>
                  </div>
                  <a 
                    href="https://www.amazon.com/dp/B0GB81RS76" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="ghost" size="sm" className="w-full text-xs bg-primary/10 hover:bg-primary/20 text-primary border-0">
                      Purchase Now
                    </Button>
                  </a>
                </div>
              </div>
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

        {/* Fourth Cookbook - Culinary Chronicles */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Book Cover */}
              <div className="relative flex justify-center order-2 lg:order-1">
                <div className="bg-gradient-to-br from-slate-600/30 to-stone-700/30 p-4 rounded-2xl">
                  <img 
                    src={culinaryChroniclesCover} 
                    alt="Culinary Chronicles: Easy Southern American Comfort Food Cookbook Cover" 
                    className="rounded-xl shadow-2xl max-w-xs md:max-w-sm"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-stone-500/20 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-500/20 text-stone-500 mb-6">
                  <BookOpen className="w-4 h-4 fill-current" />
                  <span className="font-body text-sm font-medium">Story-Rich Cookbook</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Culinary Chronicles: Easy Southern American Comfort Food
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  A story-rich collection of easy Southern American comfort food recipes — passed-down favorites, 
                  church-supper classics, and crave-worthy dishes made simple for everyday cooks.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Homestyle Southern classics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Soulful sides & crowd favorites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Appetizers & small bites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">Beginner-friendly instructions</span>
                  </div>
                </div>

                {/* Pricing */}
                <a 
                  href="https://www.amazon.com/dp/B0GB81RS76" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-stone-600 hover:bg-stone-700 text-white font-semibold" size="xl">
                    <BookOpen className="w-5 h-5" />
                    Kindle eBook — $3.99
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-blog">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-charcoal to-secondary p-8 md:p-12 rounded-2xl">
              <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-4">
                Ready to Elevate Your Flavor?
              </h2>
              <p className="font-body text-cream/80 mb-6">
                Get all four cookbooks today and master bold Southern flavor — from homemade rubs and sauces 
                to authentic Louisiana favorites and soul-warming comfort food.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href="https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg">
                    Rubs & Sauces
                  </Button>
                </a>
                <a 
                  href="https://www.amazon.com/dp/B0G8VZ7CMV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-charcoal font-semibold" size="lg">
                    Big Easy
                  </Button>
                </a>
                <a 
                  href="https://www.amazon.com/dp/B0GB6RB2B9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold" size="lg">
                    Comfort Food
                  </Button>
                </a>
                <a 
                  href="https://www.amazon.com/dp/B0GB81RS76" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold" size="lg">
                    Culinary Chronicles
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Flavor First CTA Section */}
        <section className="section-padding bg-gradient-to-br from-charcoal via-secondary to-charcoal text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container-blog relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-body text-sm font-medium">5.0 Rating on Amazon</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                Flavor First: Homemade Rubs, Marinades & BBQ Sauces
              </h2>
              <p className="font-body text-xl text-cream/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Your complete guide to flavor-forward backyard cooking. 41+ battle-tested recipes including signature dry rubs, marinades, regional BBQ sauces, and full meat recipes.
              </p>

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

      </main>
      <Footer />
    </div>
  );
};

export default Cookbooks;