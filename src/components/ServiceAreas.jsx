import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, Clock, Phone } from 'lucide-react';

export default function ServiceAreas({ onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const locations = [
    { city: 'Appleton', county: 'Outagamie / Calumet', status: 'Primary Hub (Immediate)', responseTime: 'Within 30-45 Mins' },
    { city: 'Grand Chute', county: 'Outagamie County', status: 'Immediate Dispatch', responseTime: 'Within 30-45 Mins' },
    { city: 'Neenah', county: 'Winnebago County', status: 'Active Crew Available', responseTime: 'Within 35-50 Mins' },
    { city: 'Menasha', county: 'Winnebago / Calumet', status: 'Active Crew Available', responseTime: 'Within 35-50 Mins' },
    { city: 'Kimberly', county: 'Outagamie County', status: 'Immediate Dispatch', responseTime: 'Within 30-45 Mins' },
    { city: 'Little Chute', county: 'Outagamie County', status: 'Immediate Dispatch', responseTime: 'Within 30-45 Mins' },
    { city: 'Kaukauna', county: 'Outagamie County', status: 'Active Crew Available', responseTime: 'Within 40-55 Mins' },
    { city: 'Fox Crossing', county: 'Winnebago County', status: 'Active Crew Available', responseTime: 'Within 35-50 Mins' },
    { city: 'Greenville', county: 'Outagamie County', status: 'Daily Scheduled Coverage', responseTime: 'Within 45-60 Mins' },
    { city: 'Sherwood', county: 'Calumet County', status: 'Daily Scheduled Coverage', responseTime: 'Within 45-60 Mins' },
    { city: 'Oshkosh', county: 'Winnebago County', status: 'Daily Service Routes', responseTime: 'Within 45-60 Mins' },
    { city: 'Green Bay Area', county: 'Brown County', status: 'Commercial & Pool Systems', responseTime: 'Scheduled Engineering' },
  ];

  const filteredLocations = locations.filter(loc => 
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="service-areas" className="bg-white py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 bg-emerald-50 border border-emerald-300 px-3.5 py-1 rounded-full mb-3">
            <Navigation className="w-3.5 h-3.5 text-forest-600" />
            <span>Northeast Wisconsin Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Fox Cities &amp; Surrounding Communities We Serve
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Based at 509 W. Rolling Meadows Lane, Appleton, WI. Our mobile diagnostic fleet provides rapid dispatch throughout the Fox Valley.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your Wisconsin city or county (e.g. Neenah, Outagamie)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredLocations.map((loc, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-400 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base font-bold text-navy-950 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-forest-600 shrink-0" />
                    {loc.city}
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {loc.county}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-forest-700 font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{loc.status}</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {loc.responseTime}
                </span>
                <a
                  href="tel:9208580241"
                  className="font-bold text-forest-700 hover:text-forest-900"
                >
                  Dispatch &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Out-of-Area Emergency Note */}
        <div className="mt-10 bg-slate-100 rounded-2xl p-4 sm:p-5 text-center text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto border border-slate-200">
          <span>Don't see your specific township listed? We frequently service commercial facilities and custom residences beyond the core Fox Cities.</span>{' '}
          <a href="tel:9208580241" className="font-bold text-navy-950 hover:underline">
            Call (920) 858-0241 to confirm availability.
          </a>
        </div>

      </div>
    </section>
  );
}
