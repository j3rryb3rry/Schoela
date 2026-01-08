
import React from 'react';
import { CheckIcon, ShieldIcon } from './Icons';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Erstgespräch",
      description: "Sichern Sie sich Ihr kostenloses Erstgespräch mit uns, indem Sie sich hier einen freien Termin im Kalender buchen.",
      bullets: [
        "Kurzer Austausch zu Ihrem Produkt",
        "Was für Lösungen wir bieten",
        "Ob wir zusammen passen"
      ],
      visual: (
        <div className="relative w-full max-w-sm mx-auto aspect-square bg-white/[0.03] rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-xl group-hover:border-blue-500/30 transition-all duration-700">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dezember</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-blue-500/40" />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-3 opacity-40">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-bold ${i === 12 ? 'bg-blue-500 text-white opacity-100 scale-125 shadow-lg shadow-blue-500/40' : 'bg-white/5'}`}>
                {i + 1}
              </div>
            ))}
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/20 blur-3xl rounded-full" />
        </div>
      )
    },
    {
      number: "02",
      title: "Kostenlose Produktanalyse",
      description: "Wir analysieren die Erfolgspotenziale Ihrer Produkte auf Amazon",
      bullets: [
        "Wir untersuchen Ihr Produkt im Detail",
        "Markt- und Konkurrenzanalyse",
        "Erarbeiten unserer Handlungsempfehlung"
      ],
      visual: (
        <div className="relative w-full max-w-md mx-auto aspect-[4/3] bg-white/[0.03] rounded-3xl border border-white/10 p-6 shadow-2xl backdrop-blur-xl group-hover:border-blue-500/30 transition-all duration-700 overflow-hidden">
          <div className="flex gap-4 mb-6">
            <div className="h-2 w-16 bg-blue-500/40 rounded-full" />
            <div className="h-2 w-8 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-4">
            <div className="h-24 w-full bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent w-1/2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
              <div className="h-20 bg-white/5 rounded-xl border border-white/5" />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 blur-[60px] rounded-full" />
        </div>
      )
    },
    {
      number: "03",
      title: "Strategiegespräch",
      description: "Bei positiver Produktpotenzialanalyse erfolgt der Deep Dive im Strategiegespräch. Hier besprechen wir die nächsten Schritte.",
      bullets: [
        "Aufzeigen der Produktpotentiale",
        "Projekt-Timeline vorstellen",
        "Handshake Ja - Nein"
      ],
      visual: (
        <div className="relative group/img overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
            alt="Strategy Meeting" 
            className="w-full h-auto aspect-video object-cover grayscale opacity-50 group-hover/img:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <div className="w-1 h-3 bg-blue-400 rounded-full" />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#020617] py-24 sm:py-48 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.05)_0%,_rgba(2,6,23,0)_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header Content - Jetzt Linksbündig */}
        <div className="text-left mb-24 sm:mb-40">
          <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.5em] uppercase mb-6 block opacity-80">
            Der Fahrplan
          </span>
          <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] balance">
            So sehen Ihre nächsten <br /><span className="text-slate-500">Schritte aus</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-32 sm:space-y-64">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-blue-500 z-20 hidden lg:flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-1 h-1 rounded-full bg-white" />
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative p-1">
                    {step.visual}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-start lg:px-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl sm:text-7xl font-black text-blue-500/10 tracking-tighter leading-none">{step.number}</span>
                    <div className="h-[1px] w-12 bg-blue-500/20" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-md font-medium tracking-tight">
                    {step.description}
                  </p>
                  <div className="space-y-4">
                    {step.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-4 group/item">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-400/20 bg-blue-500/5 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-all">
                          <CheckIcon className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-slate-300 font-semibold tracking-tight text-sm sm:text-base">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Integrated CTA - Bleibt Zentriert */}
        <div className="mt-40 sm:mt-64 text-center">
            <div className="inline-flex flex-col items-center gap-8 p-12 sm:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h4 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-4">Bereit für den ersten Schritt?</h4>
                <button className="group relative flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-[13px] sm:text-[18px] uppercase bg-white/10 px-10 sm:px-16 py-5 sm:py-7 rounded-2xl border border-blue-400/50 hover:border-blue-400 hover:bg-white/15 active:scale-95 shadow-2xl">
                    <span>Kostenloses Erstgespräch vereinbaren</span>
                    <div className="w-16 h-[1px] bg-blue-400 transition-all duration-500 hidden xs:block" />
                </button>
                <div className="flex items-center gap-3 opacity-60">
                    <ShieldIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">100% unverbindlich und kostenlos.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
