
import React from 'react';
import { HeaderSection } from './components/HeaderSection';
import { FactsSection } from './components/FactsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ProcessSection } from './components/ProcessSection';
import { ValuesSection } from './components/ValuesSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      <HeaderSection />
      <FactsSection />
      <BenefitsSection />
      <ProcessSection />
      <ValuesSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default App;
