import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import StatsBar from './components/StatsBar/StatsBar';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid';
import SkillsBentoBox from './components/SkillsBentoBox/SkillsBentoBox';
import FooterContact from './components/FooterContact/FooterContact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProjectsGrid />
        <SkillsBentoBox />
      </main>
      <FooterContact />
    </div>
  );
}

export default App;
