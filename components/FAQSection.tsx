
import React, { useState } from 'react';
import { PlusIcon, MinusIcon, ShieldIcon } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Wie verläuft der Zeitraum vom Kickoff bis zum Markteintritt grob ab?",
      answer: "Nach dem Kickoff starten wir sofort mit der Marktanalyse und Optimierung Ihrer Listings. In der Regel erreichen wir den Markteintritt und die ersten signifikanten Umsätze innerhalb von sechs Wochen."
    },
    {
      question: "Was muss ich für die Zusammenarbeit mitbringen?",
      answer: "Sie bringen Ihre Produkte und Ihre Vision mit. Wir benötigen Zugriff auf Ihren Seller Central Account (falls vorhanden) und Produktinformationen. Den Rest übernehmen wir."
    },
    {
      question: "Wie geht es nach dem Produkt-Launch weiter?",
      answer: "Nach dem Launch gehen wir in die Skalierungsphase über. Wir optimieren kontinuierlich Ihre PPC-Kampagnen, das Listing und das Bestandsmanagement, um Ihren Marktanteil nachhaltig zu steigern."
    },
    {
      question: "Wer ist nicht für die Zusammenarbeit geeignet?",
      answer: "Unternehmen, die keine langfristige Markenstrategie verfolgen oder nicht bereit sind, in die notwendige Qualität ihrer Produkte zu investieren, passen weniger gut zu unserem exzellenzorientierten Ansatz."
    },
    {
      question: "Haben wir einen persönlichen Ansprechpartner?",
      answer: "Ja, Sie haben einen festen Strategieberater, der Ihr Projekt von Anfang bis Ende begleitet und jederzeit für Rückfragen zur Verfügung steht."
    },
    {
      question: "Muss ich in komplexe Systemlandschaften investieren?",
      answer: "Nein, wir nutzen unsere eigenen High-End-Tools und Prozesse. Sie benötigen keine zusätzliche Software."
    },
    {
      question: "Sind professionelle Produktbilder im Preis mit inbegriffen?",
      answer: "Im Rahmen unserer Full-Service-Betreuung analysieren wir Ihren Bedarf und koordinieren bei Bedarf erstklassige Shootings, um die Conversion-Rate zu maximieren."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#020617] py-24 sm:py-48 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.03)_0%,_rgba(2,6,23,0)_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Block - Jetzt Linksbündig */}
        <div className="text-left mb-16 sm:mb-24">
          <span className="text-blue-400 text-[10px] sm:text-[12px] font-bold tracking-[0.4em] uppercase mb-6 block opacity-80">
            Klarheit & Transparenz
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1] mb-8 balance">
            Häufige Fragen, die uns <br /><span className="text-slate-500">gestellt werden</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 font-medium tracking-tight opacity-70">
            Hier finden Sie Antworten zu häufig gestellten Fragen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
                openIndex === idx 
                ? 'bg-white/[0.05] border-blue-500/30 shadow-2xl shadow-blue-500/5' 
                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between text-left gap-6"
              >
                <span className={`text-base sm:text-[18px] font-bold tracking-tight transition-colors duration-300 ${openIndex === idx ? 'text-blue-400' : 'text-white/90 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === idx ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white/40 group-hover:text-white group-hover:border-white/30'}`}>
                  {openIndex === idx ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-6 sm:px-10 pb-8 pt-0 text-slate-400 leading-relaxed font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Area - Bleibt Zentriert */}
        <div className="mt-24 sm:mt-40 text-center">
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-10 balance">
                Jetzt kostenloses Erstgespräch <br className="sm:hidden" /> für alle Fragen vereinbaren.
            </h3>
            <div className="flex flex-col items-center gap-10">
                <button className="group flex items-center gap-6 text-white transition-all font-black tracking-[0.2em] text-[13px] sm:text-[16px] uppercase bg-white/10 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border border-blue-400/50 hover:border-blue-400 hover:bg-white/15 active:scale-95 shadow-2xl">
                    <span>Kostenloses Erstgespräch vereinbaren</span>
                    <div className="w-16 h-[1px] bg-blue-400 transition-all duration-500 hidden xs:block" />
                </button>
                <div className="flex items-center gap-3 opacity-60">
                    <ShieldIcon className="w-5 h-5 text-blue-400" />
                    <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">100% unverbindlich und kostenlos.</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
