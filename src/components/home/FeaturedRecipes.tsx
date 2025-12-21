import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import friedChicken from '@/assets/recipe-fried-chicken.jpg';
import bbqRibs from '@/assets/recipe-bbq-ribs.jpg';
import shrimpGrits from '@/assets/recipe-shrimp-grits.jpg';
import pecanPie from '@/assets/recipe-pecan-pie.jpg';

const featuredRecipes = [
  {
    id: 1,
    title: 'Buttermilk Fried Chicken',
    subtitle: 'Crispy, Golden Perfection',
    category: 'Southern Classics',
    time: '45 min',
    servings: 6,
    image: friedChicken,
    featured: true,
  },
  {
    id: 2,
    title: 'Honey-Glazed BBQ Ribs',
    subtitle: 'Fall-Off-The-Bone Tender',
    category: 'BBQ & Smokehouse',
    time: '4 hours',
    servings: 4,
    image: bbqRibs,
  },
  {
    id: 3,
    title: 'Lowcountry Shrimp & Grits',
    subtitle: 'Creamy Southern Comfort',
    category: 'Cajun & Creole',
    time: '35 min',
    servings: 4,
    image: shrimpGrits,
  },
  {
    id: 4,
    title: 'Classic Southern Pecan Pie',
    subtitle: 'Rich & Caramelized',
    category: 'Desserts with Soul',
    time: '1.5 hours',
    servings: 8,
    image: pecanPie,
  },
];

export function FeaturedRecipes() {
  const [mainRecipe, ...otherRecipes] = featuredRecipes;

  return (
    <section className="section-padding bg-background">
      <div className="container-blog">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-widest text-sm mb-3">
            From My Kitchen to Yours
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Featured Recipes
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            These are the dishes that bring families together. Tried, tested, and loved by home cooks across the South.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Featured Recipe */}
          <Link
            to={`/recipe/${mainRecipe.id}`}
            className="group relative aspect-[4/5] lg:aspect-auto lg:row-span-2 rounded-xl overflow-hidden card-elevated"
          >
            <img
              src={mainRecipe.image}
              alt={mainRecipe.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 recipe-card-overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded-full mb-3">
                {mainRecipe.category}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-cream mb-2">
                {mainRecipe.title}
              </h3>
              <p className="font-body text-cream/80 mb-4">{mainRecipe.subtitle}</p>
              <div className="flex items-center gap-4 text-cream/70 font-body text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {mainRecipe.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  Serves {mainRecipe.servings}
                </span>
              </div>
            </div>
          </Link>

          {/* Other Featured Recipes */}
          {otherRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group flex gap-4 lg:gap-6 bg-card rounded-xl overflow-hidden card-elevated p-4"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center py-2">
                <span className="font-body text-primary text-xs uppercase tracking-wider mb-1">
                  {recipe.category}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {recipe.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-2 hidden md:block">
                  {recipe.subtitle}
                </p>
                <div className="flex items-center gap-3 text-muted-foreground font-body text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {recipe.servings}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 font-body text-primary font-medium hover:gap-3 transition-all"
          >
            View All Recipes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
