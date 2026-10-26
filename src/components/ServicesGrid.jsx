import React, { useState } from 'react';
import { Flame, Snowflake, Wrench, Sparkles, Wind, Gauge, ChevronDown, ChevronUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServicesGrid({ onSelectService }) {
  const [showAllServices, setShowAllServices] = useState(false);

  const coreServices = [
    {
      id: 'furnace',
      title: 'Precision Gas Heating & Furnace Tune-Ups',
      tag: 'Wisconsin Winter Defense',
      image: '/images/flames.jpg',
      points: [
        'Complete teardown & inside/out soot & deposit scrubbing',
        'Digital combustion analyzer verification for safety & peak efficiency',
        'Gas pressure calibration & blower speed adjustment',
        'Detailed written status report to plan your maintenance budget',
      ],
      description: 'One of the most thorough heating tune-ups available in Outagamie & Winnebago counties. We ensure safe, warm, and whisper-quiet winter comfort.',
    },
    {
      id: 'ac',
      title: 'Meticulous Air Conditioning & Heat Pumps',
      tag: 'Maximum Summer Comfort',
      image: '/images/heatpump_installation.jpg',
      points: [
        'Industrial detergent deep-scrub of accumulated condenser dirt & debris',
        'Fan motor lubrication & precision airflow tuning',
        'Refrigerant charge adjustment to exact factory subcooling specs',
        'Ductless mini-split options for older Appleton homes without ducts',
      ],
      description: 'Comfortable employees and families are dramatically happier. We ensure you get every ounce of summertime cooling and energy efficiency you pay for.',
    },
    {
      id: 'boiler',
      title: 'Hydronic Radiant Boilers & Snow-Melt Systems',
      tag: 'Engineered Precision',
      image: '/images/boiler_installation.jpg',
      points: [
        'Custom hydronic primary/secondary loop piping & circulator pumps',
        'Individual room-by-room temperature thermostat controls',
        'Radiant in-floor heating for cozy tile floors and workshops',
        'Driveway snow-melting systems — never shovel snow at 4:00 AM again',
      ],
      description: 'The ultimate in customized, flexible temperature control. Compact, ultra-high efficiency European & American boiler systems designed to last decades.',
    },
    {
      id: 'dehumidifier',
      title: 'Desert Aire Dedicated Dehumidifiers',
      tag: 'Certified Contractor',
      image: '/images/showerhead.jpg',
      points: [
        'Official Desert Aire Certified Service Contractor',
        'Founder has designed and serviced pool systems for over a decade',
        'Protects building structures from mold, drywall rot & moisture damage',
        'Reheat coil optimization and digital dew-point monitoring',
      ],
      description: 'Indoor swimming pools and high-moisture facilities require specialized mechanical engineering to prevent catastrophic structural damage.',
    },
  ];

  const extendedServices = [
    {
      id: 'audit',
      title: 'Air Balancing & Computerized Comfort Analysis',
      tag: 'Eliminate Hot & Cold Rooms',
      image: '/images/sunset.jpg',
      points: [
        'Computerized energy loss analysis of your home or facility',
        'Specialized electronic airflow and CFM anemometer instruments',
        'Duct damper zoning to balance stubborn temperatures',
        'CAD documentation for seamless future servicing',
      ],
      description: 'Do you have an office or bedroom that is always freezing or sweltering? We pinpoint the exact airflow imbalance with zero guesswork.',
    },
    {
      id: 'economic',
      title: 'Economic Repair vs. Replace Lifecycle Analysis',
      tag: 'Unbiased Financial Guidance',
      image: '/images/cuttingcosts.jpg',
      points: [
        'Computerized financial spreadsheets comparing alternate solutions',
        'Honest assessment: Is a higher efficiency unit worth the premium?',
        'Estimated payback periods based on Wisconsin utility rates',
        'Zero commission-driven upsells or fake urgency',
      ],
      description: 'Should you repair your 14-year-old furnace or replace it? We give you unbiased math so you can make sensible, financially sound decisions.',
    },
    {
      id: 'exchanger',
      title: 'Air Exchangers & Heat Recovery Ventilators (HRV)',
      tag: 'Fresh Indoor Air Quality',
      image: '/images/fan.jpg',
      points: [
        'Essential for tight, modern energy-efficient building envelopes',
        'Exhausts stale moisture, chemical solvents & indoor VOC impurities',
        'Recovers thermal energy from outgoing room air',
        'Protects water heaters and dryers from air starvation',
      ],
      description: 'Modern tight homes trap dangerous moisture and chemicals. An engineered air exchanger dilutes impurities while retaining precious heating and cooling.',
    },
    {
      id: 'filtration',
      title: 'Electrostatic & Electronic Filtration Systems',
      tag: 'Allergen & Virus Defense',
      image: '/images/softandsecure.jpg',
      points: [
        'Guidance on disposable pleated (3M Filtrete) vs reusable filters',
        'Washable electrostatic filters that avoid restricting airflow',
        'High-voltage electronic air cleaners that capture virus-sized particles',
        'Custom-fitted airtight filter racks to prevent bypass leakage',
      ],
      description: 'Remove bacteria-sized particles and allergens while maintaining optimal system airflow and blower longevity.',
    },
  ];

  const handleServiceClick = (serviceId) => {
    onSelectService(serviceId);
    const formEl = document.getElementById('dispatch-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-forest-700 bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full inline-block mb-3">
            Hick's Law Engineered Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Our Core Mechanical Services
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered HVAC installations, precision tune-ups, and specialized dehumidification built for Wisconsin's demanding climate.
          </p>
        </div>

        {/* 4 Core Hero Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20"></div>
                  <span className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-md text-emerald-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/30">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-navy-950 mb-3 group-hover:text-forest-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {service.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full bg-slate-100 hover:bg-forest-600 text-slate-800 hover:text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-sm group-hover:shadow"
                >
                  <span>Select &amp; Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Expandable Extended Services Drawer */}
        {showAllServices && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 animate-in fade-in slide-in-from-top-4 duration-300">
            {extendedServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20"></div>
                    <span className="absolute top-4 left-4 bg-navy-900/90 backdrop-blur-md text-amber-300 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-amber-500/30">
                      {service.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-black text-navy-950 mb-3 group-hover:text-forest-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {service.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full bg-slate-100 hover:bg-forest-600 text-slate-800 hover:text-white font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                  >
                    <span>Request Specialized Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Toggle Button for Hick's Law */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-navy-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-2xl border-2 border-slate-300 shadow-sm transition-all hover:border-slate-400"
          >
            <span>{showAllServices ? 'Show Top 4 Core Services' : 'Explore All 8 Engineered HVAC & IAQ Services'}</span>
            {showAllServices ? <ChevronUp className="w-5 h-5 text-forest-600" /> : <ChevronDown className="w-5 h-5 text-forest-600" />}
          </button>
        </div>

      </div>
    </section>
  );
}
