import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import SeasonalSpotlight from '@/components/home/SeasonalSpotlight';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryShowcase />
      <SeasonalSpotlight />
      <FeaturedProducts />
    </main>
  );
}
