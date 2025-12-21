import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import chefImage from '@/assets/about-chef.jpg';

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-blog">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={chefImage}
                alt="Home cook in Southern kitchen with cast iron skillet"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary uppercase tracking-widest text-sm mb-4">
              From My Kitchen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Hi, I'm Sarah Mae
            </h2>

            {/* Quote */}
            <div className="relative mb-6 pl-6 border-l-4 border-primary">
              <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary opacity-50" />
              <p className="font-display text-xl italic text-foreground/90">
                "Good food is more than a meal—it's a memory in the making."
              </p>
            </div>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed mb-8">
              <p>
                I grew up in a kitchen where the cast iron was always seasoned and Sunday dinner 
                was sacred. My grandmother taught me that the best recipes tell a story—of family, 
                of place, of love stirred into every pot.
              </p>
              <p>
                Now I share those stories with you. Every recipe on this blog is made from scratch, 
                tested in my own kitchen, and written with the home cook in mind. Whether you're 
                mastering your first brisket or perfecting mama's pie crust, I'm here to guide you.
              </p>
            </div>

            <Link to="/about">
              <Button variant="outline" size="lg">
                Read My Full Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
