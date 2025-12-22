import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Clock, Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { recipes, getRecipesByCategory } from '@/data/recipes';

// Placeholder images until real cookbook photos are added
import friedChicken from '@/assets/recipe-fried-chicken.jpg';
import bbqRibs from '@/assets/recipe-bbq-ribs.jpg';
import shrimpGrits from '@/assets/recipe-shrimp-grits.jpg';
import pecanPie from '@/assets/recipe-pecan-pie.jpg';

const placeholderImages = [friedChicken, bbqRibs, shrimpGrits, pecanPie];
const getPlaceholderImage = (index: number) => placeholderImages[index % placeholderImages.length];

const categories = [
  { name: 'All Recipes', slug: 'all' },
  { name: 'Cajun & Creole Roots', slug: 'cajun' },
  { name: 'Elevated Southern Classics', slug: 'classics' },
  { name: 'Comfort Food & Family Favorites', slug: 'comfort' },
  { name: 'Sunday Suppers', slug: 'sunday' },
  { name: 'Southern Sides & Breads', slug: 'sides' },
  { name: 'Backyard BBQ & Smokehouse', slug: 'bbq' },
  { name: 'Rubs & Marinades', slug: 'rubs' },
  { name: 'Desserts with Soul', slug: 'sweets' },
];

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      activeCategory === 'all' ||
      recipe.categorySlug === activeCategory;
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section id="recipe-collection" className="py-5 md:py-8 bg-muted scroll-mt-20">
          <div className="container-blog text-center">
            <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Recipe Collection
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto mb-4">
              Bold Southern flavors, homestyle Cajun & Creole recipes, and BBQ classics — ready for your kitchen.
            </p>

            {/* Search */}
            <div className="max-w-sm mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9 bg-background text-sm"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-border bg-background sticky top-16 md:top-20 z-40">
          <div className="container-blog">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category.slug}
                  variant={activeCategory === category.slug ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveCategory(category.slug)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Recipe Grid */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, index) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="group bg-card rounded-xl overflow-hidden card-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image || getPlaceholderImage(index)}
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

            {filteredRecipes.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground">
                  No recipes found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recipes;
