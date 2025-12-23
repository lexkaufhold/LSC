
import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002855] text-white py-16 border-t-4 border-[#EEB111]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EEB111]">Contact & LSC Foundation</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              For administrative inquiries regarding the Lincoln Scholarship of Chemistry (LSC) and entry exams, 
              please reach out to the contacts at Augustana University or the Founder.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-[#EEB111]" />
                <span>Sioux Falls, South Dakota</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EEB111]">Administration & Liaisons</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <a 
                    href="https://linktr.ee/alexanderkaufhold" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-white hover:text-[#EEB111] transition-colors inline-block"
                  >
                    Alexander Kaufhold
                  </a>
                  <p className="text-slate-400 text-sm italic">Founder of the LSC</p>
                  <a href="mailto:lexkaufhold@yahoo.com" className="text-[#EEB111] hover:text-white text-sm flex items-center gap-1 mt-1 transition">
                    <Mail className="w-4 h-4" /> lexkaufhold@yahoo.com
                  </a>
                </div>
                <div>
                  <a 
                    href="https://jj104.k12.sd.us/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-white hover:text-[#EEB111] transition-colors inline-block"
                  >
                    Jim "Jaws" Jarovski
                  </a>
                  <p className="text-slate-400 text-sm italic">AP Chemistry Teacher, Lincoln High School</p>
                  <a href="mailto:james.jarovski@k12.sd.us" className="text-[#EEB111] hover:text-white text-sm flex items-center gap-1 mt-1 transition">
                    <Mail className="w-4 h-4" /> james.jarovski@k12.sd.us
                  </a>
                </div>
                <div>
                  <a 
                    href="https://www.augie.edu/directory/barrett-eichler-phd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-white hover:text-[#EEB111] transition-colors inline-block"
                  >
                    Dr. Barrett Eichler
                  </a>
                  <p className="text-slate-400 text-sm italic">Augustana University Mentor</p>
                  <a href="mailto:barrett.eichler@augie.edu" className="text-[#EEB111] hover:text-white text-sm flex items-center gap-1 mt-1 transition">
                    <Mail className="w-4 h-4" /> barrett.eichler@augie.edu
                  </a>
                </div>
                <div>
                  <a 
                    href="https://www.augie.edu/directory/charlie-weiss-phd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-white hover:text-[#EEB111] transition-colors inline-block"
                  >
                    Dr. Charlie Weiss
                  </a>
                  <p className="text-slate-400 text-sm italic">Chair of Chemistry, AU</p>
                  <a href="mailto:charles.weiss@augie.edu" className="text-[#EEB111] hover:text-white text-sm flex items-center gap-1 mt-1 transition">
                    <Mail className="w-4 h-4" /> charles.weiss@augie.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#EEB111]">Foundational Values</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                Commitment to Rigor
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                Self-Advocacy
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                Academic Integrity
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></div>
                Inter-Institutional Cooperation
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Lincoln Scholarship of Chemistry. Established by Alexander Kaufhold.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Princeton University Class of 2030 <ExternalLink className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
};
