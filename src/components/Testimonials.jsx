import React from 'react';
import { Star, CheckCircle2, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Pat & Paula L.',
      location: 'Appleton, WI',
      project: 'Complete New HVAC System Design & Installation',
      text: 'The professionalism and expertise displayed throughout the planning, design, and installation of our new HVAC system validated our decision to choose Green Mechanical. They were extremely responsive and the follow-up was excellent. They didn’t try to sell us more than what was needed. The work was performed with a tremendous amount of professionalism, and they took care to ensure that the work site was clean and the home was left in great condition. We would highly recommend Green Mechanical to anyone who wants a straightforward, honest, customer-driven process!',
      rating: 5,
      verified: true,
      tag: 'Verified Homeowner',
    },
    {
      name: 'Richard & Beth M.',
      location: 'Appleton, WI',
      project: 'Furnace & Air Conditioner Precision Tune-Up',
      text: 'We contacted Green Mechanical to service our furnace and air conditioner. The organization exhibited true professionalism. You will be delighted with the personalized service. They are competent, qualified, and extremely experienced in the HVAC field. Green Mechanical took the time to listen to our needs, proposed a cost-effective solution, and implemented it. We were totally satisfied with the work Mr. Groenewold had done. He did exactly what he said he was going to do!',
      rating: 5,
      verified: true,
      tag: 'Verified Homeowner',
    },
    {
      name: 'Fox Valley Commercial Facility',
      location: 'Outagamie County, WI',
      project: 'Desert Aire Dehumidification & Air Balancing',
      text: 'Managing indoor pool humidity was an ongoing struggle with previous contractors who simply didn’t understand psychrometrics or moisture control. Green Mechanical brought true mechanical engineering credentials to the table. As a Desert Aire Certified Contractor, they re-engineered our airflow and protected our building from structural decay.',
      rating: 5,
      verified: true,
      tag: 'Facility Director',
    },
    {
      name: 'David & Karen K.',
      location: 'Neenah, WI',
      project: 'Hydronic In-Floor Radiant Heat & Boiler Service',
      text: 'Our radiant boiler was losing pressure right during the first Wisconsin freeze. Mr. Groenewold diagnosed the faulty expansion tank and zoned our manifolds in one visit. No fake sales pressure to replace our entire boiler — just honest, brilliant engineering work.',
      rating: 5,
      verified: true,
      tag: 'Verified Homeowner',
    },
  ];

  return (
    <section id="reviews" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-sunburst-500 text-sunburst-500" />
            <span>Documented Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Loved By Fox Cities Homeowners &amp; Facilities
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read direct feedback from real Appleton and Northeast Wisconsin clients who chose honest engineering over sales gimmicks.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Meta: Stars, Project Tag & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-forest-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {rev.tag}
                  </span>
                </div>

                {/* Project Subhead */}
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project: {rev.project}
                </span>

                {/* Body Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy-950">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {rev.location}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Client</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-navy-950">
              Want straightforward, honest, customer-driven HVAC service?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Call us today. We listen to your goals and tailor the solution to your budget.
            </p>
          </div>
          <a
            href="tel:9208580241"
            className="shrink-0 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all"
          >
            Call (920) 858-0241
          </a>
        </div>

      </div>
    </section>
  );
}
