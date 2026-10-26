import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, Flame, Snowflake, Wrench, Sparkles, Building2 } from 'lucide-react';

export default function Hero({ onSelectIssue, onOpenCallModal }) {
  const quickIssues = [
    { id: 'furnace', label: 'Furnace / No Heat', icon: Flame, tag: 'Winter Emergency' },
    { id: 'ac', label: 'AC / Heat Pump Repair', icon: Snowflake, tag: 'Cooling Season' },
    { id: 'boiler', label: 'Boiler & Radiant Heat', icon: Wrench, tag: 'Hydronic Specialists' },
    { id: 'dehumidifier', label: 'Pool / Dehumidifier', icon: Sparkles, tag: 'Desert Aire Certified' },
    { id: 'audit', label: 'Energy Loss & Balancing', icon: Building2, tag: 'Computerized CAD' },
  ];

  const handleIssueClick = (issueId) => {
    onSelectIssue(issueId);
    const target = document.getElementById('calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Grid & Engineering Tech Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-10"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-forest-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-sunburst-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Psychological Value & Core Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Dispatch & Heritage Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-navy-900/90 border border-emerald-500/30 rounded-full px-3.5 py-1.5 text-xs sm:text-sm text-slate-200 shadow-inner">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Fox Cities Local Dispatch:</span>
              <span>Appleton • Neenah • Menasha • Oshkosh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Real Mechanical Engineers. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Zero Guesswork.
              </span>{' '}
              Complete Peace of Mind.
            </h1>

            {/* Subtitle / Psychological Calming Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              When your heating or cooling system fails, you don't need a commission-driven salesperson. 
              Founded by <strong className="text-white font-semibold">Mr. Groenewold, Mechanical Engineer</strong> (UW-Milwaukee &amp; MSOE, holder of multiple HVAC patents), 
              Green Mechanical delivers computerized diagnostic accuracy, honest pricing, and prompt arrival across Northeast Wisconsin.
            </p>

            {/* Interactive Issue Dispatch Quick-Selector */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sunburst-500"></span>
                Select Your System To Check Arrival Time &amp; Cost:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickIssues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleIssueClick(item.id)}
                      className="group flex flex-col items-start p-2.5 sm:p-3 rounded-xl bg-navy-900/80 hover:bg-forest-900/60 border border-slate-700 hover:border-emerald-500 text-left transition-all hover:scale-[1.02] shadow-sm"
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <Icon className="w-4 h-4 text-emerald-400 group-hover:text-amber-300 transition-colors" />
                        <span className="text-[10px] text-slate-400 group-hover:text-slate-200 font-medium">{item.tag}</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="tel:9208580241"
                onClick={(e) => {
                  if (window.innerWidth >= 1024) {
                    e.preventDefault();
                    onOpenCallModal();
                  }
                }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-forest-600 via-emerald-600 to-forest-700 hover:from-forest-500 hover:to-emerald-600 text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 btn-emergency-glow"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call Dispatch: (920) 858-0241</span>
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-bold text-base px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all shadow-md"
              >
                <span>Calculate Pricing &amp; Savings</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Quick Micro-Trust Guarantee Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Prompt Arrival Promise</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed &amp; Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-sunburst-500 shrink-0" />
                <span>Zero Costly Add-ons</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Proof & Authentic Engineering Cards (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-800 shadow-2xl group">
              {/* Main Photo of Wisconsin Engineer & Tech with Diagnostic Equipment */}
              <img 
                src="/images/hero_team.jpg" 
                alt="Green Mechanical Wisconsin HVAC engineer analyzing high-efficiency residential furnace" 
                className="w-full h-[380px] sm:h-[430px] lg:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

              {/* Floating Engineering Badge Top Right */}
              <div className="absolute top-4 right-4 bg-navy-900/95 backdrop-blur-md border border-emerald-500/40 text-white rounded-xl p-3 shadow-lg max-w-[210px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-sunburst-500 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Patented Design</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Founder holds multiple controls &amp; refrigeration patents.
                </p>
              </div>

              {/* Floating Baby / Peace of Mind Trust Card Bottom Left */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-900/95 backdrop-blur-md border border-slate-700 text-white rounded-xl p-3.5 shadow-xl flex items-center gap-3.5">
                <img 
                  src="/images/softandsecure.jpg" 
                  alt="Peaceful sleeping child safe in warm home" 
                  className="w-14 h-14 rounded-lg object-cover shrink-0 border border-emerald-500/40"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>The Green Mechanical Pledge</span>
                  </div>
                  <p className="text-xs text-slate-200 italic line-clamp-2">
                    "We treat your home like family. Work done properly regardless of profit margins."
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Dispatch Indicator Pill Below Photo */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Fox Cities Response Crew</span>
              </span>
              <span className="font-semibold text-slate-300">Appleton, WI 54913</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
