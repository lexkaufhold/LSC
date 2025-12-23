
import React, { useState } from 'react';
import { INTRO_VIDEOS } from '../constants';
import { Play, X } from 'lucide-react';

export const VideoLibrary: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {INTRO_VIDEOS.map((video) => (
        <div 
          key={video.id} 
          className="bg-white rounded-sm overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col"
          onClick={() => setSelectedVideo(video.youtubeId)}
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-[#002855]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="bg-white p-4 rounded-full shadow-2xl">
                <Play className="w-6 h-6 text-[#002855] fill-current" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
               <span className="text-[10px] text-[#EEB111] uppercase tracking-widest font-bold">Exam 1 Foundation</span>
            </div>
          </div>
          <div className="p-5 flex-grow border-t border-slate-100">
            <h3 className="font-bold text-[#002855] mb-2 font-serif text-lg leading-tight group-hover:text-[#C8102E] transition-colors">{video.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed italic">{video.description}</p>
          </div>
        </div>
      ))}

      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
            className="absolute top-8 right-8 text-white hover:text-[#EEB111] transition-colors p-2"
          >
            <X className="w-10 h-10" />
          </button>
          
          <div 
            className="w-full max-w-5xl aspect-video bg-black rounded-sm overflow-hidden shadow-[0_0_50px_rgba(238,177,17,0.3)] border-2 border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?rel=0&modestbranding=1`}
              title="LSC Curriculum Lecture"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
