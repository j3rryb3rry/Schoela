
import React from 'react';
import { LinkedInIcon } from './Icons';

export const AboutSection: React.FC = () => {
  const founders = [
    {
      name: "Simon Huxel",
      role: "Founder & Sales Manager",
      image: "https://cdn.prod.website-files.com/66eaf45e884a6a5b7720dcfa/676ffc0421db56a46d65bc5d_somon%20final-p-800.png", 
      li: "#",
    },
    {
      name: "Gerrit Schmidt",
      role: "Founder & Engineering Manager",
      image: "https://cdn.prod.website-files.com/66eaf45e884a6a5b7720dcfa/676ffc0421db56a46d65bc5d_somon%20final-p-800.png", 
      li: "#",
    }
  ];

  return (
    <section className="relative w-full bg-[#020617] py-24 sm:py-48 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        
        {/* Main Editorial Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          
          {/* Left Side: Story & Intro (7 cols) */}
          <div className="lg:col-span-7 bg-[#020617] p-8 sm:p-20 relative group">
            <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-10 block opacity-80">
              Wir machen Sie zum Amazon-Bestseller!
            </span>
            
            <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.9] uppercase">
              Über uns
            </h2>
            
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium tracking-tight balance mb-14">
              Auf dem Karriereweg im Großkonzern und in der Unternehmensberatung wurden Simon und Gerrit in der Nebentätigkeit zum Bestseller auf Amazon. Hier erfahren Sie mehr über die persönlichen Werdegänge von Gerrit und Simon.
            </p>

            {/* Duo Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="group flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-[13px] sm:text-[16px] uppercase bg-white/10 px-8 sm:px-14 py-4 sm:py-6 rounded-2xl border border-blue-400/50 hover:bg-white/15 hover:border-blue-400 active:scale-95 shadow-2xl">
                <span>Kostenloses Erstgespräch</span>
                <div className="w-16 h-[1px] bg-blue-400 transition-all duration-500 hidden xs:block" />
              </button>
              
              <button className="text-slate-400 hover:text-white transition-all font-black tracking-[0.2em] text-[11px] sm:text-xs uppercase px-6 py-4 border-b border-transparent hover:border-blue-400">
                Mehr Erfahren
              </button>
            </div>
          </div>

          {/* Right Side: Founder Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-px bg-white/10">
            {founders.map((person, idx) => (
              <div key={idx} className="bg-[#020617] p-8 sm:p-12 flex items-center gap-8 group hover:bg-white/[0.02] transition-colors duration-700 relative">
                
                {/* Photo Container */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a]">
                   <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex flex-col relative py-4">
                  {/* Founder Name - Styled with "Instrument Serif" (Instrumental) as requested */}
                  <h3 className="text-3xl sm:text-5xl font-editorial italic text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-500 leading-tight">
                    {person.name}
                  </h3>
                  
                  {/* Role - Styled in Sans-Serif */}
                  <p className="text-slate-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] mb-6 leading-none group-hover:text-slate-400 transition-colors font-sans">
                    {person.role}
                  </p>
                  
                  <a href={person.li} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-400/40 transition-all shadow-md">
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Floating Label */}
        <div className="absolute -right-16 top-1/2 -rotate-90 text-[120px] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter whitespace-nowrap hidden 2xl:block">
          The Founders
        </div>
      </div>
    </section>
  );
};
