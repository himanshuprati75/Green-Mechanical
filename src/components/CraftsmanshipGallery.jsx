import React, { useState } from 'react';
import { Camera, ShieldCheck, Award, Eye, Wrench, CheckCircle } from 'lucide-react';

export default function CraftsmanshipGallery({ onOpenCallModal }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      image: '/images/boiler_installation.jpg',
      title: 'Precision Hydronic Boiler & Radiant Loop',
      category: 'Boiler Engineering',
      caption: 'Award-winning Viessmann hydronic boiler with custom copper primary loop, circulator pumps, and multi-zone heating controls in Appleton.',
    },
    {
      image: '/images/heatpump_installation.jpg',
      title: 'High-Efficiency Heat Pump Condenser',
      category: 'Cooling & Heating',
      caption: 'Level gravel pad installation with vibration dampeners and clean line-set cover protection on an Outagamie County home.',
    },
    {
      image: '/images/van.jpg',
      title: 'Rapid Response Mobile Dispatch Van',
      category: 'Fox Cities Fleet',
      caption: 'Stocked with high-precision digital diagnostic tools, combustion analyzers, and OEM replacement parts for fast single-trip repairs.',
    },
    {
      image: '/images/hero_team.jpg',
      title: 'Computerized Diagnostic Verification',
      category: 'Engineering Standards',
      caption: 'Green Mechanical engineers verify every installation with combustion analysis, static pressure checks, and CFM airflow testing.',
    },
    {
      image: '/images/softandsecure.jpg',
      title: 'Family Trust & Peace of Mind',
      category: 'Company Heritage',
      caption: 'Original Green Mechanical founding photo representing our core ethos: keeping families safe, comfortable, and protected from unnecessary markups.',
    },
    {
      image: '/images/cuttingcosts.jpg',
      title: 'Economic Lifecycle Calculations',
      category: 'Unbiased ROI',
      caption: 'We provide financial analysis to calculate real energy savings and lifecycle cost before recommending repairs or equipment replacements.',
    },
  ];

  return (
    <section id="craftsmanship" className="bg-navy-950 py-16 sm:py-24 text-white border-b border-navy-800 scroll-mt-20 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Photographic Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Craftsmanship In Action &amp; Heritage
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Inspect our real installations across the Fox Cities. Every pipe, wire, and damper is installed to rigorous mechanical engineering standards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">100% Real Wisconsin Work</span>
            <a
              href="tel:9208580241"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Request On-Site Assessment</span>
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-navy-900 border border-navy-800 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/10"></div>
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                  {item.category}
                </span>

                {/* Hover Eye Zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-navy-950/40">
                  <span className="bg-emerald-600 text-white p-3 rounded-full shadow-lg">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Project
                  </span>
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="bg-navy-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[420px] bg-black">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.title} 
                  className="w-full max-h-[420px] object-contain mx-auto"
                />
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-3 right-3 bg-black/60 text-white hover:bg-black/80 rounded-full p-2 text-sm font-bold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedPhoto.caption}
                </p>

                <div className="mt-6 pt-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    509 W. Rolling Meadows Ln, Appleton, WI
                  </span>
                  <a
                    href="tel:9208580241"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl text-center shadow"
                  >
                    Discuss With Engineer: (920) 858-0241
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
