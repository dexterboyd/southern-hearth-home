import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-southern-feast.jpg';

export function HeroSection() {
  const navigate = useNavigate();

  const goToFreeRecipes = () => {
    navigate('/cookbooks', { state: { scrollTo: 'newsletter' } });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Southern feast with smoked brisket, collard greens, and cornbread on a rustic table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-blog px-4 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight mb-6 animate-fade-up opacity-0 stagger-2">
            Southern Comfort Starts with{' '}
            <span className="text-primary italic">Flavor.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-cream/80 mb-8 leading-relaxed animate-fade-up opacity-0 stagger-3">
            Southern-inspired soul food recipes, bold BBQ, and flavors that will have you cleaning your plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 stagger-4">
            <Link to="/recipes">
              <Button variant="hero" size="xl">
                Explore Recipes
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="hero-outline" size="xl" onClick={goToFreeRecipes}>
              Download Free Recipes
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
