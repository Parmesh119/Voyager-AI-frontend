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
import AnimatedSection from './AnimatedSection';
import PartnerWithVoyagerAI from '@/components/PartnerWithVoyagerAI';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <Navbar />
      <AnimatedSection><HeroSection /></AnimatedSection>
      <AnimatedSection><FeaturesSection /></AnimatedSection>
      <AnimatedSection><RegulationSection /></AnimatedSection>
      <AnimatedSection><CoreFeatures /></AnimatedSection>
      <AnimatedSection><StrategicTools /></AnimatedSection>
      <AnimatedSection><BeliefsSection /></AnimatedSection>
      <AnimatedSection><WhoWeAre /></AnimatedSection>
      <AnimatedSection><OurVision /></AnimatedSection>
      <AnimatedSection><Partners /></AnimatedSection>\
      <AnimatedSection><PartnerWithVoyagerAI /></AnimatedSection>
      <AnimatedSection><Architecture /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
    </main>
  );
}

export default App;
