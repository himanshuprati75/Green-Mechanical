import React from 'react';
import { Award, GraduationCap, ShieldCheck, HeartHandshake, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AboutUs({ onOpenCallModal }) {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story & Heritage Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl group">
              <img 
                src="/images/hero_team.jpg" 
                alt="Green Mechanical engineering leadership inspecting HVAC equipment in Wisconsin" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

              {/* Founder Heritage Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 text-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-forest-700" />
                  <span className="text-xs font-black uppercase tracking-wider text-navy-950">
                    Engineered In Wisconsin
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Degree in Mechanical Engineering (UW-Milwaukee) &amp; Graduate Studies at MSOE Rader School of Business.
                </p>
              </div>
            </div>

            {/* Historical Heritage Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
              <img 
                src="/images/sunset.jpg" 
                alt="Wisconsin Sunrise" 
                className="w-16 h-12 object-cover rounded-xl shrink-0 border border-slate-300"
              />
              <div className="text-xs text-slate-700">
                <strong className="block text-navy-950 font-bold text-sm mb-0.5">Two Decades of Innovation</strong>
                Providing honest, high-efficiency comfort alternatives across Appleton &amp; Northeast Wisconsin.
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Unbiased Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 bg-emerald-50 border border-emerald-300 px-3.5 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-forest-600" />
              <span>Founder &amp; Engineering Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight leading-tight">
              A Company Built on Engineering Principles, Not Sales Quotas
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Green Mechanical was founded to provide an innovative, customer-oriented alternative for homeowners and businesses seeking sensible, economical comfort solutions.
            </p>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                In addition to his two decades of industry experience, Green Mechanical’s founder, 
                <strong className="text-navy-950 font-bold"> Mr. Groenewold</strong>, earned his Mechanical Engineering degree 
                from the <strong>University of Wisconsin-Milwaukee</strong> and completed his Masters thesis work at the 
                <strong> Milwaukee School of Engineering’s Rader School of Business</strong>. 
                He holds several controls- and refrigeration-related patents, has created numerous lines of residential and commercial HVAC equipment, 
                and has developed custom-tailored solutions for hundreds of complex comfort challenges.
              </p>

              <p>
                Whenever you invite a contractor into your home or commercial facility, you take a leap of faith. 
                Green Mechanical treats clients like valued members of our family. We provide you with the exact services 
                and solutions you need — <strong className="text-navy-950">without costly add-ons that pad your invoice but fail to add value</strong>. 
                Our craftspeople perform your work properly regardless of profit margins, backed by full state licensing and comprehensive insurance.
              </p>
            </div>

            {/* 3 Core Engineering Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <FileCheck className="w-5 h-5 text-forest-600 mb-1.5" />
                <h4 className="text-xs font-bold text-navy-950 uppercase">CAD &amp; Digital Photos</h4>
                <p className="text-[11px] text-slate-500 mt-1">We document your entire installation for easy future maintenance.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-forest-600 mb-1.5" />
                <h4 className="text-xs font-bold text-navy-950 uppercase">Licensed &amp; Insured</h4>
                <p className="text-[11px] text-slate-500 mt-1">Complete protection for your property and total peace of mind.</p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <HeartHandshake className="w-5 h-5 text-forest-600 mb-1.5" />
                <h4 className="text-xs font-bold text-navy-950 uppercase">Punctual Technicians</h4>
                <p className="text-[11px] text-slate-500 mt-1">We arrive promptly or notify you immediately. Zero wasted hours.</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:9208580241"
                className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Call (920) 858-0241</span>
              </a>
              <span className="text-xs text-slate-500">
                509 W. Rolling Meadows Lane, Appleton, WI 54913
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
