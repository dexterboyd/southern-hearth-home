import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { recipes, Recipe } from '@/data/recipes';

// Placeholder images until real cookbook photos are added
import friedChicken from '@/assets/recipe-fried-chicken.jpg';
import bbqRibs from '@/assets/recipe-bbq-ribs.jpg';
import shrimpGrits from '@/assets/recipe-shrimp-grits.jpg';
import pecanPie from '@/assets/recipe-pecan-pie.jpg';

// Cycle through available placeholder images
const placeholderImages = [friedChicken, bbqRibs, shrimpGrits, pecanPie];
const getPlaceholderImage = (index: number) => placeholderImages[index % placeholderImages.length];

// Define category order for carousel (updated - no Sunday Suppers)
const categoryOrder = [
  'cajun',      // Cajun & Creole
  'classics',   // Southern Classics
  'comfort',    // Comfort Food
  'sides',      // Southern Sides
  'bbq',        // BBQ & Smokehouse
  'rubs',       // Rubs & Marinades
  'desserts',   // Desserts
];

// Get one recipe per category in order
const getCarouselRecipes = (): Recipe[] => {
  const carouselRecipes: Recipe[] = [];
  
  categoryOrder.forEach(categorySlug => {
    const categoryRecipe = recipes.find(r => r.categorySlug === categorySlug);
    if (categoryRecipe) {
      carouselRecipes.push(categoryRecipe);
    }
  });
  
  return carouselRecipes;
};

const carouselRecipes = getCarouselRecipes();

export function FeaturedRecipes() {
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
            From Cajun & Creole classics to smoky BBQ, comforting family favorites to sweet Southern desserts — explore recipes from all our cookbooks, tried, tested, and ready for your kitchen.
          </p>
        </div>

        {/* Recipe Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {carouselRecipes.map((recipe, index) => (
              <CarouselItem key={recipe.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="group block relative aspect-[3/4] rounded-xl overflow-hidden card-elevated"
                >
                  <img
                    src={recipe.image || getPlaceholderImage(index)}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 recipe-card-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded-full mb-3">
                      {recipe.category}
                    </span>
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-cream mb-2">
                      {recipe.title}
                    </h3>
                    <p className="font-body text-cream/80 text-sm mb-3">{recipe.subtitle}</p>
                    <div className="flex items-center gap-4 text-cream/70 font-body text-sm">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {recipe.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        Serves {recipe.servings}
                      </span>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border" />
          <CarouselNext className="hidden md:flex -right-4 bg-background border-border" />
        </Carousel>

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
