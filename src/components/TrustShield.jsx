import React from 'react';
import { Award, Cpu, ShieldCheck, Clock, ThumbsUp, CheckCircle, Scale } from 'lucide-react';

export default function TrustShield() {
  const credentials = [
    {
      icon: Award,
      badge: 'Engineering Authority',
      title: 'BSME & MSOE Masters',
      description: 'Founded by an engineer with 20+ years in HVAC design, holding multiple controls & refrigeration patents.',
      color: 'emerald',
    },
    {
      icon: Cpu,
      badge: 'Precision Equipment',
      title: 'Computerized Diagnostics',
      description: 'We utilize computerized energy-loss software, combustion analyzers, and electronic airflow instruments.',
      color: 'navy',
    },
    {
      icon: ShieldCheck,
      badge: 'Certified Specialist',
      title: 'Desert Aire Certified',
      description: 'Official certified service contractor for specialized commercial and residential indoor pool dehumidifiers.',
      color: 'amber',
    },
    {
      icon: Scale,
      badge: 'Unbiased Advice',
      title: 'Zero Invoice-Padding',
      description: 'Transparent solutions tailored to your financial goals. We never push unnecessary equipment replacements.',
      color: 'forest',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-10 sm:py-14 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-forest-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
            The Green Mechanical Difference
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
            Why Northeast Wisconsin Homeowners &amp; Facilities Trust Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Precision engineering and honest craftsmanship replace high-pressure sales tactics.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-emerald-50/40 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 group-hover:border-emerald-400 flex items-center justify-center text-forest-600 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-forest-700" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-forest-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prompt Arrival Banner Quote */}
        <div className="mt-8 bg-gradient-to-r from-navy-900 via-navy-850 to-slate-900 rounded-2xl p-4 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-slate-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white">
                "Our technicians arrive promptly. If they are delayed for any reason, they will notify you immediately."
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                — You will never waste hours waiting for a mechanic who fails to arrive. (Green Mechanical Service Guarantee)
              </p>
            </div>
          </div>
          <a
            href="tel:9208580241"
            className="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105"
          >
            Dispatch An Engineer
          </a>
        </div>

      </div>
    </section>
  );
}
