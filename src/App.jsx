import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { CreativeCrafts } from './components/CreativeCrafts';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { ProjectModal } from './components/ProjectModal';
import { CraftModal } from './components/CraftModal';
import { CVModal } from './components/CVModal';
import { Contact } from './components/Contact';
import { InteractiveDecorations } from './components/InteractiveDecorations';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync dark mode class on documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] dark:bg-[#090A0F] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-rose-700 selection:text-white relative">
      
      {/* Interactive Ambient Particles */}
      <InteractiveDecorations />

      {/* Top Navbar */}
      <Navbar
        onOpenCV={() => setIsCVOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          personal={portfolioData.personal}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <Stats
          stats={portfolioData.stats}
        />

        <About
          personal={portfolioData.personal}
          onOpenCV={() => setIsCVOpen(true)}
          onShowToast={showToast}
        />

        {/* Featured Creative Crafts (Scraft Foto) - Highlighted Directly After About Me */}
        <CreativeCrafts
          crafts={portfolioData.creativeCrafts}
          onSelectCraft={(c) => setSelectedCraft(c)}
        />

        <Experience
          education={portfolioData.education}
          experiences={portfolioData.experiences}
          committees={portfolioData.committees}
        />

        <Projects
          projects={portfolioData.projects}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        <Certificates
          certificates={portfolioData.certificates}
        />

        <Contact
          personal={portfolioData.personal}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={portfolioData.personal}
      />

      {/* Craft Project (Scraft Foto) Detail & PDF Viewer Modal */}
      {selectedCraft && (
        <CraftModal
          craft={selectedCraft}
          allCrafts={portfolioData.creativeCrafts}
          onSelectCraft={(c) => setSelectedCraft(c)}
          onClose={() => setSelectedCraft(null)}
        />
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Curriculum Vitae Modal */}
      {isCVOpen && (
        <CVModal
          personal={portfolioData.personal}
          education={portfolioData.education}
          experiences={portfolioData.experiences}
          committees={portfolioData.committees}
          hardSkills={portfolioData.hardSkills}
          softSkills={portfolioData.softSkills}
          onClose={() => setIsCVOpen(false)}
        />
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 no-print toast-animate">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
