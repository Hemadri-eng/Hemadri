import React, { useState } from 'react';
import BackgroundAmbient from './components/BackgroundAmbient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Currently from './components/Currently';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Updates from './components/Updates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import { projectsData } from './data/projects';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenCaseStudy = (project) => {
    setSelectedCaseStudy(project);
  };

  const handleSelectProjectId = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project && project.caseStudy) {
      setSelectedCaseStudy(project);
    } else {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectResearchId = (researchId) => {
    const target = researchId ? document.getElementById(researchId) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const el = document.getElementById('research');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-ivory selection:bg-champagne-500/20 selection:text-champagne-200">
      {/* Subtle Cinematic Background */}
      <BackgroundAmbient />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Sections in curated sequence */}
        <main className="flex-1">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Currently 
            onSelectProject={handleSelectProjectId}
            onSelectResearch={handleSelectResearchId}
          />
          <About />
          <Projects onOpenCaseStudy={handleOpenCaseStudy} />
          <Skills />
          <Experience />
          <Education />
          <Research />
          <Achievements />
          <Gallery />
          <Updates />
          <Contact />
        </main>

        {/* Editorial Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Executive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
