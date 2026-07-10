import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, ShoppingBag, Check, Flame } from 'lucide-react';
import flavorFirstCover from '@/assets/flavor-first-ebook-cover.jpg';
import bigEasyCover from '@/assets/big-easy-ebook-cover.png';
import comfortFoodCover from '@/assets/southern-comfort-food-cover.png';
import culinaryChroniclesCover from '@/assets/culinary-chronicles-cover.png';
import { Seo } from '@/components/Seo';



type Cta = { label: string; href: string; variant?: 'hero' | 'hero-outline' };
type Book = {
  id: string;
  badge: string;
  title: string;
  description: string;
  cover: string;
  coverAlt: string;
  coverGradient: string;
  glowColor: string;
  featuredHeadline: string;
  featuredIntro: string;
  features: { bold: string; rest: string }[];
  footerNote: string;
  ctas: Cta[];
  ctaSubtext: string;
};

const books: Book[] = [
  {
    id: 'flavor-first',
    badge: 'Flavor First Cookbook',
    title: 'Flavor First: Homemade Rubs, Marinades & BBQ Sauces',
    description:
      "Master the art of bold, Southern-inspired flavor with over 50 recipes for homemade rubs, marinades, and BBQ sauces. From smoky dry rubs to tangy glazes, this cookbook gives you everything you need to elevate your grilling and cooking.",
    cover: flavorFirstCover,
    coverAlt: 'Flavor First: Homemade Rubs, Marinades & BBQ Sauces Cookbook Cover',
    coverGradient: 'from-primary/30 to-burgundy/30',
    glowColor: 'bg-primary/20',
    featuredHeadline: 'Stop guessing. Start grilling with confidence.',
    featuredIntro: "Inside this complete BBQ guide, you'll discover:",
    features: [
      { bold: '41 battle-tested recipes', rest: ' including signature dry rubs, marinades, regional BBQ sauces, and full meat recipes' },
      { bold: 'The Flavor Trinity', rest: ' — the 3-part framework behind every great BBQ dish' },
      { bold: '12 signature dry rubs', rest: ' — Sweet Heat Rib Rub, Coffee & Brown Sugar Brisket, Caribbean Jerk, Memphis Dry Rub & more' },
      { bold: '9 bold marinades', rest: ' — Garlic Mojo Citrus, Spicy Jerk, Soy-Ginger Teriyaki' },
      { bold: '14 regional BBQ sauces', rest: ' — Mississippi Delta, Carolina Gold, Alabama White, Tennessee Whiskey, Texas Bold' },
      { bold: 'Smoking techniques & timing charts', rest: ' — wood selection, temperature guides, and pro tips' },
    ],
    footerNote: 'Perfect for backyard grillers, smoker enthusiasts, and anyone ready to take their BBQ from good to unforgettable.',
    ctas: [
      { label: 'Kindle eBook — $6.99', href: 'https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES-ebook/dp/B0FYNB6Z3D', variant: 'hero' },
      { label: 'Paperback — $12.99', href: 'https://www.amazon.com/FLAVOR-FIRST-HOMEMADE-MARINADES-SAUCES/dp/B0G4DJC4MB', variant: 'hero-outline' },
    ],
    ctaSubtext: 'Available on Amazon • Instant Kindle download • Paperback ships worldwide',
  },
  {
    id: 'big-easy',
    badge: 'Louisiana Cookbook',
    title: 'Flavors of the Big Easy',
    description:
      'Bring the bold, soulful flavors of Louisiana into your kitchen. From Cajun & Creole classics to elevated Southern favorites and backyard BBQ, this cookbook is your guide to cooking authentic New Orleans dishes at home.',
    cover: bigEasyCover,
    coverAlt: 'Flavors of the Big Easy Cookbook Cover',
    coverGradient: 'from-amber-600/30 to-orange-700/30',
    glowColor: 'bg-amber-500/20',
    featuredHeadline: 'Cook New Orleans at home — like you were raised there.',
    featuredIntro: 'Inside this Louisiana kitchen companion, you\'ll find:',
    features: [
      { bold: 'Cajun & Creole classics', rest: ' — Gumbo, Jambalaya, Étouffée, Red Beans & Rice done the right way' },
      { bold: 'Elevated Southern favorites', rest: ' — blackened fish, shrimp Creole, and slow-simmered stews' },
      { bold: 'Backyard BBQ with Louisiana soul', rest: ' — smoky, spicy, and packed with flavor' },
      { bold: 'The holy trinity technique', rest: ' — onion, celery & bell pepper as your flavor foundation' },
      { bold: 'Roux mastery', rest: ' — light, medium, and dark, with step-by-step guidance' },
      { bold: 'Pantry & spice guide', rest: ' — build a true Louisiana kitchen from scratch' },
    ],
    footerNote: 'Made for home cooks who want the real taste of the Big Easy without the guesswork.',
    ctas: [
      { label: 'Kindle eBook — $8.99', href: 'https://www.amazon.com/dp/B0G8VZ7CMV', variant: 'hero' },
    ],
    ctaSubtext: 'Available on Amazon • Instant Kindle download',
  },
  {
    id: 'comfort-food',
    badge: 'Comfort Food Cookbook',
    title: 'Flavor First: Southern Comfort Food Recipes',
    description:
      'Stop chasing shortcuts. Start cooking real Southern comfort food the right way. A heartfelt collection of classic Southern dishes — the kind passed down through generations, cooked with patience, and served with love.',
    cover: comfortFoodCover,
    coverAlt: 'Flavor First: Southern Comfort Food Recipes Cookbook Cover',
    coverGradient: 'from-orange-700/30 to-orange-900/30',
    glowColor: 'bg-orange-700/20',
    featuredHeadline: 'Real Southern comfort food — made with love, not shortcuts.',
    featuredIntro: "Inside this heartfelt Southern collection, you'll cook:",
    features: [
      { bold: 'Crispy Southern fried chicken', rest: ' — buttermilk-brined and cast-iron perfect' },
      { bold: 'Creamy baked mac & cheese', rest: ' — three cheeses, golden crust, no shortcuts' },
      { bold: 'Slow-simmered collard greens', rest: ' — smoky, tender, and deeply seasoned' },
      { bold: 'Sweet buttermilk cornbread', rest: ' — skillet-baked with a golden, buttery crust' },
      { bold: 'Peach cobbler & banana pudding', rest: ' — the desserts that end every Southern supper right' },
      { bold: 'Sunday supper staples', rest: ' — meatloaf, chicken & dumplings, smothered pork chops, and more' },
    ],
    footerNote: 'For anyone who grew up around a Southern table — or wishes they had.',
    ctas: [
      { label: 'Kindle eBook — $3.99', href: 'https://www.amazon.com/dp/B0GB6RB2B9', variant: 'hero' },
    ],
    ctaSubtext: 'Available on Amazon • Instant Kindle download',
  },
  {
    id: 'culinary-chronicles',
    badge: 'Story-Rich Cookbook',
    title: 'Culinary Chronicles: Easy Southern American Comfort Food',
    description:
      'A story-rich collection of easy Southern American comfort food recipes — passed-down favorites, church-supper classics, and crave-worthy dishes made simple for everyday cooks.',
    cover: culinaryChroniclesCover,
    coverAlt: 'Culinary Chronicles: Easy Southern American Comfort Food Cookbook Cover',
    coverGradient: 'from-slate-600/30 to-stone-700/30',
    glowColor: 'bg-stone-500/20',
    featuredHeadline: 'The stories behind the recipes — and the recipes worth telling.',
    featuredIntro: 'Inside this story-rich Southern cookbook, you\'ll discover:',
    features: [
      { bold: 'Passed-down family favorites', rest: ' — the dishes that shaped generations of Southern cooks' },
      { bold: 'Church-supper classics', rest: ' — casseroles, potluck sides, and crowd-pleasing mains' },
      { bold: 'Weeknight-easy comfort meals', rest: ' — simple techniques, everyday ingredients' },
      { bold: 'Personal kitchen stories', rest: ' — the memories behind every recipe' },
      { bold: 'Sunday-supper mains', rest: ' — hearty, soul-warming plates the whole family will love' },
      { bold: 'Old-fashioned Southern desserts', rest: ' — pies, cobblers, and puddings from another era' },
    ],
    footerNote: 'For home cooks who love a good story almost as much as a good meal.',
    ctas: [
      { label: 'Kindle eBook — $3.99', href: 'https://www.amazon.com/dp/B0GB81RS76', variant: 'hero' },
    ],
    ctaSubtext: 'Available on Amazon • Instant Kindle download',
  },
];

function BookSection({ book, eager }: { book: Book; eager?: boolean }) {
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-charcoal via-secondary to-charcoal text-cream border-b border-cream/5">
      <div className="container-blog">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Flame className="w-4 h-4 fill-current" />
              <span className="font-body text-sm font-medium">{book.badge}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              {book.title}
            </h2>
            <p className="font-body text-lg text-cream/80 mb-8 leading-relaxed">
              {book.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {book.ctas.map((cta) => (
                <a key={cta.href} href={cta.href} target="_blank" rel="noopener noreferrer">
                  <Button variant={cta.variant ?? 'hero'} size="xl">
                    {cta.variant === 'hero-outline' ? <ShoppingBag className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                    {cta.label}
                  </Button>
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-cream/60">{book.ctaSubtext}</p>
          </div>

          {/* Right: Cover + Featured card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="relative flex justify-center">
              <div className={`bg-gradient-to-br ${book.coverGradient} p-4 rounded-2xl`}>
                <img
                  src={book.cover}
                  alt={book.coverAlt}
                  className="rounded-xl shadow-2xl max-w-xs md:max-w-full"
                  loading={eager ? 'eager' : 'lazy'}
                  fetchPriority={eager ? 'high' : 'auto'}
                  decoding="async"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 ${book.glowColor} rounded-2xl -z-10`} />
            </div>

            <div>
              <p className="font-display text-base text-cream/80 mb-3 uppercase tracking-wider">
                Featured Recipes Inside:
              </p>
              <div className="bg-charcoal/60 border border-primary/20 rounded-xl p-5 text-left">
                <p className="font-body text-sm text-cream/90 leading-relaxed mb-4">
                  <strong className="text-primary">{book.featuredHeadline}</strong>
                </p>
                <p className="font-body text-sm text-cream/80 leading-relaxed mb-4">
                  {book.featuredIntro}
                </p>
                <ul className="font-body text-sm text-cream/80 space-y-2">
                  {book.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>{f.bold}</strong>{f.rest}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-cream/60 mt-4 italic">
                  {book.footerNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Cookbooks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Southern Cookbooks by Flavor First | Rubs, BBQ & Comfort Food"
        description="Shop Flavor First cookbooks — homemade rubs and BBQ sauces, Big Easy Cajun & Creole classics, Southern comfort food, and culinary chronicles."
        canonicalPath="/cookbooks"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section - Flavor First */}
        <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-charcoal via-secondary to-charcoal text-cream">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                      Kindle eBook — $4.99
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Ebook Cover */}
                <div className="relative flex justify-center">
                  <div className="bg-gradient-to-br from-primary/30 to-burgundy/30 p-4 rounded-2xl">
                    <img 
                      src={flavorFirstCover} 
                      alt="Flavor First: Homemade Rubs, Marinades & BBQ Sauces Cookbook Cover" 
                      className="rounded-xl shadow-2xl max-w-xs md:max-w-full"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
                </div>

                {/* Featured Recipes Description */}
                <div>
                  <p className="font-display text-base text-cream/80 mb-3 uppercase tracking-wider">
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
                    loading="lazy"
                    decoding="async"
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


                {/* Pricing */}
                <a 
                  href="https://www.amazon.com/dp/B0G8VZ7CMV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-charcoal font-semibold" size="xl">
                    <BookOpen className="w-5 h-5" />
                    Kindle eBook — $4.99
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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

      </main>
      <Footer />
    </div>
  );
};

export default Cookbooks;