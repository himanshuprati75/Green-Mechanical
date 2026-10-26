import React, { useState } from 'react';
import { Phone, Copy, Check, X, Clock, ShieldCheck, UserCheck, AlertCircle } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

  if (!isOpen) return null;

  const phoneNumber = '(920) 858-0241';
  const rawNumber = 'tel:9208580241';

  const handleCopy = () => {
    navigator.clipboard.writeText('9208580241');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setCallbackRequested(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-forest-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Fox Cities Direct Engineering Line</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Speak With Green Mechanical
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Zero call centers. Connect directly with our Appleton mechanical dispatch desk.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Clickable / Copyable Phone Box */}
          <div className="bg-slate-50 border-2 border-emerald-500/40 rounded-2xl p-5 text-center space-y-3 shadow-inner">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Emergency &amp; Service Line
            </span>
            
            <a 
              href={rawNumber}
              className="text-2xl sm:text-3xl font-black text-navy-950 hover:text-forest-600 tracking-tight block transition-colors"
            >
              {phoneNumber}
            </a>

            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                href={rawNumber}
                className="inline-flex items-center gap-1.5 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Now</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs px-4 py-2 rounded-lg border border-slate-300 transition-all shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Number'}</span>
              </button>
            </div>
          </div>

          {/* Quick Callback Section */}
          <div className="border-t border-slate-200 pt-5">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Prefer a Fast Callback?
            </span>

            {callbackRequested ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-center text-xs text-forest-800 font-semibold animate-in fade-in duration-200">
                <Check className="w-4 h-4 text-forest-700 inline-block mr-1.5" />
                Callback request logged for {callbackPhone}. An engineer will call you shortly!
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex gap-2">
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number..."
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-forest-600 focus:ring-2 focus:ring-forest-500/20 text-slate-900"
                />
                <button
                  type="submit"
                  className="bg-navy-950 hover:bg-navy-900 text-white font-bold text-xs px-4 py-2.5 rounded-xl shrink-0 transition-all shadow"
                >
                  Request Ring
                </button>
              </form>
            )}
          </div>

          {/* Prompt Arrival Reassurance */}
          <div className="bg-slate-100/70 rounded-xl p-3 flex items-center gap-2.5 text-xs text-slate-600">
            <Clock className="w-4 h-4 text-forest-600 shrink-0" />
            <span>Prompt Arrival Promise: Never left stranded waiting for an absent technician.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
