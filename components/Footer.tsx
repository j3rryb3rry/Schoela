
import React from 'react';
import { BoxIcon } from './Icons';
import RippleGrid from './RippleGrid';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#020617] pt-12 pb-6 px-4 sm:px-6 overflow-hidden border-t border-white/5">
      {/* Hintergrund: RippleGrid (Wiederhergestellt) */}
      <RippleGrid 
        gridColor="#3b82f6" 
        rippleIntensity={0.015} 
        opacity={0.2} 
        gridSize={12} 
        gridRotation={-15}
        mouseInteractionRadius={0.8}
      />
      
      {/* Dekoratives Overlay für Tiefe */}
      <div className="absolute inset-0 pointer-events-none z-1 bg-[radial-gradient(circle_at_50%_100%,_rgba(59,130,246,0.03)_0%,_rgba(2,6,23,0.95)_100%)]" />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Top: Branding & Main Links (Kompakter) */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-5 group">
            <div className="p-1.5 rounded-xl bg-blue-500/10 border border-blue-400/20 shadow-lg group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all duration-500">
              <BoxIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="h-5 w-[1px] bg-white/20" />
            <span className="text-white font-black text-2xl sm:text-3xl tracking-tighter leading-none select-none">
              schoelaconcepts<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Navigation Links (Dichter beieinander) */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-all">Über uns</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-all">Ablauf</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-all">Häufige Fragen</a>
          </div>
        </div>

        {/* Trennlinie */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Bottom: Legal & Copyright (Kompakter) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-500 uppercase">
          <div className="text-center md:text-left opacity-60">
            © 2025 Schoela Concepts. All Rights Reserved.
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
