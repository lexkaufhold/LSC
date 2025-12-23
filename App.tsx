
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Backstory } from './components/Backstory';
import { Eligibility } from './components/Eligibility';
import { VideoLibrary } from './components/VideoLibrary';
import { Footer } from './components/Footer';
import { ValueProposition } from './components/ValueProposition';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'learn'>('home');

  const scrollToSection = (id: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      // Delay to allow state transition and DOM rendering
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setActiveTab} activeTab={activeTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero 
              onStartLearning={() => setActiveTab('learn')} 
              onGoToAbout={() => scrollToSection('backstory')}
            />
            <div id="eligibility">
              <Eligibility />
            </div>
            <ValueProposition />
            <div id="backstory">
              <Backstory />
            </div>
          </>
        )}

        {activeTab === 'learn' && (
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-[#002855] mb-8 text-center">Curated Learning Path</h1>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto font-serif text-lg italic">
              These introductory videos are selected to prepare you for the Organic Chemistry I entrance exam. 
              Master these concepts to qualify for the LSC.
            </p>
            <VideoLibrary />
            <div className="mt-16 bg-[#002855]/5 p-8 rounded-sm border border-[#EEB111]/20 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#002855] mb-4 italic">Preparation is Key</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  The LSC entrance exam covers structural patterns, nomenclature, and foundational mechanisms. 
                  Candidates are encouraged to utilize university-level textbooks and the resources provided above 
                  to ensure mastery before the testing date.
                </p>
                <div className="text-sm font-bold text-[#002855] uppercase tracking-widest">
                  Consult LHS Chemistry Dept for Exam Schedules
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                 <img src="https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=500" alt="Laboratory glassware and molecular models on a desk" className="rounded-sm shadow-xl border-2 border-[#EEB111]/20" />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
