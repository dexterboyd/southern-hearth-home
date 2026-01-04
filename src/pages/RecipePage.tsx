import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getRecipeBySlug, getRecipesByCategory, getRecipeSlug } from '@/data/recipes';
import { Clock, Users, ChefHat, ArrowLeft, Printer, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getRecipeImage } from '@/data/recipeImages';

const RecipePage = () => {
  const { slug } = useParams();
  const recipe = getRecipeBySlug(slug || '');

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
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
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={getRecipeImage(recipe.id, recipe.categorySlug)}
            alt={recipe.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Recipe Content */}
        <article className="container-blog -mt-32 relative z-10 pb-16">
          <div className="bg-card rounded-xl p-6 md:p-10 card-elevated">
            {/* Breadcrumb */}
            <Link
              to="/recipes"
              className="inline-flex items-center gap-2 text-primary font-body text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Recipes
            </Link>

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
                <div className="flex gap-2 ml-auto">
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

            {/* Ingredients */}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <section className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    1
                  </span>
                  Ingredients
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 font-body text-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <Separator className="my-8" />

            {/* Instructions */}
            {recipe.instructions && recipe.instructions.length > 0 && (
              <section className="mb-10">
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
                <div className="flex justify-end mt-8">
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
              <section className="mb-10 bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  Pro Tip from the Kitchen
                </h3>
                <p className="font-body text-foreground">{recipe.proTip}</p>
              </section>
            )}

          </div>

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <section className="mt-16">
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
          <section className="mt-16 text-center bg-muted rounded-xl p-8">
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
      <Footer />
    </div>
  );
};

export default RecipePage;
