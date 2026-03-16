import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import PopularList from '@/components/home/PopularList';
import AdBanner from '@/components/layout/AdBanner';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-white">
        <AdBanner slot="홈_상단" format="horizontal" />
      </div>

      <HeroSection />

      <section className="px-4 py-5">
        <CategoryGrid />
      </section>

      <div className="px-4">
        <AdBanner slot="홈_중간" format="horizontal" />
      </div>

      <section className="px-4 pb-5">
        <PopularList />
      </section>

      <div className="h-20" />
    </main>
  );
}
