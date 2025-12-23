
import React from 'react';

export const Backstory: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfcf9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1">
            <span className="text-[#E77500] font-bold uppercase tracking-widest text-sm">The Founder</span>
            <h2 className="text-5xl font-bold text-black mt-2 mb-8">Alexander Kaufhold</h2>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6 font-serif text-xl italic">
                A result of commitment and institutional collaboration.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Alexander Kaufhold, an alumnus of <strong>Lincoln High School</strong> and 
                <strong> student of Princeton University (Class of 2030 Chemistry), focused on research of metal-organic frameworks (MOFs)</strong>, 
                founded the Lincoln Scholarship of Chemistry (LSC) to <strong>codify the accelerated path he pioneered.</strong> 
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                While a high school student, Alexander fulfilled core requirements of an <strong>ACS Bachelor's degree in Chemistry</strong> excluding electives through 
                dual enrollment at <strong>Augustana University</strong>. His coursework included:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-black text-white p-8 rounded-sm border-2 border-[#E77500]">
                <ul className="list-disc list-inside text-sm text-[#E77500] space-y-2 font-bold uppercase tracking-tight">
                  <li>General Chemistry I</li>
                  <li>Organic Chemistry I & II</li>
                  <li>Biochemistry</li>
                  <li>P-Chem: Thermodynamics & Kinetics</li>
                </ul>
                <ul className="list-disc list-inside text-sm text-[#E77500] space-y-2 font-bold uppercase tracking-tight">
                  <li>P-Chem: Quantum & Spectroscopy</li>
                  <li>Analytical Chemistry</li>
                  <li>Inorganic Chemistry</li>
                  <li>Linear Algebra</li>
                </ul>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                This foundation was established with the support of <strong>Dr. Barrett Eichler</strong> and the mentorship of current Chemistry Chair <strong>Dr. Charlie Weiss</strong>. Their support for 
                high school academic advancement is the basis of the LSC.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-80 lg:w-96 sticky top-28 shrink-0">
            <div className="border-4 border-[#E77500] p-2 bg-black shadow-2xl">
              <div className="aspect-square bg-black flex items-center justify-center p-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png" 
                  alt="Princeton University Seal" 
                  className="w-3/5 h-auto object-contain"
                />
              </div>
              <div className="bg-black text-white p-6 mt-2">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#E77500]">Forward Horizon</p>
                <h4 className="text-2xl font-bold mt-2 font-serif italic text-white">Princeton University '30</h4>
                <p className="text-[#E77500] italic mt-1 font-sans text-sm uppercase font-bold tracking-widest">Chemistry & MOF Research</p>
              </div>
            </div>
            
            <div className="mt-8 border-l-4 border-black pl-6 py-4">
              <h4 className="font-bold text-black text-lg mb-2 uppercase tracking-tight">Institutional Collaboration</h4>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                A collaboration between Lincoln High School and Augustana University to support students pursuing advanced academic paths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
