import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedRecipes } from '@/components/home/FeaturedRecipes';
import { CategorySection } from '@/components/home/CategorySection';
import { AboutPreview } from '@/components/home/AboutPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedRecipes />
        <CategorySection />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
