import { Link } from 'react-router-dom';
import { Flame, Home, Beef, Soup, Church, Wheat, Cake } from 'lucide-react';

const categories = [
  {
    name: 'Elevated Southern Classics',
    description: 'Timeless recipes refined for the modern kitchen',
    icon: Home,
    slug: 'classics',
    color: 'from-honey to-honey-light',
  },
  {
    name: 'Comfort Food & Family Favorites',
    description: 'Heartwarming dishes that bring everyone together',
    icon: Soup,
    slug: 'comfort',
    color: 'from-burgundy to-accent',
  },
  {
    name: 'Backyard BBQ & Smokehouse',
    description: 'Smoke-kissed meats and bold flavors',
    icon: Flame,
    slug: 'bbq',
    color: 'from-secondary to-charcoal',
  },
  {
    name: 'Cajun & Creole Roots',
    description: 'Spicy, soulful Louisiana-inspired dishes',
    icon: Beef,
    slug: 'cajun',
    color: 'from-accent to-burgundy',
  },
  {
    name: 'Sunday Suppers',
    description: 'Special occasion meals worth gathering for',
    icon: Church,
    slug: 'sunday',
    color: 'from-honey to-primary',
  },
  {
    name: 'Southern Sides & Breads',
    description: 'The perfect companions to every main dish',
    icon: Wheat,
    slug: 'sides',
    color: 'from-charcoal to-secondary',
  },
  {
    name: 'Desserts with Soul',
    description: 'Sweet endings that steal the show',
    icon: Cake,
    slug: 'desserts',
    color: 'from-honey-light to-honey',
  },
];

export function CategorySection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-blog">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary uppercase tracking-widest text-sm mb-3">
            Explore by Category
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Find Your Flavor
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From smoky BBQ to soulful desserts, discover recipes organized the way Southern kitchens work best.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/recipes?category=${category.slug}`}
              className="group relative bg-card rounded-xl p-6 card-elevated overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
