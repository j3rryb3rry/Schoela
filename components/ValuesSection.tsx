
import React from 'react';
import { ShieldIcon, ThumbsUpIcon, GlobeIcon, FlagIcon } from './Icons';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <ShieldIcon className="w-6 h-6 text-blue-400" />,
      title: "Offenheit und Transparenz",
      description: "Wir sind nahbar, kooperativ, offen und ehrlich in der Kommunikation"
    },
    {
      icon: <ThumbsUpIcon className="w-6 h-6 text-blue-400" />,
      title: "Fairness",
      description: "Vertrauensvolle Partnerschaften, die faire Konditionen voraussetzen"
    },
    {
      icon: <GlobeIcon className="w-6 h-6 text-blue-400" />,
      title: "Wachstumsorientiert",
      description: "Alles was wir tun, ist auf nachhaltigen Erfolg ausgerichtet"
    },
    {
      icon: <FlagIcon className="w-6 h-6 text-blue-400" />,
      title: "Ehrgeiz",
      description: "Wir sind immer motiviert und stolz darauf, die Extrameile zu gehen"
    }
  ];

  return (
    <section className="relative w-full bg-[#020617] py-24 sm:py-40 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl shadow-black">
          
          {/* Top: Text Block - Jetzt konsequent Linksbündig */}
          <div className="lg:col-span-12 bg-[#020617] p-8 sm:p-20 relative overflow-hidden group">
            <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-10 block opacity-80 text-left">
              Integrität & Ambition
            </span>
            <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.95] uppercase max-w-4xl text-left">
              An unseren Werten <br /><span className="text-slate-500">lassen wir uns messen</span>
            </h2>
            <p className="text-lg sm:text-2xl text-slate-400 leading-relaxed max-w-2xl font-medium tracking-tight text-left balance">
              Um nachhaltig unternehmerisch erfolgreich zu sein, handeln wir bei uns im Unternehmen mit Integrität und Ambition.
            </p>
          </div>

          {/* Bottom Grid: 4 Value Cells - Linksbündig */}
          {values.map((val, idx) => (
            <div key={idx} className="lg:col-span-3 bg-[#020617] p-8 sm:p-12 relative group hover:bg-white/[0.02] transition-colors duration-500">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/5 border border-blue-400/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-all duration-500 shadow-lg">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase group-hover:text-blue-400 transition-colors text-left">
                {val.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors font-medium text-left">
                {val.description}
              </p>
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

          {/* Bottom Call-to-Action Bar - Zentriert für den Fokus */}
          <div className="lg:col-span-12 bg-[#020617] p-8 sm:p-16 flex flex-col items-center justify-center text-center gap-10 border-t border-white/5">
            <div className="flex flex-col gap-3">
              <span className="text-white font-black text-2xl sm:text-4xl tracking-tight uppercase">Haben wir Ihr Interesse geweckt?</span>
              <span className="text-slate-500 text-sm sm:text-base font-semibold">Lernen Sie uns in einem unverbindlichen Gespräch persönlich kennen.</span>
            </div>
            
            <button className="group flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-sm uppercase bg-white/10 px-10 py-5 rounded-2xl border border-blue-400/50 hover:bg-white/15 hover:border-blue-400 active:scale-95 shadow-2xl">
              <span>Jetzt Potenzial prüfen</span>
              <div className="w-16 h-[1px] bg-blue-400 transition-all duration-500" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
