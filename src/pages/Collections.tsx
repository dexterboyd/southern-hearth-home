import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { collections } from '@/data/collections';
import { getRecipeById } from '@/data/recipes';
import { getRecipeImage } from '@/data/recipeImages';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Recipe Collections | Flavor First"
        description="Curated Southern menus — Sunday dinner, Mardi Gras spreads, backyard BBQ, weeknight comfort, and more. Hand-picked recipes to cook together."
        canonicalPath="/collections"
      />
      <Header />
      <main className="pt-20 pb-16">
        {/* Hero */}
        <section className="section-padding pb-8 md:pb-12 text-center">
          <div className="container-blog">
            <p className="font-body text-sm uppercase tracking-widest text-primary mb-3">
              Curated Menus
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Recipe Collections
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked Southern menus built to cook together — from lazy Sunday dinners
              to full-tilt Mardi Gras feasts and everything in between.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="px-4 md:px-8">
          <div className="container-blog grid gap-8 md:grid-cols-2">
            {collections.map((c) => {
              const preview = c.recipeIds
                .map(getRecipeById)
                .filter((r): r is NonNullable<ReturnType<typeof getRecipeById>> => Boolean(r))
                .slice(0, 3);
              return (
                <Link
                  key={c.slug}
                  to={`/collections/${c.slug}`}
                  className="group bg-card rounded-xl overflow-hidden card-elevated"
                >
                  <div className="grid grid-cols-3 aspect-[16/9] bg-muted">
                    {preview.map((r) => (
                      <div key={r.id} className="overflow-hidden">
                        <img
                          src={getRecipeImage(r.id, r.categorySlug)}
                          alt={r.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <p className="font-body text-xs uppercase tracking-wider text-primary mb-2">
                      {c.recipeIds.length} recipes
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h2>
                    <p className="font-display italic text-primary mt-1">{c.tagline}</p>
                    <p className="font-body text-muted-foreground mt-3">{c.description}</p>
                    <span className="inline-flex items-center gap-2 mt-4 font-body text-sm text-primary">
                      View menu <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;