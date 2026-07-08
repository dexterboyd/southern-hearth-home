import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getRecipeBySlug, getRecipesByCategory, getRecipeSlug } from '@/data/recipes';
import { Clock, Users, ChefHat, ArrowLeft, Printer, Share2, Minus, Plus, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getRecipeImage } from '@/data/recipeImages';
import { Seo, SITE_URL } from '@/components/Seo';
import { scaleIngredient } from '@/lib/scaleIngredient';
import { CookingMode } from '@/components/CookingMode';
import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';

const RecipePage = () => {
  const { slug } = useParams();
  const recipe = getRecipeBySlug(slug || '');
  const [servings, setServings] = useState<number>(recipe?.servings ?? 1);
  const [cookingOpen, setCookingOpen] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Recipe Not Found | Flavor First"
          description="The recipe you're looking for doesn't exist or has been moved. Browse our full library of Southern recipes."
          canonicalPath="/recipes"
        />
        <Header />
        <main className="pt-20 pb-16">
          <div className="container-blog text-center py-20">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Recipe Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              The recipe you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/recipes">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Recipes
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related recipes from the same category
  const relatedRecipes = getRecipesByCategory(recipe.categorySlug)
    .filter(r => r.id !== recipe.id)
    .slice(0, 3);

  const scaleFactor = servings / recipe.servings;
  const decreaseServings = () => setServings((s) => Math.max(1, s - 1));
  const increaseServings = () => setServings((s) => Math.min(99, s + 1));
  const resetServings = () => setServings(recipe.servings);

  const recipeImageUrl = (() => {
    const img = getRecipeImage(recipe.id, recipe.categorySlug);
    if (!img) return `${SITE_URL}/og-image.jpg`;
    return img.startsWith('http') ? img : `${SITE_URL}${img.startsWith('/') ? img : `/${img}`}`;
  })();

  const seoTitle = `${recipe.title} | Flavor First`;
  const seoDescription = recipe.description.length > 155
    ? `${recipe.description.slice(0, 152)}...`
    : recipe.description;

  // Parse "2.5 hours" or "45 minutes" into ISO 8601 duration for schema.org
  const toIsoDuration = (time: string): string | undefined => {
    if (!time) return undefined;
    const t = time.toLowerCase();
    const num = parseFloat(t);
    if (Number.isNaN(num)) return undefined;
    if (t.includes('hour') || t.includes('hr')) {
      const h = Math.floor(num);
      const m = Math.round((num - h) * 60);
      return `PT${h}H${m ? `${m}M` : ''}`;
    }
    if (t.includes('min')) return `PT${Math.round(num)}M`;
    return undefined;
  };

  const recipeJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: [recipeImageUrl],
    author: { '@type': 'Person', name: 'Dexter M. Boyd' },
    publisher: {
      '@type': 'Organization',
      name: 'Flavor First',
      url: SITE_URL,
    },
    recipeCategory: recipe.category,
    recipeCuisine: 'Southern',
    recipeYield: recipe.yield || `${recipe.servings} servings`,
    url: `${SITE_URL}/recipe/${getRecipeSlug(recipe)}`,
    ...(toIsoDuration(recipe.time) ? { totalTime: toIsoDuration(recipe.time) } : {}),
    ...(recipe.ingredients?.length ? { recipeIngredient: recipe.ingredients } : {}),
    ...(recipe.instructions?.length
      ? {
          recipeInstructions: recipe.instructions.map((text, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            text,
          })),
        }
      : {}),
  };

  const crumbs = [
    { label: 'Recipes', to: '/recipes' },
    { label: recipe.category, to: `/recipes?category=${recipe.categorySlug}` },
    { label: recipe.title },
  ];
  const breadcrumbLd = breadcrumbJsonLd(crumbs, SITE_URL);
  const combinedJsonLd = [recipeJsonLd, breadcrumbLd];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/recipe/${getRecipeSlug(recipe)}`}
        image={recipeImageUrl}
        type="article"
        jsonLd={combinedJsonLd}
      />
      <div className="no-print">
        <Header />
      </div>
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden no-print">
          <img
            src={getRecipeImage(recipe.id, recipe.categorySlug)}
            alt={recipe.title}
            className={`w-full h-full object-cover ${
              recipe.id === 9 ? 'object-bottom' : 'object-center'
            }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Recipe Content */}
        <article className="container-blog -mt-32 relative z-10 pb-16">
          <div id="print-area" className="bg-card rounded-xl p-6 md:p-10 card-elevated">
            {/* Breadcrumb */}
            <div className="no-print">
              <Breadcrumbs items={crumbs} className="mb-6" />
            </div>

            {/* Header */}
            <header className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-body uppercase tracking-wider rounded-full mb-4">
                {recipe.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
                {recipe.title}
              </h1>
              <p className="font-display text-xl text-primary italic mb-4">
                {recipe.subtitle}
              </p>
              <p className="font-body text-lg text-muted-foreground max-w-3xl">
                {recipe.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-body">{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-body">Serves {recipe.servings}</span>
                </div>
                {recipe.yield && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ChefHat className="w-5 h-5 text-primary" />
                    <span className="font-body">{recipe.yield}</span>
                  </div>
                )}
                <div className="flex gap-2 ml-auto no-print">
                  {recipe.instructions && recipe.instructions.length > 0 && (
                    <Button size="sm" onClick={() => setCookingOpen(true)}>
                      <Play className="w-4 h-4 mr-2" />
                      Cooking Mode
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={handlePrint}>
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </header>

            <Separator className="my-8" />

            {/* Sticky Table of Contents */}
            <nav
              aria-label="On this page"
              className="no-print sticky top-16 md:top-20 z-30 -mx-6 md:-mx-10 mb-8 border-y border-border bg-card/95 backdrop-blur-sm"
            >
              <div className="px-6 md:px-10 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground mr-2 flex-shrink-0">
                  On this page
                </span>
                {recipe.ingredients && recipe.ingredients.length > 0 && (
                  <a
                    href="#ingredients"
                    className="font-body text-sm px-3 py-1 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                  >
                    Ingredients
                  </a>
                )}
                {recipe.instructions && recipe.instructions.length > 0 && (
                  <a
                    href="#instructions"
                    className="font-body text-sm px-3 py-1 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                  >
                    Instructions
                  </a>
                )}
                {recipe.proTip && (
                  <a
                    href="#pro-tips"
                    className="font-body text-sm px-3 py-1 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
                  >
                    Pro Tips
                  </a>
                )}
              </div>
            </nav>

            {/* Ingredients */}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <section id="ingredients" className="mb-10 scroll-mt-32">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                      1
                    </span>
                    Ingredients
                  </h2>
                  <div className="flex items-center gap-3 no-print">
                    <span className="font-body text-sm text-muted-foreground">Servings</span>
                    <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={decreaseServings}
                        aria-label="Decrease servings"
                        disabled={servings <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span
                        className="min-w-[2.5rem] text-center font-display text-lg font-semibold text-foreground"
                        aria-live="polite"
                      >
                        {servings}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={increaseServings}
                        aria-label="Increase servings"
                        disabled={servings >= 99}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {servings !== recipe.servings && (
                      <button
                        type="button"
                        onClick={resetServings}
                        className="font-body text-xs text-primary hover:underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-body text-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {scaleIngredient(ingredient, scaleFactor)}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <Separator className="my-8" />

            {/* Instructions */}
            {recipe.instructions && recipe.instructions.length > 0 && (
              <section id="instructions" className="mb-10 scroll-mt-32">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    2
                  </span>
                  Instructions
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-muted text-foreground font-display font-semibold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="font-body text-foreground pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>

                {/* Back to Recipes Button */}
                <div className="flex justify-end mt-8 no-print">
                  <Link to={`/recipes?category=${recipe.categorySlug}`}>
                    <Button variant="outline" className="gap-2">
                      Back to Recipes
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Button>
                  </Link>
                </div>
              </section>
            )}

            {/* Pro Tip */}
            {recipe.proTip && (
              <section id="pro-tips" className="mb-10 bg-primary/5 border border-primary/20 rounded-lg p-6 scroll-mt-32">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  Pro Tip from the Kitchen
                </h3>
                <p className="font-body text-foreground">{recipe.proTip}</p>
              </section>
            )}

          </div>

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <section className="mt-16 no-print">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
                More {recipe.category} Recipes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedRecipes.map((related) => (
                  <Link
                    key={related.id}
                    to={`/recipe/${getRecipeSlug(related)}`}
                    className="group bg-card rounded-xl overflow-hidden card-elevated"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={getRecipeImage(related.id, related.categorySlug)}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {related.time}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 text-center bg-muted rounded-xl p-8 no-print">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Love This Recipe?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Get more authentic Southern recipes in our cookbooks, complete with step-by-step instructions, pro tips, and beautiful photography.
            </p>
            <Link to="/cookbooks">
              <Button size="lg">
                Explore Our Cookbooks
              </Button>
            </Link>
          </section>
        </article>
      </main>
      <div className="no-print">
        <Footer />
      </div>
      {cookingOpen && recipe.instructions && (
        <CookingMode
          title={recipe.title}
          steps={recipe.instructions}
          onClose={() => setCookingOpen(false)}
        />
      )}
    </div>
  );
};

export default RecipePage;
