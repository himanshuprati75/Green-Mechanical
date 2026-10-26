import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Phone } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How often should I clean or change the air filters in my furnace?',
      a: 'Many manufacturers recommend changing your air filters every three months. However, if you own pets, burn candles, or if anyone in the household smokes, you should replace them more frequently. Certain hobbies such as woodworking or welding also clog filters prematurely. Crucially, if you have recently built or remodeled, change the filter immediately — construction and drywall dust can quickly choke airflow and cause catastrophic heat exchanger damage.',
    },
    {
      q: 'Which air filter should I use — pleated, electrostatic, or electronic?',
      a: 'It depends on your system and health goals. Cheap disposable fiberglass filters only stop large debris. High-quality pleated filters (such as 3M Filtrete) capture bacteria-sized particles effectively. Reusable electrostatic filters apply a static charge to incoming particles and trap dust on a charged pad without restricting airflow. High-voltage electronic air cleaners capture virus-sized particles and fit into dedicated cabinets. Green Mechanical inspects your filter rack to ensure an airtight fit with zero dust bypass.',
    },
    {
      q: 'What makes Green Mechanical’s furnace & AC tune-ups different from competitors?',
      a: 'Most contractors perform a 15-minute superficial visual check. Green Mechanical disassembles your furnace or boiler, thoroughly cleaning dirt, soot, and combustion deposits inside and out. We test gas pressure, calibrate blower speed, and use a digital combustion analyzer to guarantee safe, optimal burn efficiency. For AC units, we perform a deep detergent coil scrub, lubricate motors, and dial in the refrigerant charge to factory subcooling specifications.',
    },
    {
      q: 'Why does a high-efficiency boiler or furnace cost more, and is it worth the investment?',
      a: 'High-efficiency condensing equipment utilizes secondary heat exchangers to capture latent heat that standard units vent out the chimney. Whether it is worth the extra upfront investment depends on your home’s computerized energy-loss profile and Wisconsin fuel prices. Green Mechanical uses proprietary financial software to calculate the exact payback period for your specific home so you can make an economically informed decision with zero guesswork.',
    },
    {
      q: 'Why does an indoor swimming pool or spa require a Desert Aire certified contractor?',
      a: 'Indoor pools constantly evaporate hundreds of gallons of moisture into the air. Standard air conditioners cannot handle the required latent moisture load and will lead to rotted drywall, structural corrosion, and hazardous mold blooms. Green Mechanical is an official Desert Aire Certified Service Contractor; our founder has designed and maintained commercial dehumidifiers for over a decade.',
    },
    {
      q: 'What is your prompt arrival promise?',
      a: 'We respect your time. When you schedule service, our technicians arrive promptly within your confirmed window. If any unexpected delay occurs on a prior emergency, we contact you immediately with updated arrival tracking. You will never spend your day stranded at home waiting for a technician who fails to show up.',
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest-700 bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-forest-600" />
            <span>Clear Answers from Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Straightforward technical explanations regarding furnace maintenance, filtration, and energy efficiency.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-navy-950">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-forest-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-10 p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-navy-950">Have a specific HVAC or dehumidification question?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Call our Appleton office directly to speak with an engineering specialist.</p>
          </div>
          <a
            href="tel:9208580241"
            className="shrink-0 bg-forest-600 hover:bg-forest-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>(920) 858-0241</span>
          </a>
        </div>

      </div>
    </section>
  );
}
