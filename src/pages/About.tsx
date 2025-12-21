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
                    alt="Sarah Mae in her Southern kitchen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <p className="font-body text-primary uppercase tracking-widest text-sm mb-4">
                  About Me
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                  Hi, I'm Sarah Mae
                </h1>
                <p className="font-body text-xl text-muted-foreground italic mb-6">
                  Home cook, recipe developer, and keeper of Southern traditions.
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
                    I was raised in a kitchen where the cast iron skillet was seasoned with decades of love, 
                    and Sunday dinner wasn't just a meal—it was sacred. My grandmother's hands taught me more 
                    than any culinary school ever could: how to feel when the dough is just right, how to trust 
                    my nose over any timer, and how food carries the stories of those who made it before us.
                  </p>

                  <p>
                    Growing up in the heart of the South, I learned that cooking isn't just about feeding 
                    people—it's about gathering them. It's the pot of collards simmering low and slow while 
                    cousins catch up on the porch. It's the smoke curling from the pit as neighbors stop by 
                    "just to say hello" but stay for a plate. It's the way a warm biscuit can mend a bad day.
                  </p>

                  <div className="my-10 p-6 bg-muted rounded-xl border-l-4 border-primary">
                    <p className="font-display text-xl italic text-foreground m-0">
                      "I believe the best recipes are the ones that bring people together, 
                      that taste like home, and that leave you wanting one more bite."
                    </p>
                  </div>

                  <p>
                    After years of collecting recipes in worn notebooks and hosting more dinner parties than 
                    I can count, I started Smoke & Honey Kitchen to share what I've learned. Every recipe 
                    here is made from scratch in my own kitchen. I test them until they're perfect, write 
                    them so anyone can follow along, and share the tips and tricks that took me years to learn.
                  </p>

                  <p>
                    My cooking style blends the comfort of home with techniques that elevate each dish. 
                    I'm inspired by the slow-cooked traditions of BBQ, the bold spices of Cajun country, 
                    and the simple perfection of a Sunday roast. I believe food should be approachable 
                    but never boring, rustic but refined.
                  </p>

                  <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">
                    What You'll Find Here
                  </h2>

                  <ul className="space-y-3">
                    <li>
                      <strong className="text-foreground">Tested Recipes:</strong> Every recipe is developed 
                      and tested in my home kitchen, written with clear instructions for cooks of all skill levels.
                    </li>
                    <li>
                      <strong className="text-foreground">From-Scratch Philosophy:</strong> I believe in real 
                      ingredients, proper technique, and taking the time to do things right.
                    </li>
                    <li>
                      <strong className="text-foreground">Southern Heart:</strong> Whether it's BBQ, Cajun, 
                      or classic comfort food, everything I make is rooted in Southern tradition.
                    </li>
                  </ul>

                  <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">
                    Beyond the Blog
                  </h2>

                  <p>
                    When I'm not testing recipes, I'm working on cookbooks that bring my favorite recipes 
                    into your hands in a permanent, beautiful way. My debut cookbook, "The Smoke & Honey Cookbook," 
                    features over 100 recipes that represent the best of Southern cooking.
                  </p>

                  <p>
                    Thank you for being here. Pour yourself some sweet tea, pull up a chair, and let's cook together.
                  </p>

                  <p className="font-display text-xl italic text-primary">
                    — Sarah Mae
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-8 bg-muted rounded-2xl text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Let's Stay Connected
                </h3>
                <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
                  Join my newsletter for weekly recipes, cooking tips, and first access to new cookbooks.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero">
                    <Mail className="w-4 h-4" />
                    Subscribe to Newsletter
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
