import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WeaknessToStrengthSection } from './components/WeaknessToStrengthSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { FloatingAudioToggle } from './components/FloatingAudioToggle';
import { ScrollMixerSlider } from './components/ScrollMixerSlider';
import { BackgroundCircles } from './components/BackgroundCircles';

export default function App() {
  return (
    <div className="relative bg-[#121212] min-h-screen">
      {/* Background decorative circles */}
      <BackgroundCircles />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WeaknessToStrengthSection />
        <ProjectsSection />
        <Footer />
        
        <FloatingAudioToggle />
        <ScrollMixerSlider />
      </div>
    </div>
  );
}