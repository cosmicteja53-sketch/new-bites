import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedMenu } from './components/FeaturedMenu';
import { PromoBanners } from './components/PromoBanners';
import { AboutUs } from './components/AboutUs';
import { FullMenu } from './components/FullMenu';
import { Contact } from './components/Contact';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/ui/SectionDivider';

const App: React.FC = () => {
  return (
    <div className="bg-bg-cream min-h-screen selection:bg-red-accent selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <StatsBar />

        <CategoryGrid />

        <div className="text-bg-cream bg-warm-white"><SectionDivider invert /></div>
        <FeaturedMenu />
        <div className="text-bg-cream bg-warm-white"><SectionDivider /></div>

        <PromoBanners />

        <AboutUs />

        {/* Wave into Green Section */}
        <div className="text-green-dark bg-bg-cream -mb-1"><SectionDivider invert /></div>

        <FullMenu />
        {/* Wave out of Green Section */}
        <div className="text-green-dark bg-bg-cream -mt-1"><SectionDivider /></div>

        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;