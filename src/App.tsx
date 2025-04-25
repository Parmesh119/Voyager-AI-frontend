import './App.css';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { RegulationSection } from '@/components/RegulationSection';
import { CoreFeatures } from '@/components/CoreFeatures';
import { StrategicTools } from '@/components/StrategicTools';
import { BeliefsSection } from '@/components/BeliefsSection';
import { WhoWeAre } from '@/components/WhoWeAre';
import { OurVision } from '@/components/OurVision';
import { Partners } from '@/components/Partners';
import { Architecture } from '@/components/Architecture';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RegulationSection />
      <CoreFeatures />
      <StrategicTools />
      <BeliefsSection />
      <WhoWeAre />
      <OurVision />
      <Partners />
      <Architecture />
      <About />
      <Footer />
    </main>
  );
}

export default App;