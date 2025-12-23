
import React from 'react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  return (
    <nav className="bg-white border-b-2 border-[#EEB111]/20 sticky top-0 z-50" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
            role="button"
            aria-label="Go to Home"
          >
            <span className="text-lg font-black text-[#002855] tracking-tight font-serif uppercase group-hover:text-[#C8102E] transition">Lincoln Scholarship of Chemistry</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => onNavigate('home')}
              aria-current={activeTab === 'home' ? 'page' : undefined}
              className={`text-sm font-bold uppercase tracking-widest transition border-b-2 ${activeTab === 'home' ? 'text-[#002855] border-[#EEB111]' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('learn')}
              aria-current={activeTab === 'learn' ? 'page' : undefined}
              className={`text-sm font-bold uppercase tracking-widest transition border-b-2 ${activeTab === 'learn' ? 'text-[#002855] border-[#EEB111]' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
            >
              Curriculum
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
