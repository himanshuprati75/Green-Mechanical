import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ShieldCheck, Clock, Ticket, AlertTriangle, Send, Sparkles } from 'lucide-react';

export default function LeadCaptureForm({ selectedIssue, voucherData, onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Appleton',
    service: 'furnace',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Sync selected issue from Calculator or Hero
  useEffect(() => {
    if (selectedIssue) {
      setFormData(prev => ({ ...prev, service: selectedIssue }));
    }
  }, [selectedIssue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Generate realistic dispatch ticket
    const randomTicket = 'GM-WI-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <section id="dispatch-form" className="bg-white py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reciprocity Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-300 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Priority Online Dispatch + Instant Voucher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight">
            Schedule Fast Local Service In Fox Cities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Submit your details below to lock in your <strong className="text-forest-700 font-bold">$50 Web Discount</strong> and get immediate queue placement.
          </p>
        </div>

        {/* Voucher Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-forest-700 to-navy-900 rounded-2xl p-4 sm:p-5 text-white mb-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Ticket className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300 block">
                Exclusive Web Courtesy
              </span>
              <p className="text-sm font-bold text-white">
                $50 OFF Any Heating / Cooling Repair + $0 Overtime Fee
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <span className="text-[11px] font-mono bg-emerald-950/80 text-emerald-300 px-3 py-1 rounded-md border border-emerald-400/40 inline-block">
              CODE: GREEN50-DISPATCH
            </span>
            <span className="block text-[10px] text-emerald-200 mt-0.5">Auto-applied upon dispatch</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          
          {submitted ? (
            /* Instant Confirmation State */
            <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-forest-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-forest-700 bg-emerald-100 px-3 py-1 rounded-full">
                  Ticket #{ticketId} Active
                </span>
                <h3 className="text-2xl font-black text-navy-950 mt-2">
                  Dispatch Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong className="text-navy-950">{formData.name}</strong>. A Green Mechanical dispatcher is reviewing your request for <strong className="text-navy-950">{formData.city}</strong>.
                </p>
              </div>

              {/* Status Board */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 max-w-md mx-auto text-left space-y-3 shadow-sm text-xs sm:text-sm">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Selected Service:</span>
                  <span className="font-bold text-navy-950 capitalize">{formData.service} Service</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Applied Discount:</span>
                  <span className="font-bold text-forest-600">$50 Web Voucher Locked In</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Contact Phone:</span>
                  <span className="font-bold text-navy-950">{formData.phone}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600 border-t border-slate-100 pt-2">
                  <span>Status:</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Routing to Local Crew
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-slate-500 mb-3">
                  Need to speak with our engineer immediately for an active leak or total heat loss?
                </p>
                <a
                  href="tel:9208580241"
                  className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dispatch Desk Now: (920) 858-0241</span>
                </a>
              </div>
            </div>
          ) : (
            /* The Active Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Richard Miller"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900 bg-white text-sm transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number (Fastest Response) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(920) 555-0199"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900 bg-white text-sm transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Service Location / City */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your City / Town <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900 bg-white text-sm transition-all"
                  >
                    <option value="Appleton">Appleton (Fox Cities HQ)</option>
                    <option value="Neenah">Neenah</option>
                    <option value="Menasha">Menasha</option>
                    <option value="Grand Chute">Grand Chute</option>
                    <option value="Kimberly">Kimberly</option>
                    <option value="Little Chute">Little Chute</option>
                    <option value="Kaukauna">Kaukauna</option>
                    <option value="Fox Crossing">Fox Crossing</option>
                    <option value="Oshkosh">Oshkosh</option>
                    <option value="Green Bay">Green Bay Area</option>
                    <option value="Other Fox Valley">Other Outagamie / Winnebago Area</option>
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Equipment / Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900 bg-white text-sm transition-all"
                  >
                    <option value="furnace">Heating Tune-up &amp; Furnace Service</option>
                    <option value="ac">Air Conditioning &amp; Heat Pump Tune-up</option>
                    <option value="boiler">Hydronic Boiler &amp; Radiant Heat</option>
                    <option value="dehumidifier">Desert Aire Pool Dehumidifier</option>
                    <option value="audit">Air Balancing &amp; CAD Energy Loss Audit</option>
                    <option value="breakdown">Emergency Repair / No Heat</option>
                  </select>
                </div>

              </div>

              {/* Notes / Description */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Description of the Issue (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Furnace making a clicking noise, uneven room temperatures, pool room humidity high..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900 bg-white text-sm transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-forest-600 via-emerald-600 to-forest-700 hover:from-forest-500 hover:to-emerald-600 text-white font-black py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base btn-emergency-glow"
              >
                <Send className="w-5 h-5" />
                <span>Confirm Service &amp; Claim $50 Voucher</span>
              </button>

              {/* Privacy and Trust Safeguard */}
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-forest-600" />
                  Your phone is strictly confidential. Zero marketing spam.
                </span>
                <span className="text-slate-400">
                  Immediate dispatch: (920) 858-0241
                </span>
              </div>

            </form>
          )}

        </div>

        {/* Emergency Callout Card Below Form */}
        <div className="mt-6 bg-navy-950 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-navy-800 shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/40">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Active Winter Freeze or Gas Leak Emergency?</h4>
              <p className="text-xs text-slate-300">Don't wait for form replies. Our master technicians are on call 24/7.</p>
            </div>
          </div>
          <a
            href="tel:9208580241"
            className="shrink-0 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all flex items-center gap-1.5"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call (920) 858-0241</span>
          </a>
        </div>

      </div>
    </section>
  );
}
