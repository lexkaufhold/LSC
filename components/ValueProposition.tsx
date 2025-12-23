
import React from 'react';
import { Compass, GraduationCap, Stethoscope } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002855] mb-6">Academic Trajectory</h2>
          <p className="text-lg text-slate-600 font-serif italic">
            Becoming a Lincoln Scholar of Chemistry accelerates your academics more than any other academic program available in Sioux Falls.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 bg-slate-50 p-4 rounded-sm border border-[#EEB111]/20">
              <GraduationCap className="w-10 h-10 text-[#002855]" />
            </div>
            <h3 className="text-xl font-bold text-[#002855] mb-4">Undergraduate Admissions</h3>
            <p className="text-slate-600 leading-relaxed">
              Completing Organic Chemistry while in high school demonstrates academic rigor. 
              This work confirms college-level readiness and scholarly initiative to university committees.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 bg-slate-50 p-4 rounded-sm border border-[#EEB111]/20">
              <Stethoscope className="w-10 h-10 text-[#C8102E]" />
            </div>
            <h3 className="text-xl font-bold text-[#002855] mb-4">Pre-Medical Preparation</h3>
            <p className="text-slate-600 leading-relaxed">
              Organic Chemistry is a core requirement for medical tracks. 
              Mastering this curriculum early provides foundational knowledge for future health science education and professional examinations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 bg-slate-50 p-4 rounded-sm border border-[#EEB111]/20">
              <Compass className="w-10 h-10 text-[#EEB111]" />
            </div>
            <h3 className="text-xl font-bold text-[#002855] mb-4">Academic Flexibility</h3>
            <p className="text-slate-600 leading-relaxed">
              By fulfilling prerequisites early, students gain time in their university schedules to pursue research, 
              secondary majors, or elective concentrations in higher education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
