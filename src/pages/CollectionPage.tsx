import { Link, useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { getCollectionBySlug } from '@/data/collections';
import { getRecipeById, getRecipeSlug } from '@/data/recipes';
import { getRecipeImage } from '@/data/recipeImages';
import { ArrowLeft, Clock, Users } from 'lucide-react';

const CollectionPage = () => {
  const { slug } = useParams();
  const collection = slug ? getCollectionBySlug(slug) : undefined;

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Seo
          title="Collection Not Found | Flavor First"
          description="The recipe collection you're looking for doesn't exist. Browse our full menu of curated Southern collections."
          canonicalPath="/collections"
        />
        <Header />
        <main className="pt-20 pb-16">
          <div className="container-blog text-center py-20">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Collection Not Found
            </h1>
            <Link to="/collections">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Collections
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const recipes = collection.recipeIds
    .map(getRecipeById)
    .filter((r): r is NonNullable<ReturnType<typeof getRecipeById>> => Boolean(r));

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${collection.title} | Flavor First Collections`}
        description={collection.description.length > 155
          ? `${collection.description.slice(0, 152)}...`
          : collection.description}
        canonicalPath={`/collections/${collection.slug}`}
      />
      <Header />
      <main className="pt-20 pb-16">
        <section className="section-padding pb-8 md:pb-12">
          <div className="container-blog">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-primary font-body text-sm mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              All Collections
            </Link>
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3">
              Curated Menu
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-3">
              {collection.title}
            </h1>
            <p className="font-display text-xl italic text-primary mb-4">{collection.tagline}</p>
            <p className="font-body text-lg text-muted-foreground max-w-3xl">
              {collection.description}
            </p>
          </div>
        </section>

        <section className="px-4 md:px-8">
          <div className="container-blog grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${getRecipeSlug(recipe)}`}
                className="group bg-card rounded-xl overflow-hidden card-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={getRecipeImage(recipe.id, recipe.categorySlug)}
                    alt={recipe.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-body uppercase tracking-wider rounded-full mb-2">
                    {recipe.category}
                  </span>
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mt-1 line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {recipe.servings}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;