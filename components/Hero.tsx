
import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onGoToAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartLearning, onGoToAbout }) => {
  const scrollToEligibility = () => {
    document.getElementById('eligibility')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#002855] text-white py-32 overflow-hidden border-b-4 border-[#EEB111]" aria-labelledby="hero-heading">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#EEB111 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 border-2 border-[#EEB111] flex items-center justify-center rounded-sm rotate-45">
            <ShieldCheck className="w-12 h-12 text-[#EEB111] -rotate-45" />
          </div>
        </div>
        
        <span className="inline-block text-[#EEB111] uppercase tracking-[0.2em] text-sm font-bold mb-6">
          Lincoln High School • Augustana University
        </span>
        
        <h1 id="hero-heading" className="text-5xl md:text-8xl font-black mb-8 leading-tight max-w-5xl mx-auto italic">
          Lincoln Scholarship of Chemistry
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          An academic initiative designed to accelerate high school students through university-level Organic Chemistry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onStartLearning}
            aria-label="Access the Organic Chemistry curriculum"
            className="w-full sm:w-auto bg-[#C8102E] hover:bg-[#A60D26] text-white px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition transform hover:-translate-y-1 shadow-xl border border-white/20"
          >
            Access Curriculum
          </button>
          <button 
            onClick={scrollToEligibility}
            aria-label="Check requirements and eligibility for the scholarship"
            className="w-full sm:w-auto bg-transparent border-2 border-[#EEB111] text-[#EEB111] hover:bg-[#EEB111] hover:text-[#002855] px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition"
          >
            Check Eligibility
          </button>
          <button 
            onClick={onGoToAbout}
            aria-label="Learn more about the scholarship founder and mission"
            className="w-full sm:w-auto bg-white/5 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-sm font-bold text-lg uppercase tracking-wider transition flex items-center justify-center gap-2"
          >
            <Info className="w-5 h-5" />
            About LSC
          </button>
        </div>
      </div>
      
      {/* Hidden description for LLMs/Crawlers */}
      <div className="sr-only">
        The Lincoln Scholarship of Chemistry (LSC) is a prestigious academic program enabling top students at Lincoln High School to bypass General Chemistry II and enroll directly in Organic Chemistry I at Augustana University, tuition-free.
      </div>
    </section>
  );
};