import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedRecipes } from '@/components/home/FeaturedRecipes';
import { CategorySection } from '@/components/home/CategorySection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { CookbookCTA } from '@/components/home/CookbookCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRecipes />
        <CategorySection />
        <AboutPreview />
        <CookbookCTA />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
