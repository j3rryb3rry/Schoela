
import React from 'react';
import { InvestIcon, ClockIcon, MedalIcon, FlashIcon } from './Icons';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <InvestIcon className="w-6 h-6 text-blue-400" />,
      title: "Risikolose Investition",
      description: <>Kein finanzielles Risiko aufgrund <strong>minimaler</strong> Investitions- und Folgekosten</>
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-blue-400" />,
      title: "Mehr Zeit",
      description: <>Sie konzentrieren sich auf das Produkt, wir managen Ihren <strong>Amazon-Erfolg von A bis Z</strong></>
    },
    {
      icon: <MedalIcon className="w-6 h-6 text-blue-400" />,
      title: "Expertise",
      description: <>Maximale <strong>Professionalität</strong>, komplette Transparenz und absolutes Vertrauen</>
    },
    {
      icon: <FlashIcon className="w-6 h-6 text-blue-400" />,
      title: "Performance",
      description: <>Wir launchen Ihr Produkt erfolgreich innerhalb von <strong>sechs Wochen</strong></>
    }
  ];

  return (
    <section className="relative w-full bg-[#020617] py-24 sm:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Global Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
          
          {/* Top-Left: Main Headline (Col 1-8) */}
          <div className="lg:col-span-8 bg-[#020617] p-8 sm:p-16 relative overflow-hidden group">
            {/* Subtle Gradient Stroke Highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-8 block opacity-80">
              Partnerschaft & Werte
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.95] uppercase max-w-2xl">
              Kooperation mit uns <span className="text-slate-500">lohnt sich</span>
            </h2>
            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium tracking-tight">
              Unsere Leistung lässt sich am Erfolg Ihrer Produkte auf Amazon messen. 
              Das ist die Motivation hinter unserem Handeln.
            </p>
          </div>

          {/* Top-Right: Image Block (Col 9-12) */}
          <div className="lg:col-span-4 bg-[#020617] relative min-h-[300px] lg:min-h-full overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop" 
              alt="Business Cooperation" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-[#020617]/80" />
          </div>

          {/* Bottom Grid: 4 Benefit Cells */}
          {benefits.map((benefit, idx) => (
            <div key={idx} className="lg:col-span-3 bg-[#020617] p-8 sm:p-10 relative group hover:bg-white/[0.02] transition-colors duration-500">
              {/* Vertical Highlight Line */}
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500 shadow-lg shadow-blue-500/5">
                {benefit.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                {benefit.description}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* Bottom Bar: Action Cell (Col 1-12) */}
          <div className="lg:col-span-12 bg-[#020617] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
                Aktuelle Kapazität: 2 Slots verfügbar für Q4
              </span>
            </div>
            
            <button className="group flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-xs uppercase bg-white/10 px-8 py-5 rounded-2xl border border-blue-400/50 hover:bg-white/15 hover:border-blue-400 active:scale-95 shadow-2xl shadow-blue-500/10">
              <span>Jetzt Potenzial prüfen</span>
              <div className="w-14 h-[1px] bg-blue-400 transition-all duration-500 hidden xs:block" />
            </button>
          </div>

        </div>

        {/* Floating Background Labels for Editorial Vibe */}
        <div className="absolute -left-12 top-1/2 -rotate-90 text-[100px] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap hidden xl:block">
          Management Excellence
        </div>
      </div>
    </section>
  );
};
