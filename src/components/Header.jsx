import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, MapPin, Menu, X, ChevronRight, Award } from 'lucide-react';

export default function Header({ onOpenCallModal, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Engineering & Trust Announcement Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-1.5 px-4 font-medium border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              ON-CALL HVAC ENGINEERS IN APPLETON, WI
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sunburst-500" />
              Serving Appleton, Neenah, Menasha & Fox Cities
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-300">
              <Award className="w-3.5 h-3.5 text-sunburst-500" />
              Desert Aire Certified & Patented HVAC Solutions
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-slate-400" />
              24/7 Priority Emergency Service
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Authentic Green Mechanical Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" aria-label="Green Mechanical Home">
          <img 
            src="/images/logo.png" 
            alt="Green Mechanical - Creating innovative comfort solutions" 
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
          <a href="#services" className="hover:text-forest-600 transition-colors">Services</a>
          <a href="#calculator" className="hover:text-forest-600 transition-colors flex items-center gap-1">
            <span>Price Guide</span>
            <span className="text-[10px] uppercase tracking-wider bg-emerald-100 text-forest-700 px-1.5 py-0.5 rounded font-bold">Live</span>
          </a>
          <a href="#craftsmanship" className="hover:text-forest-600 transition-colors">Craftsmanship</a>
          <a href="#about" className="hover:text-forest-600 transition-colors">About Us</a>
          <a href="#reviews" className="hover:text-forest-600 transition-colors">Reviews</a>
          <a href="#service-areas" className="hover:text-forest-600 transition-colors">Service Areas</a>
          <a href="#faq" className="hover:text-forest-600 transition-colors">FAQ</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Dispatch Phone Button (Desktop opens modal, mobile taps tel) */}
          <div className="hidden sm:flex flex-col items-end text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-forest-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Fast Local Response
            </span>
            <a 
              href="tel:9208580241"
              onClick={(e) => {
                if (window.innerWidth >= 1024) {
                  e.preventDefault();
                  onOpenCallModal();
                }
              }}
              className="text-lg font-black text-navy-950 hover:text-forest-600 transition-colors tracking-tight flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-sunburst-600" />
              (920) 858-0241
            </a>
          </div>

          <a
            href="tel:9208580241"
            className="sm:hidden flex items-center gap-1.5 bg-forest-600 text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-md btn-emergency-glow"
            aria-label="Call Green Mechanical Now"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => {
              const formEl = document.getElementById('dispatch-form');
              if (formEl) {
                formEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden md:inline-flex items-center justify-center gap-2 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <span>Book Service</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Engineered HVAC Services</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>Diagnostic & Price Calculator</span>
                <span className="text-[10px] bg-emerald-100 text-forest-700 px-1.5 py-0.5 rounded font-bold">Popular</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Craftsmanship & Photo Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>About Mr. Groenewold & Patents</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Homeowner Testimonials</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#service-areas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Service Area Coverage</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 flex items-center justify-between"
            >
              <span>Frequently Asked Questions</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="tel:9208580241"
              className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2 shadow-md btn-emergency-glow"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>Emergency Dispatch: (920) 858-0241</span>
            </a>
            <p className="text-center text-xs text-slate-500">
              509 W. Rolling Meadows Ln, Appleton, WI 54913
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
