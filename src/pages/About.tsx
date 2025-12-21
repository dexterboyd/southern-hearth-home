import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Instagram, Mail } from 'lucide-react';
import chefImage from '@/assets/about-chef.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-muted">
          <div className="container-blog">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={chefImage}
                    alt="Home cook in Southern kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <p className="font-body text-primary uppercase tracking-widest text-sm mb-4">
                  About Flavor First
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Good Food Doesn't Rush
                </h1>
                <p className="font-body text-xl text-muted-foreground italic mb-6">
                  And flavor isn't optional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-blog">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <div className="font-body text-lg text-foreground/80 leading-relaxed space-y-6">
                  <p>
                    I grew up knowing that good food doesn't rush and flavor isn't optional. In Southern 
                    kitchens, meals were built with patience — simmered, smoked, seasoned, and shared.
                  </p>

                  <p>
                    Flavor First is where I document the recipes that matter. The ones rooted in tradition, 
                    refined through experience, and written with care. I believe Southern food deserves 
                    respect — not shortcuts — and that the best meals come from understanding why they work.
                  </p>

                  <div className="my-10 p-6 bg-muted rounded-xl border-l-4 border-primary">
                    <p className="font-display text-xl italic text-foreground m-0">
                      "This is Southern food that feels like home… but plated with intention."
                    </p>
                  </div>

                  <p>
                    Flavor First is a celebration of Southern cooking done the right way — from-scratch 
                    recipes built on patience, tradition, and bold seasoning. This is the food that filled 
                    Sunday kitchens, smoked in backyard pits, and showed up on the table whether times were 
                    good or hard.
                  </p>

                  <p>
                    Here you'll find elevated Southern classics, comforting family meals, and BBQ-forward 
                    dishes that respect the roots while refining the craft. Every recipe is tested, 
                    intentional, and written with the same care you expect from a premium cookbook — 
                    because good food deserves more than shortcuts.
                  </p>

                  <p>
                    Flavor First isn't about trends. It's about flavor that lasts, recipes that matter, 
                    and food worth sharing.
                  </p>

                  <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">
                    What You'll Find Here
                  </h2>

                  <ul className="space-y-3">
                    <li>
                      <strong className="text-foreground">Elevated Southern Classics:</strong> Refined 
                      versions of timeless Southern dishes — familiar, comforting, and deeply flavorful.
                    </li>
                    <li>
                      <strong className="text-foreground">Backyard BBQ & Smokehouse:</strong> Where fire, 
                      smoke, and seasoning meet tradition.
                    </li>
                    <li>
                      <strong className="text-foreground">Sunday Suppers & Family Favorites:</strong> Slow 
                      meals meant to bring people together.
                    </li>
                    <li>
                      <strong className="text-foreground">Cajun & Creole Roots:</strong> Bold Louisiana 
                      flavor with deep respect for technique.
                    </li>
                  </ul>

                  <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">
                    The Flavor First Philosophy
                  </h2>

                  <p>
                    Every recipe on this blog is made from scratch in my own kitchen. I test them until 
                    they're perfect, write them so anyone can follow along, and share the tips and tricks 
                    that took me years to learn.
                  </p>

                  <p>
                    My cooking style blends the comfort of home with techniques that elevate each dish. 
                    I'm inspired by the slow-cooked traditions of BBQ, the bold spices of Cajun country, 
                    and the simple perfection of a Sunday roast. Food should be approachable but never 
                    boring, rustic but refined.
                  </p>

                  <p className="font-display text-xl italic text-primary">
                    — Flavor First
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-muted rounded-2xl text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Join the Flavor First Kitchen
                </h3>
                <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
                  Get a complimentary cookbook-quality recipe plus early access to new releases.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero">
                    <Mail className="w-4 h-4" />
                    Get Free Recipe
                  </Button>
                  <Button variant="outline">
                    <Instagram className="w-4 h-4" />
                    Follow on Instagram
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4" />
                    Shop Cookbooks
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;