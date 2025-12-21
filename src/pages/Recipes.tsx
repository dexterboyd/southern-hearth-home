import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Clock, Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import friedChicken from '@/assets/recipe-fried-chicken.jpg';
import bbqRibs from '@/assets/recipe-bbq-ribs.jpg';
import shrimpGrits from '@/assets/recipe-shrimp-grits.jpg';
import pecanPie from '@/assets/recipe-pecan-pie.jpg';

const categories = [
  { name: 'All Recipes', slug: 'all' },
  { name: 'Southern Classics', slug: 'classics' },
  { name: 'BBQ & Smokehouse', slug: 'bbq' },
  { name: 'Comfort Food', slug: 'comfort' },
  { name: 'Cajun & Creole', slug: 'cajun' },
  { name: 'Desserts', slug: 'desserts' },
];

const recipes = [
  {
    id: 1,
    title: 'Buttermilk Fried Chicken',
    description: 'Crispy, golden perfection with a juicy, flavorful interior.',
    category: 'Southern Classics',
    time: '45 min',
    servings: 6,
    image: friedChicken,
  },
  {
    id: 2,
    title: 'Honey-Glazed BBQ Ribs',
    description: 'Fall-off-the-bone tender ribs with a sweet and smoky glaze.',
    category: 'BBQ & Smokehouse',
    time: '4 hours',
    servings: 4,
    image: bbqRibs,
  },
  {
    id: 3,
    title: 'Lowcountry Shrimp & Grits',
    description: 'Creamy stone-ground grits topped with succulent shrimp.',
    category: 'Cajun & Creole',
    time: '35 min',
    servings: 4,
    image: shrimpGrits,
  },
  {
    id: 4,
    title: 'Classic Southern Pecan Pie',
    description: 'Rich, caramelized filling with toasted Georgia pecans.',
    category: 'Desserts',
    time: '1.5 hours',
    servings: 8,
    image: pecanPie,
  },
  {
    id: 5,
    title: 'Cast Iron Cornbread',
    description: 'Golden, crispy-edged cornbread made the traditional way.',
    category: 'Southern Classics',
    time: '30 min',
    servings: 8,
    image: friedChicken,
  },
  {
    id: 6,
    title: 'Smoked Brisket Texas-Style',
    description: 'Low and slow smoked brisket with a perfect bark.',
    category: 'BBQ & Smokehouse',
    time: '12 hours',
    servings: 10,
    image: bbqRibs,
  },
];

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      activeCategory === 'all' ||
      recipe.category.toLowerCase().includes(activeCategory);
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
        <section className="section-padding bg-muted">
          <div className="container-blog text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Recipe Collection
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Cookbook-quality recipes rooted in Southern tradition. Each one tested, perfected, and ready for your kitchen.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background"
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
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="group bg-card rounded-xl overflow-hidden card-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image}
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
