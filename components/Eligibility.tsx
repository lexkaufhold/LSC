
import React from 'react';
import { ELIGIBILITY_REQUIREMENTS } from '../constants';

export const Eligibility: React.FC = () => {
  return (
    <section id="eligibility" className="py-24 bg-[#fdfcf9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-[#EEB111] font-bold uppercase tracking-widest text-sm">Entry Protocol</span>
          <h2 className="text-5xl font-bold text-[#002855] mt-2 mb-6">Candidate Requirements</h2>
          <div className="w-24 h-1 bg-[#EEB111] mx-auto mb-8"></div>
          <p className="text-slate-700 max-w-2xl mx-auto text-lg italic">
            The Lincoln Scholarship of Chemistry (LSC) is for Lincoln High School Sophomores who demonstrate proficiency in chemical sciences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {ELIGIBILITY_REQUIREMENTS.map((req) => (
            <div key={req.id} className="bg-white p-10 rounded-sm shadow-sm border border-slate-200 flex flex-col items-center text-center transition hover:border-[#EEB111]">
              <div className="mb-8 p-5 bg-slate-50 border border-slate-100">
                {req.icon}
              </div>
              <p className="text-[#002855] font-bold text-lg leading-relaxed font-serif">
                {req.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-200">
          <div className="md:w-full bg-[#002855] text-white p-16 flex flex-col items-center text-center">
            <h3 className="text-4xl font-bold mb-6 italic text-[#EEB111]">The Scholarship</h3>
            <p className="text-slate-200 text-xl leading-relaxed font-light max-w-2xl">
              Successful candidates will have General Chemistry II waived as a prerequisite. 
              Enrollment into Organic Chemistry I is tuition-free and covered by Augustana University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
