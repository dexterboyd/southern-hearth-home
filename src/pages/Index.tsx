import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedRecipes } from '@/components/home/FeaturedRecipes';
import { AboutPreview } from '@/components/home/AboutPreview';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { Seo } from '@/components/Seo';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Flavor First — Southern Comfort Recipes, BBQ & Cajun Classics"
        description="Authentic Southern recipes with a BBQ-forward edge — Cajun, Creole, soul food, and desserts. Grab 10 free recipes and shop our cookbooks."
        canonicalPath="/"
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturedRecipes />
        <AboutPreview />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
