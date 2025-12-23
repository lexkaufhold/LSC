
import React from 'react';
import { Award, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

export const ELIGIBILITY_REQUIREMENTS = [
  {
    id: 1,
    text: "Achieve a score of 5 on the AP Chemistry Exam.",
    icon: <Award className="w-6 h-6 text-[#002855]" />
  },
  {
    id: 2,
    text: "Open exclusively to Lincoln High School Sophomores currently enrolled in AP Chemistry.",
    icon: <GraduationCap className="w-6 h-6 text-[#002855]" />
  },
  {
    id: 3,
    text: "Receive a formal recommendation from Lincoln High School's master teacher, Jaws.",
    icon: <CheckCircle className="w-6 h-6 text-[#002855]" />
  },
  {
    id: 4,
    text: "Attain a superior score on the Introductory Organic Chemistry Entrance Exam.",
    icon: <BookOpen className="w-6 h-6 text-[#002855]" />
  }
];

export const INTRO_VIDEOS = [
  {
    id: 'v1',
    title: 'Drawing Skeletal Structures',
    description: 'The foundation of organic communication: moving from Lewis to bond-line structures.',
    thumbnail: 'https://images.unsplash.com/photo-1603126010305-2f560a955e37?auto=format&fit=crop&q=80&w=400',
    youtubeId: 'HRkvjKHFNDA'
  },
  {
    id: 'v2',
    title: 'Lewis Structures & Formal Charge',
    description: 'A review of valence electrons, octet rule exceptions, and calculating formal charges.',
    thumbnail: 'https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=400',
    youtubeId: '8pXo-u_Xh6s'
  },
  {
    id: 'v3',
    title: 'Hybridization & Geometry',
    description: 'Mastering sp3, sp2, and sp hybridization and their associated molecular geometries.',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400',
    youtubeId: 'vS7L07vL7rM'
  },
  {
    id: 'v4',
    title: 'Resonance Structures',
    description: 'Understanding electron delocalization and drawing major vs. minor resonance contributors.',
    thumbnail: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400',
    youtubeId: '_v_S6-4S0vU'
  },
  {
    id: 'v5',
    title: 'Acid-Base Chemistry (pKa)',
    description: 'Predicting acidity using ARIO (Atom, Resonance, Induction, Orbitals) and identifying equilibria.',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400',
    youtubeId: 'W_369A_H1Sg'
  },
  {
    id: 'v6',
    title: 'IUPAC Nomenclature & Alkanes',
    description: 'Naming branched alkanes and identifying substituent priority.',
    thumbnail: 'https://images.unsplash.com/photo-1532187875605-1ef6c237ddc4?auto=format&fit=crop&q=80&w=400',
    youtubeId: 'fX2vYmS_Apg'
  },
  {
    id: 'v7',
    title: 'Newman Projections',
    description: 'Analyzing steric hindrance and torsional strain in staggered vs. eclipsed conformations.',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400',
    youtubeId: '4S2_A-B-U2k'
  },
  {
    id: 'v8',
    title: 'Cyclohexane Chairs',
    description: 'Drawing chair conformations, axial vs. equatorial positions, and performing ring flips.',
    thumbnail: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=400',
    youtubeId: 'nI_T2B02Gz8'
  }
];
