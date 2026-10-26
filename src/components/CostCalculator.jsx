import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, ShieldCheck, DollarSign, Clock, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CostCalculator({ selectedIssue, onSelectIssue, onApplyVoucher }) {
  const serviceOptions = [
    {
      id: 'furnace',
      name: 'Heating Tune-Up & Combustion Test',
      baseRange: '$99 - $189',
      dispatchTime: 'Same-Day / Within 2-4 Hours',
      typicalSavings: '15% - 25% on Winter Gas Bills',
      description: 'Full teardown, inside/out soot cleaning, gas pressure calibration & digital combustion efficiency report.',
    },
    {
      id: 'ac',
      name: 'Cooling Tune-Up & Coil Scrub',
      baseRange: '$109 - $199',
      dispatchTime: 'Same-Day / Within 2-4 Hours',
      typicalSavings: '18% - 30% on Electric Bills',
      description: 'Detergent scrub of outdoor condenser, motor lubrication, airflow balancing & subcooling/superheat charge tuning.',
    },
    {
      id: 'boiler',
      name: 'Hydronic Boiler & Radiant Service',
      baseRange: '$149 - $289',
      dispatchTime: 'Priority Engineered Dispatch',
      typicalSavings: '20% - 35% System Longevity',
      description: 'Primary/secondary loop diagnostic, zone valve testing, pressure relief calibration & radiant manifold check.',
    },
    {
      id: 'dehumidifier',
      name: 'Desert Aire Dehumidification Service',
      baseRange: '$189 - $349',
      dispatchTime: 'Scheduled Specialist Dispatch',
      typicalSavings: '$500+ in Mold/Structural Prevention',
      description: 'Desert Aire certified contractor inspection, reheat coil analysis & dew-point calibration for indoor pools.',
    },
    {
      id: 'audit',
      name: 'Air Balancing & CAD Energy Audit',
      baseRange: '$179 - $299',
      dispatchTime: 'Within 24 Hours',
      typicalSavings: 'Guaranteed Room-by-Room Comfort',
      description: 'Computerized room-by-room CFM airflow calculation, thermal imaging loss analysis, and duct damper zoning.',
    },
    {
      id: 'breakdown',
      name: 'Emergency No-Heat / AC Breakdown Diagnostic',
      baseRange: '$89 Flat Diagnostic',
      dispatchTime: 'Immediate Fox Cities Emergency (Under 60 Min)',
      typicalSavings: '$0 Overtime Fee with Online Voucher',
      description: 'Complete electrical, control board, and safety switch diagnostic. Diagnostic fee waived upon repair approval.',
    },
  ];

  const [activeService, setActiveService] = useState(selectedIssue || 'furnace');
  const [propertyType, setPropertyType] = useState('residential');
  const [systemAge, setSystemAge] = useState('mature');

  // Keep internal state in sync with parent issue selection
  useEffect(() => {
    if (selectedIssue) {
      setActiveService(selectedIssue);
    }
  }, [selectedIssue]);

  const currentService = serviceOptions.find(s => s.id === activeService) || serviceOptions[0];

  const handleApplyToForm = () => {
    onSelectIssue(activeService);
    if (onApplyVoucher) {
      onApplyVoucher({
        service: currentService.name,
        serviceId: activeService,
        voucherApplied: true,
      });
    }
    const formElement = document.getElementById('dispatch-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="bg-slate-100/80 py-12 sm:py-16 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 bg-emerald-100/70 border border-emerald-300 px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5 text-forest-600" />
            <span>Interactive Transparent Pricing Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight">
            Estimate Your Service &amp; Energy ROI Before Calling
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            No hidden travel charges. No commission markups. Unbiased engineering recommendations.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Options Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Step 1: Choose Your System or Concern
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((service) => {
                    const isSelected = activeService === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          setActiveService(service.id);
                          onSelectIssue(service.id);
                        }}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-forest-50/80 border-forest-600 ring-2 ring-forest-500/30'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-forest-900' : 'text-slate-800'}`}>
                            {service.name}
                          </span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {service.baseRange}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property & Building Type */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 2: Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'residential', label: 'Single-Family' },
                    { id: 'multizone', label: 'Multi-Zone Home' },
                    { id: 'commercial', label: 'Commercial / Pool' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id)}
                      className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all ${
                        propertyType === item.id
                          ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* System Age */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Step 3: Approximate Age of Equipment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'new', label: 'Under 5 Years' },
                    { id: 'mature', label: '5 – 12 Years' },
                    { id: 'old', label: '12+ Years (Aging)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSystemAge(item.id)}
                      className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all ${
                        systemAge === item.id
                          ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authentic Economic Quote with Image */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 flex items-center gap-4">
                <img 
                  src="/images/cuttingcosts.jpg" 
                  alt="Cutting energy costs" 
                  className="w-16 h-12 object-cover rounded-lg shrink-0 border border-amber-300"
                />
                <div className="text-xs text-slate-700">
                  <span className="font-bold text-amber-900 block mb-0.5">Green Mechanical's Economic Analysis:</span>
                  "Should you repair or replace? We perform computerized lifecycle calculations to give you unbiased answers with zero sales pressure."
                </div>
              </div>

            </div>

            {/* Right Summary & Dispatch Estimate Column (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                    Engineered Estimate
                  </span>
                  <span className="text-[11px] bg-sunburst-600/30 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-sunburst-500/40">
                    $50 Voucher Qualified
                  </span>
                </div>

                {/* Selected Service Title */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentService.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                {/* Estimate Metrics Grid */}
                <div className="space-y-3.5 bg-navy-900/80 rounded-2xl p-4 border border-navy-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      Typical Cost Range:
                    </span>
                    <span className="text-lg font-black text-emerald-400">
                      {currentService.baseRange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-navy-800/80 pt-2.5">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Estimated Arrival:
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      {currentService.dispatchTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-navy-800/80 pt-2.5">
                    <span className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-teal-400" />
                      Efficiency Return:
                    </span>
                    <span className="text-xs font-bold text-teal-300">
                      {currentService.typicalSavings}
                    </span>
                  </div>
                </div>

                {/* Guaranteed Terms */}
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Includes combustion analyzer or airflow verification report</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Licensed, insured &amp; backed by our prompt arrival promise</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Transfers directly into Reciprocity Lead Form */}
              <div className="mt-8 pt-4 border-t border-navy-800">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full bg-gradient-to-r from-emerald-500 via-forest-600 to-emerald-600 hover:from-emerald-400 hover:to-forest-500 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-sm sm:text-base btn-emergency-glow"
                >
                  <span>Lock In $50 Web Voucher &amp; Dispatch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Zero obligation • Instant priority placement in Appleton dispatch queue
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
