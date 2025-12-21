import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Flame, Users, Trophy, Clock, ChefHat, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const BBQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Bold & Energetic */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ember via-charcoal to-background" />
        
        {/* Animated flame pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-flame rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-ember rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-electric rounded-full blur-2xl animate-pulse delay-700" />
        </div>
        
        <div className="container-blog relative z-10 px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-flame/20 border border-flame/40 rounded-full mb-6">
            <Flame className="w-4 h-4 text-flame" />
            <span className="text-sm font-medium text-flame">Game Day. Party Mode. Grill Master.</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            Fire Up Your
            <span className="block text-gradient-fire">Social Game</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bold flavors for bold gatherings. Master the grill and become the legend of every cookout, tailgate, and backyard bash.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-flame hover:bg-ember text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-glow">
              <Flame className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="border-flame/50 text-foreground hover:bg-flame/10 font-semibold text-lg px-8 py-6 rounded-xl">
              Browse Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-blog px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ChefHat, value: '50+', label: 'Grill Recipes' },
              { icon: Users, value: '10K+', label: 'Grill Masters' },
              { icon: Trophy, value: '100%', label: 'Party Approved' },
              { icon: Clock, value: '30min', label: 'Avg. Prep Time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-flame/10 rounded-2xl mb-3">
                  <stat.icon className="w-7 h-7 text-flame" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-background">
        <div className="container-blog px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Built for <span className="text-flame">Social Cooks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whether it's game day, a birthday bash, or just Saturday vibes — we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏈',
                title: 'Game Day Grilling',
                description: 'Wings, ribs, and sliders that score every time. Perfect for tailgates and watch parties.',
                gradient: 'from-flame/20 to-ember/20',
              },
              {
                icon: '🎉',
                title: 'Party Platters',
                description: 'Crowd-pleasing recipes scaled for groups. Feed 10, 20, or 50 hungry guests.',
                gradient: 'from-electric/20 to-flame/20',
              },
              {
                icon: '🔥',
                title: 'Quick & Hot',
                description: 'Fast marinades and rubs that pack a punch. Ready in 30 minutes or less.',
                gradient: 'from-ember/20 to-charcoal/20',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-border hover:border-flame/50 transition-all duration-300 group`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-flame transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-ember/30 to-charcoal">
        <div className="container-blog px-4 text-center">
          <Sparkles className="w-12 h-12 text-flame mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Level Up?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Get our cookbook and become the grill master your friends didn't know they needed.
          </p>
          <Link to="/cookbooks">
            <Button size="lg" className="bg-flame hover:bg-ember text-white font-semibold text-lg px-10 py-6 rounded-xl shadow-glow">
              Get the Cookbook
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BBQ;
