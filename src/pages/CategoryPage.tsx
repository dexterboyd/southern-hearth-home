import { Link, useParams } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { recipes, getRecipeSlug } from '@/data/recipes';
import { getRecipeImage } from '@/data/recipeImages';
import { getCategoryMeta } from '@/data/categories';
import NotFound from './NotFound';

const CategoryPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const meta = getCategoryMeta(slug);

  if (!meta) return <NotFound />;

  const categoryRecipes = recipes.filter((r) => r.categorySlug === slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta.seoTitle,
    description: meta.seoDescription,
    url: `/category/${meta.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={meta.seoTitle}
        description={meta.seoDescription}
        canonicalPath={`/category/${meta.slug}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="pt-20">
        <div className="container-blog px-4 pt-4">
          <Breadcrumbs
            items={[
              { label: 'Recipes', to: '/recipes' },
              { label: meta.shortName },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={meta.heroImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
          </div>
          <div className="relative container-blog px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="font-body text-primary text-xs md:text-sm uppercase tracking-[0.2em]">
                {meta.heroKicker}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-3 mb-4 leading-tight">
                {meta.heroTitle}{' '}
                <span className="text-primary">{meta.heroTitleAccent}</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                {meta.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container-blog px-4 max-w-3xl">
            {meta.intro.map((para, i) => (
              <p
                key={i}
                className="font-body text-base md:text-lg text-foreground/85 leading-relaxed mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Recipe grid */}
        <section className="pb-16 md:pb-20 bg-background">
          <div className="container-blog px-4">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              All {meta.shortName} Recipes
              <span className="ml-3 font-body text-base font-normal text-muted-foreground">
                ({categoryRecipes.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${getRecipeSlug(recipe)}`}
                  className="group bg-card rounded-xl overflow-hidden card-elevated"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={getRecipeImage(recipe.id, recipe.categorySlug)}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5">
                    <span className="font-body text-primary text-xs uppercase tracking-wider">
                      {recipe.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground font-body text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Serves {recipe.servings}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;