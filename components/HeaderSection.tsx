
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Navbar } from './Navbar';
import Silk from './Silk';
import LightRays from './LightRays';
import { InvestIcon, ClockIcon, MedalIcon, FlashIcon } from './Icons';

export const HeaderSection: React.FC = () => {
  const bulletsContainerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const headline = "Ihre Produkte auf Amazon – gelauncht & skaliert";

  const bulletItems = [
    { 
      title: "Wenig Risiko", 
      desc: "Performance-basiert", 
      detail: "Sicherheit durch erfolgsabhängige Modelle.",
      icon: <InvestIcon className="w-5 h-5" />
    },
    { 
      title: "Mehr Umsatz", 
      desc: "Skalierbare Prozesse", 
      detail: "Wachstumsstrategien für Ihr Business.",
      icon: <ClockIcon className="w-5 h-5" />
    },
    { 
      title: "Full Service", 
      desc: "Minimaler Aufwand", 
      detail: "Wir übernehmen die Arbeit komplett.",
      icon: <FlashIcon className="w-5 h-5" />
    },
    { 
      title: "Marktführer", 
      desc: "Amazon Dominanz", 
      detail: "Positionieren Sie Ihre Marke ganz oben.",
      icon: <MedalIcon className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      
      // 1. Initial background line
      tl.fromTo(lineRef.current, 
        { scaleX: 0, transformOrigin: "center" }, 
        { scaleX: 1, duration: 1.4, ease: "expo.inOut" }
      );

      // 2. Eyebrow animation
      tl.fromTo(eyebrowRef.current?.querySelectorAll('.eyebrow-content'), 
        { opacity: 0, y: 12, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.12, ease: "power4.out" },
        "-=0.8"
      );

      // 3. Smoother H1 Animation: Word-by-word with aesthetic character blur
      const words = h1Ref.current?.querySelectorAll('.word');
      if (words && words.length > 0) {
        words.forEach((word, wordIdx) => {
          const chars = word.querySelectorAll('.char');
          
          // Smoother, more graceful transition
          tl.fromTo(chars,
            { 
              opacity: 0, 
              y: 25, 
              filter: 'blur(18px)',
              scale: 1.02,
              transformOrigin: "center center"
            },
            { 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)',
              scale: 1,
              duration: 1.3, 
              stagger: 0.035, // Tighter stagger for a more "flowing" look
              ease: "power3.out" // Smoother easing than expo for a softer landing
            },
            wordIdx === 0 ? "-=0.6" : "-=1.05" // Overlap words for a continuous but rhythmic feel
          );
        });
      }

      // 4. Content fade in (Subheadline)
      tl.fromTo(mainContentRef.current?.querySelector('.subheadline'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1.1"
      );

      // 5. Grid items stagger
      const items = bulletsContainerRef.current?.querySelectorAll('.bullet-item');
      if (items) {
        gsap.fromTo(items, 
          { 
            opacity: 0, 
            y: 25, 
            scale: 0.98,
            filter: 'blur(12px)' 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.7
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="relative w-full min-h-screen flex flex-col items-center bg-[#020617] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Silk 
          color="#001d3d" 
          speed={0.08} 
          scale={1.4} 
          noiseIntensity={0.03} 
          rotation={Math.PI / 10} 
        />
      </div>

      <div className="absolute inset-0 z-[1] opacity-40">
        <LightRays 
          raysOrigin="top-center"
          raysColor="#3b82f6"
          raysSpeed={0.15}
          lightSpread={1.0}
          rayLength={2.5}
        />
      </div>
      
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_0%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.98)_100%)]" />

      <Navbar />
      
      <div 
        ref={mainContentRef}
        className="relative z-10 w-full max-w-7xl text-center flex flex-col items-center px-4 sm:px-12 pt-32 sm:pt-40 md:pt-48 lg:pt-60 pb-32"
      >
        
        {/* Editorial Eyebrow */}
        <div ref={eyebrowRef} className="mb-8 sm:mb-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 eyebrow-content">
            <span className="text-blue-400 text-[10px] font-black tracking-[1em] uppercase leading-none opacity-80">
              STRATEGIC SCALING
            </span>
          </div>
          <div ref={lineRef} className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
          <span className="eyebrow-content font-editorial italic text-white/70 text-xl sm:text-2xl md:text-3xl tracking-tight">
            Building <span className="text-white">Sustainable Growth</span> on Amazon.
          </span>
        </div>

        {/* GSAP Word-by-Word Animated Headline - Adjusted max-w for 3 lines on Desktop */}
        <div className="mb-8 sm:mb-10 w-full max-w-[340px] sm:max-w-2xl md:max-w-3xl lg:max-w-[1000px] px-2 sm:px-0">
          <h1 
            ref={h1Ref} 
            className="text-[34px] sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight sm:tracking-tighter leading-[1.1] sm:leading-[1.05] uppercase text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-wrap justify-center overflow-visible"
          >
            {headline.split(' ').map((word, wIdx) => (
              <span key={wIdx} className="word inline-block whitespace-nowrap mx-[0.12em] py-0.5 sm:py-1">
                {word.split('').map((char, cIdx) => (
                  <span key={cIdx} className="char inline-block will-change-[transform,opacity,filter]">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <p className="subheadline w-full max-w-3xl text-sm sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-semibold tracking-tight mb-14 sm:mb-16 balance px-6 sm:px-4 opacity-0">
          Vollständiges Management von der Analyse bis zur Marktführerschaft. <br className="hidden sm:block" />
          Wir sichern Ihren Erfolg durch datenbasierte Präzision.
        </p>

        <div 
          ref={bulletsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-20 sm:mb-24 w-full max-w-5xl mx-auto"
        >
          {bulletItems.map((item, idx) => (
            <div key={idx} className="bullet-item group relative flex flex-col items-start text-left p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.08] border border-white/20 backdrop-blur-3xl hover:bg-white/[0.12] hover:border-blue-400/60 transition-all duration-1000 overflow-hidden cursor-default shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/[0.12] blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="flex items-center justify-between w-full mb-6 sm:mb-8 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[0.9rem] sm:rounded-[1.1rem] bg-blue-500/30 border border-blue-400/40 flex items-center justify-center text-blue-200 shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-700">
                  <span className="scale-90 sm:scale-100">{item.icon}</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-6 sm:w-8 h-[1px] bg-white/30" />
                   <span className="text-[11px] sm:text-[12px] font-black text-white/40 tracking-widest italic">0{idx + 1}</span>
                </div>
              </div>
              
              <div className="relative z-10 space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-wider group-hover:text-blue-300 transition-colors duration-700">
                  {item.title}
                </h3>
                <span className="block text-blue-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] leading-none mb-1 sm:mb-2">
                  {item.desc}
                </span>
                <p className="text-[14px] sm:text-[15px] md:text-[17px] font-editorial italic text-slate-100 leading-snug tracking-wide group-hover:text-white transition-colors duration-700">
                  {item.detail}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-transparent overflow-hidden">
                <div className="w-full h-full bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-12">
          <button className="group relative flex items-center justify-center gap-6 text-white transition-all font-black tracking-[0.45em] text-[11px] sm:text-[13px] uppercase bg-blue-600/20 backdrop-blur-2xl px-12 sm:px-18 py-6 sm:py-8 rounded-full border border-blue-400/50 hover:border-blue-400 hover:bg-blue-600/30 active:scale-95 transition-all duration-500 shadow-[0_20px_40px_rgba(59,130,246,0.3)] overflow-hidden">
            <span className="relative z-10">Kostenlose Potenzial Analyse</span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center overflow-hidden shadow-2xl">
                     <img src={`https://i.pravatar.cc/100?u=${i + 312}`} className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500" alt="Team Member" />
                  </div>
                ))}
             </div>
             <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.35em] text-slate-300">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                Live: Strategie-Slots Q4 Aktiv
             </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-[2]" />
    </header>
  );
};
