
import React from 'react';

export const FactsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0f172a] py-24 sm:py-40 px-6 sm:px-12 overflow-hidden border-t border-white/5">
      {/* Subtile Hintergrund-Akzente für Tiefe */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-start">
        {/* Editorial Eyebrow */}
        <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-10 opacity-80 text-left">
          Marktanalyse Deutschland
        </span>

        {/* Headline */}
        <div className="w-full mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] text-left">
            Amazon in Deutschland: <br />
            <span className="text-slate-500">Die Fakten</span>
          </h2>
        </div>

        {/* Main Editorial Text Block - Farben getauscht: Grauer Text (Slate), weiße Highlights */}
        <div className="w-full lg:w-[95%] text-left">
          <p className="text-[20px] sm:text-[28px] md:text-[38px] lg:text-[42px] leading-[1.2] font-black text-slate-500 uppercase tracking-tight balance transition-all duration-700">
            Im Jahr 2021 steigerten <strong className="text-white font-black">115.000 KMUs</strong> ihren Umsatz um durchschnittlich <strong className="text-white font-black">40%</strong>. 
            Über <strong className="text-white font-black">2.500 Unternehmen</strong> knackten dabei die <strong className="text-white font-black">1-Million-Euro-Marke</strong>. 
            Heute ist Deutschland der <strong className="text-white font-black">größte Amazon-Marktplatz</strong> in ganz Europa. 
            Ein Volumen, das am Prime Day allein <strong className="text-white font-black">1 Milliarde Euro</strong> in nur <strong className="text-white font-black">36 Stunden</strong> bewegte.
          </p>
        </div>

        {/* Closing Area */}
        <div className="mt-24 pt-16 border-t border-white/10 w-full">
          <div className="flex flex-col items-start mb-16">
            <p className="text-xl sm:text-2xl font-medium text-white/60 tracking-tight italic mb-6 text-left">
              „Sie wissen, dass Amazon funktioniert.“
            </p>
            <p className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none text-left">
              Die Frage ist: <span className="text-blue-400">Wann starten Sie?</span>
            </p>
          </div>
          
          <div className="w-full flex justify-center mt-8">
            <button className="group flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-[13px] sm:text-[16px] uppercase bg-white/10 px-10 sm:px-16 py-5 sm:py-7 rounded-2xl border border-blue-400/50 hover:border-blue-400 hover:bg-white/15 active:scale-95 shadow-2xl">
              <span>Potenzial Analyse anfordern</span>
              <div className="w-16 h-[1px] bg-blue-400 transition-all duration-500 hidden xs:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
