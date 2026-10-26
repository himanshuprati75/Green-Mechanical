import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function Footer({ onOpenCallModal }) {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-xl p-3 inline-block shadow-md">
              <img 
                src="/images/logo.png" 
                alt="Green Mechanical - Creating innovative comfort solutions" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Appleton and Northeast Wisconsin’s engineering-led heating, air conditioning, and hydronic boiler contractor. Zero commission sales, transparent economics, and prompt response.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <Award className="w-4 h-4 text-sunburst-500" />
              <span>Desert Aire Certified Service Contractor</span>
            </div>
          </div>

          {/* Col 2: Engineered Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Precision Gas Heating &amp; Furnace Tune-ups</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Air Conditioning &amp; Heat Pump Service</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Hydronic Boilers &amp; In-Floor Radiant Heat</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Desert Aire Pool Dehumidifiers</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Computerized Air Balancing &amp; CAD Audits</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Repair vs. Replace Economic Analysis</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Air Exchangers &amp; Heat Recovery Ventilators</a></li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2">
              Fox Cities Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Appleton, WI 54913 (Hub Headquarters)</li>
              <li>Neenah &amp; Menasha (Winnebago County)</li>
              <li>Grand Chute, Kimberly &amp; Little Chute</li>
              <li>Kaukauna &amp; Fox Crossing</li>
              <li>Greenville &amp; Sherwood</li>
              <li>Oshkosh &amp; Lake Winnebago Communities</li>
              <li>Green Bay &amp; Brown County (Commercial)</li>
            </ul>
          </div>

          {/* Col 4: NAP & Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-navy-800 pb-2">
              Contact &amp; Dispatch
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  509 W. Rolling Meadows Lane<br />
                  Appleton, Wisconsin 54913
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9208580241" className="font-bold text-white hover:text-emerald-400 transition-colors text-sm">
                  (920) 858-0241
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@greenmechanical.com" className="hover:text-emerald-400 transition-colors">
                  info@greenmechanical.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-navy-800">
                <Clock className="w-4 h-4 text-sunburst-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Hours of Operation:</span>
                  <span>Monday – Friday: 7:30 AM – 6:00 PM</span>
                  <span className="block text-emerald-400 font-semibold mt-0.5">24/7 Priority Emergency Dispatch</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal, Slogan & Copyright Bar */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-400 font-medium">
              &copy; {new Date().getFullYear()} Green Mechanical LLC. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Creating innovative comfort solutions • Licensed, Bonded &amp; Insured in Wisconsin
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-slate-300">About Founder</a>
            <span>•</span>
            <a href="#craftsmanship" className="hover:text-slate-300">Project Photos</a>
            <span>•</span>
            <a href="#faq" className="hover:text-slate-300">Filter FAQ</a>
            <span>•</span>
            <a href="#dispatch-form" className="text-emerald-400 font-bold hover:underline">Schedule Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
