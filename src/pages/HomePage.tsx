import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import PopularList from '../components/home/PopularList';
import AdBanner from '../components/layout/AdBanner';

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. AdBanner slot="홈_상단" */}
      <div className="bg-white">
        <AdBanner slot="홈_상단" format="horizontal" />
      </div>

      {/* 2. HeroSection */}
      <HeroSection />

      {/* 3. CategoryGrid */}
      <section className="px-4 py-5">
        <CategoryGrid />
      </section>

      {/* 4. AdBanner slot="홈_중간" */}
      <div className="px-4">
        <AdBanner slot="홈_중간" format="horizontal" />
      </div>

      {/* 5. PopularList */}
      <section className="px-4 pb-5">
        <PopularList />
      </section>

      {/* 6. Clearance for StickyAdBar */}
      <div className="h-20" />
    </main>
  );
};

export default HomePage;