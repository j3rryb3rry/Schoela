
import React from 'react';
import { BoxIcon } from './Icons';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 py-4 sm:py-6">
      <div className="relative mx-auto max-w-[1600px] w-full bg-white/[0.08] backdrop-blur-2xl rounded-2xl px-3 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl shadow-black/50 border border-white/20">
        
        {/* Branding (Left) - Icon + Text */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-10 pl-0.5">
          <div className="p-1 rounded-lg bg-blue-500/20 border border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <BoxIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="h-5 sm:h-6 w-[1px] bg-white/20 hidden xs:block" />
          <span className="text-white font-black text-lg sm:text-2xl tracking-tighter leading-none select-none">
            schoelaconcepts<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Mitte: Desktop Links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          <a href="#" className="text-[13px] font-semibold text-white/70 hover:text-white transition-all tracking-wide">Über uns</a>
          <a href="#" className="text-[13px] font-semibold text-white/70 hover:text-white transition-all tracking-wide">Ablauf</a>
          <a href="#" className="text-[13px] font-semibold text-white/70 hover:text-white transition-all tracking-wide">Häufige Fragen</a>
        </div>

        {/* Rechts: Updated Editorial Button - Now showing previous hover state by default */}
        <div className="z-10 flex justify-end">
          <button className="group flex items-center gap-4 bg-white/10 border border-blue-400/40 text-white text-[10px] sm:text-[11px] font-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl uppercase tracking-[0.2em] transition-all hover:bg-white/15 hover:border-blue-400 active:scale-95 shadow-xl shadow-blue-500/5">
            <span className="xs:hidden">Erstgespräch</span>
            <span className="hidden xs:inline">Erstgespräch</span>
            <div className="w-8 h-[1px] bg-blue-400 transition-all duration-500 hidden sm:block" />
          </button>
        </div>
      </div>
    </nav>
  );
};
